import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

const useTestsStore = defineStore("testimonials", {
  state: () => ({
    tests: [],
    currentLanguage: "en", // Initialize with default language
  }),
  actions: {
    async getAllRepositories() {
      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_ENDPOINT_TESTIMONIALS_KH}`
            : `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_ENDPOINT_TESTIMONIALS_EN}`;

        const { data } = await axios.get(apiUrl);
        // console.log(data);
        this.tests = data;
      } catch (err) {
        console.log(err.message);
      }
    },
    setLanguage(language) {
      this.currentLanguage = language; // Update the language in state
      Cookies.set("lang", language, { expires: 7, path: "/" }); // Update cookie
      this.getAllRepositories(); // Fetch posts based on the new language
    },
  },
});

export default useTestsStore;

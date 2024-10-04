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
            ? "https://dummyjson.com/c/a2b6-c5a0-4484-bf28"
            : "https://dummyjson.com/c/ebe8-59ec-419d-905d";

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

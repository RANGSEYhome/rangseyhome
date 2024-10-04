import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

const useBlogPostSpecStore = defineStore("postSpecific", {
  state: () => ({
    postSec: [],
    // link: null,
    currentLanguage: "en", // Initialize with default language
  }),
  actions: {
    async getAllRepositories(link) {
      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? "/c/067f-de7a-4251-85e2"
            : "/c/7c17-2a0f-4bf7-b108";

        const { data } = await axios.get(apiUrl);

        const items = data;
        this.item = items.find((item) => item.link === link); // Fetch the specific item
        console.log(this.item);

        this.postSec = this.item;
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

export default useBlogPostSpecStore;
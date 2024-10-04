import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";

const useBlogPostStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currentLanguage: "en", // Initialize with default language
  }),
  actions: {
    async getAllRepositories() {
      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? "https://dummyjson.com/c/067f-de7a-4251-85e2"
            : "https://dummyjson.com/c/7c17-2a0f-4bf7-b108";

        const { data } = await axios.get(apiUrl);
        // console.log(data);
        this.posts = data;
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

export default useBlogPostStore;

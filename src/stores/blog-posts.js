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
            ? "https://dummyjson.com/c/7f13-1be6-4085-b32a"
            : "https://dummyjson.com/c/9673-bbf8-4724-9a59";

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

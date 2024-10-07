import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";
import router from "@/route";

const useBlogPostStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currentPost: [],
    previousPost: [],
    nextPost: [],
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
        this.setCurrentAndPreviousPost();
      } catch (err) {
        console.log(err.message);
      }
    },
    setLanguage(language) {
      this.currentLanguage = language; // Update the language in state
      Cookies.set("lang", language, { expires: 7, path: "/" }); // Update cookie
      this.getAllRepositories(); // Fetch posts based on the new language
    },

    setCurrentAndPreviousPost(link) {
      // let currentRoute = router.currentRoute.value;
      // let link = "";

      // try {
      //   link = currentRoute.params.id; // Return the ID parameter
      //   // console.log(link);
      // } catch {
      //   link = this.$route.params.id;
      //   // console.log(link);
      // }

      const index = this.posts.findIndex((post) => post.link === link);
      if (index !== -1) {
        this.currentPost = this.posts[index];
        this.previousPost = this.posts[index - 1] || null; // Get the previous post if it exists
        this.nextPost = this.posts[index + 1] || null; // Get next post
      }
    },
  },
});

export default useBlogPostStore;

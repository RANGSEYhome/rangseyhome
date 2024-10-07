import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";
import router from "@/route";

const useBlogPostStore = defineStore("posts", {
  state: () => ({
    posts: [],
    currentPost: [],
    currentPostIndex: "",
    previousPost: [],
    nextPost: [],
    currentLanguage: "en", // Initialize with default language
  }),
  actions: {
    async getAllRepositories() {
      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_ENDPOINT_BLOGPOSTS_KH}`
            : `${process.env.VUE_APP_API_URL}${process.env.VUE_APP_ENDPOINT_BLOGPOSTS_EN}`;

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
    setCurrentAndPreviousPost() {
      let currentRoute = router.currentRoute.value;
      const link = currentRoute.params.id; // Return the ID parameter
      const index = this.posts.findIndex((post) => post.link === link);
      this.currentPostIndex = index;
      if (index !== -1) {
        this.currentPost = this.posts[index];
        this.previousPost = this.posts[index - 1] || null; // Get the previous post if it exists
        this.nextPost = this.posts[index + 1] || null; // Get next post
      }
    },
  },
});

export default useBlogPostStore;

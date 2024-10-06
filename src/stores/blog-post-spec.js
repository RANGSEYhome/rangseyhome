// import axios from "axios";
// import { defineStore } from "pinia";
// import Cookies from "js-cookie";
// import router from "@/route";

// const useBlogPostSpecStore = defineStore("postSpecific", {
//   state: () => ({
//     postSec: [],
//     items: [], // Store all posts
//     previousItem: null,
//     nextItem: null,
//     currentLanguage: "khm", // Initialize with default language
//     item: null, // Store the specific item
//   }),
//   actions: {
//     async getAllRepositories() {
//       this.currentLanguage = Cookies.get("lang") === "en" ? "en" : "khm";

//       try {
//         const apiUrl =
//           this.currentLanguage === "khm"
//             ? "https://dummyjson.com/c/1360-af97-4623-8d7a"
//             : "https://dummyjson.com/c/bc89-4e36-4cc0-89d6";

//         const { data } = await axios.get(apiUrl);
//         this.items = data; // Store fetched posts in state

//         // Get the current route parameter
//         const link = router.currentRoute.value.params.id;

//         // Fetch the specific item
//         this.item = this.items.find((item) => item.link === link);

//         // Handle the index and navigation items
//         const currentIndex = this.items.findIndex((item) => item.link === link);
//         this.previousItem = this.items[currentIndex - 1] || null;
//         this.nextItem = this.items[currentIndex + 1] || null;

//         // Store the current post
//         this.postSec = this.item;
//       } catch (err) {
//         console.error("Error fetching data:", err.message);
//         // Optionally, set an error state or message to notify the user
//       }
//     },
//     setLanguage(language) {
//       this.currentLanguage = language; // Update the language in state
//       Cookies.set("lang", language, { expires: 7, path: "/" }); // Update cookie
//       this.getAllRepositories(); // Fetch posts based on the new language
//     },
//     setLanguageNull(language) {
//       this.currentLanguage = language; // Update the language in state
//       Cookies.set("lang", language, { expires: 7, path: "/" }); // Update cookie
//       // Uncomment this if you want to fetch posts again based on new language
//       // this.getAllRepositories();
//     },
//   },
// });

// export default useBlogPostSpecStore;



import axios from "axios";
import { defineStore } from "pinia";
import Cookies from "js-cookie";
import router from "@/route";

const useBlogPostSpecStore = defineStore("postSpecific", {
  state: () => ({
    postSec: [],
    currentLanguage: "khm", // Initialize with default language
  }),
  actions: {
    async getAllRepositories() {
      if (Cookies.get("lang") === "en") {
        this.currentLanguage = "en";
      } else {
        this.currentLanguage = "khm";
      }

      try {
        const apiUrl =
          this.currentLanguage === "khm"
            ? "https://dummyjson.com/c/7f13-1be6-4085-b32a"
            : "https://dummyjson.com/c/9673-bbf8-4724-9a59";

        const { data } = await axios.get(apiUrl);

        let currentRoute = router.currentRoute.value;
        let link = "";

        try {
          link = currentRoute.params.id; // Return the ID parameter
          console.log(link);
        } catch {
          link = this.$route.params.id;
          console.log(link);
        }

        const items = data;
        this.item = items.find((item) => item.link === link); // Fetch the specific item
        // console.log(this.item);

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
    setLanguageNull(language) {
      this.currentLanguage = language; // Update the language in state
      Cookies.set("lang", language, { expires: 7, path: "/" }); // Update cookie
      // this.getAllRepositories(); // Fetch posts based on the new language
    },
  },
});

export default useBlogPostSpecStore;
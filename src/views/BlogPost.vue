<template>
  <div class="main-wrapper">
    <article class="blog-post px-3 py-5 p-md-5">
      <div class="container single-col-max-width">
        <header class="blog-post-header">
          <h2 class="title mb-2">{{ currentPost.title }}</h2>
          <div class="meta mb-3">
            <span class="date">
              {{ $t("Published") }}
              <span v-if="currentPost.publishedDate">{{
                getRelativeDate(currentPost.publishedDate)
              }}</span>
              <span v-else>N/A</span></span
            >
            <span v-if="currentPost.readTime > 1" class="time"
              >{{ currentPost.readTime }} {{ $t("ReadTimes") }}</span
            ><span v-else>{{ $t("ReadTime") }}</span>
            <!-- <span v-if="currentPost.comments > 1" class="comment"
              ><a class="text-link" href="#">{{ currentPost.comments }} {{ $t("Comments") }}</a></span
            ><span v-else class="comment"
              ><a class="text-link" href="#">{{ currentPost.comments }} {{ $t("Comment") }}</a></span
            > -->
          </div>
        </header>

        <div class="blog-post-body">
          <figure class="blog-banner">
            <img
              class="img-fluid"
              :src="`/${currentPost.imageThumbCard}`"
              alt="image"
            />
            <!-- <figcaption class="mt-2 text-center image-caption">
              Image Credit:
              <a class="theme-link" href="/" target="_blank">N/A</a>
            </figcaption> -->
          </figure>
          <div v-html="currentPost.content"></div>
        </div>

        <nav class="blog-nav nav nav-justified my-5">
          <button
            @click="goToPreviousPost"
            v-if="previousPost"
            class="nav-link-prev nav-item nav-link rounded-left"
          >
            {{ $t("Previous")
            }}<i class="arrow-prev fas fa-long-arrow-alt-left"></i>
          </button>
          <button
            class="nav-link-prev nav-item nav-link rounded-left disabled"
            v-else
          >
            {{ $t("NoPrevious") }}
          </button>
          <button
            @click="goToNextPost()"
            v-if="nextPost"
            class="nav-link-next nav-item nav-link rounded-right"
          >
            {{ $t("Next")
            }}<i class="arrow-next fas fa-long-arrow-alt-right"></i>
          </button>
          <button
            class="nav-link-prev nav-item nav-link rounded-left disabled"
            v-else
          >
            {{ $t("NoNext") }}
          </button>
        </nav>
      </div>
      <!--//container-->
    </article>
    <PromotionBanner></PromotionBanner>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import PromotionBanner from "@/components/PromotionBanner.vue";
import useBlogPostStore from "@/stores/blog-posts";
import { mapActions, mapState } from "pinia";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";
import { km } from "date-fns/locale";

export default {
  components: {
    PromotionBanner,
  },
  data() {
    return {
      loading: true,
      currentLanguage: "khm", // Initialize with default language
    };
  },
  computed: {
    ...mapState(useBlogPostStore, [
      "currentPostIndex",
      "currentPost",
      "nextPost",
      "previousPost",
    ]),
    currentId() {
      return parseInt(this.$route.params.id);
    },
  },
  created() {
    useBlogPostStore().setCurrentAndPreviousPost();
    this.checkPost();
  },
  beforeRouteUpdate(to, from, next) {
    useBlogPostStore().setCurrentAndPreviousPost(); // Update post data
    next(); // Confirm navigation
  },
  methods: {
    ...mapActions(useBlogPostStore, ["getAllRepositories"]),

    getRelativeDate(dateString) {
      const date = new Date(dateString);
      if (Cookies.get("lang") === "en") {
        return formatDistanceToNow(date, { addSuffix: true });
      } else {
        return formatDistanceToNow(date, { locale: km });
      }
    },
    goToPreviousPost() {
      if (this.previousPost) {
        // console.log("Navigating to:", this.previousPost.link);
        this.$router.push(`/blog/${this.previousPost.link}`); // Programmatic navigation
      }
    },
    goToNextPost() {
      if (this.nextPost) {
        // console.log("Navigating to next:", this.nextPost.link);
        this.$router.push(`/blog/${this.nextPost.link}`); // Programmatic navigation
      }
    },
    checkPost() {
      if (this.currentPostIndex == -1) {
        this.$router.replace("/404.html");
      } else {
        this.fetchPost();
      }
    },
    async fetchPost() {
      await this.getAllRepositories();
      this.loading = false;
    },
  },
};
</script>

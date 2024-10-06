<template>
  <div class="main-wrapper">
    <article class="blog-post px-3 py-5 p-md-5">
      <div class="container single-col-max-width">
        <header class="blog-post-header">
          <h2 class="title mb-2">{{ postSec.title }}</h2>
          <div class="meta mb-3">
            <span class="date">
              {{ $t("Published") }}
              <span v-if="postSec.publishedDate">{{
                getRelativeDate(postSec.publishedDate)
              }}</span>
              <span v-else>N/A</span></span
            >
            <span v-if="postSec.readTime > 1" class="time"
              >{{ postSec.readTime }} {{ $t("ReadTimes") }}</span
            ><span v-else>{{ $t("ReadTime") }}</span>
            <!-- <span v-if="postSec.comments > 1" class="comment"
              ><a class="text-link" href="#">{{ postSec.comments }} {{ $t("Comments") }}</a></span
            ><span v-else class="comment"
              ><a class="text-link" href="#">{{ postSec.comments }} {{ $t("Comment") }}</a></span
            > -->
          </div>
        </header>

        <div class="blog-post-body">
          <figure class="blog-banner">
            <img
              class="img-fluid"
              :src="`/${postSec.imageThumbCard}`"
              alt="image"
            />
            <figcaption class="mt-2 text-center image-caption">
              Image Credit:
              <a class="theme-link" href="/" target="_blank">N/A</a>
            </figcaption>
          </figure>
          <div v-html="postSec.content"></div>
        </div>

        <!-- <nav class="blog-nav nav nav-justified my-5">
          <router-link class="nav-link-prev nav-item nav-link rounded-left" :to="`previousItem.link`"
            >Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i
          ></router-link>
          <router-link class="nav-link-next nav-item nav-link rounded-right" to="#"
            >Next<i class="arrow-next fas fa-long-arrow-alt-right"></i
          ></router-link>
        </nav> -->
      </div>
      <!--//container-->
    </article>
    <Promotion></Promotion>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import Promotion from "@/components/PromotionPhoto.vue"
import useBlogPostSpecStore from "@/stores/blog-post-spec";
import { mapActions, mapState } from "pinia";
import { formatDistanceToNow } from "date-fns";
import Cookies from "js-cookie";
import { km } from "date-fns/locale";

export default {
  components:{
    Promotion,
  },
  data() {
    return {
      loading: true,
      currentLanguage: "khm", // Initialize with default language
    };
  },
  computed: {
    ...mapState(useBlogPostSpecStore, ["postSec", "previousItem"]),
  },
  methods: {
    ...mapActions(useBlogPostSpecStore, ["getAllRepositories"]),

    getRelativeDate(dateString) {
      const date = new Date(dateString);
      if (Cookies.get("lang") === "en") {
        return formatDistanceToNow(date, { addSuffix: true });
      } else {
        return formatDistanceToNow(date, { locale: km });
      }
    },
  },
  async mounted() {
    await this.getAllRepositories();
    this.loading = false; // Set loading to false once data is fetched
  },
};
</script>

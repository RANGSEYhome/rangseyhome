<template>
  <div class="main-wrapper">
    <article class="blog-post px-3 py-5 p-md-5">
      <div class="container single-col-max-width">
        <header class="blog-post-header">
          <h2 class="title mb-2">{{ postSec.title }}</h2>
          <div class="meta mb-3">
            <span class="date">{{ postSec.publishedDate }}</span
            ><span class="time">{{ postSec.readTime }}</span
            ><span class="comment"
              ><a class="text-link" href="#">{{ postSec.comments }}</a></span
            >
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

        <nav class="blog-nav nav nav-justified my-5">
          <a class="nav-link-prev nav-item nav-link rounded-left" href="#"
            >Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i
          ></a>
          <a class="nav-link-next nav-item nav-link rounded-right" href="#"
            >Next<i class="arrow-next fas fa-long-arrow-alt-right"></i
          ></a>
        </nav>
      </div>
      <!--//container-->
    </article>

    <section class="promo-section theme-bg-light py-5 text-center">
      <div class="container single-col-max-width">
        <h2 class="title">Promo Section Heading</h2>
        <p>
          You can use this section to promote your side projects etc. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa.
        </p>
        <figure class="promo-figure">
          <a href="https://made4dev.com" target="_blank"
            ><img
              class="img-fluid"
              src="/assets/images/promo-banner.jpg"
              alt="image"
          /></a>
        </figure>
      </div>
      <!--//container-->
    </section>
    <!--//promo-section-->
  </div>
  <!--//main-wrapper-->
</template>

<script>
import useBlogPostSpecStore from "@/stores/blog-post-spec";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useBlogPostSpecStore, ["postSec"]),
  },
  methods: {
    ...mapActions(useBlogPostSpecStore, ["getAllRepositories"]),
  },
  async mounted() {
    await this.getAllRepositories(this.$route.params.id);
    this.loading = false; // Set loading to false once data is fetched
  },
};
</script>

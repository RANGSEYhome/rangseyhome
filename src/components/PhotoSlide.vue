<template>
  <!-- <section class="testimonials-section p-3 p-lg-5"> -->
  <!-- <div class="container"> -->
  <h2 class="section-title font-weight-bold mb-5">{{ $t("Tests") }}</h2>

  <div class="testiomonial-carousel-container">
    <div class="testimonial-carousel tiny-slider">
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-1.jpg" alt="image" />
      </div>
      <!--//item-->
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-2.jpg" alt="image" />
      </div>
      <!--//item-->
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-3.jpg" alt="image" />
      </div>
      <!--//item-->
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-4.jpg" alt="image" />
      </div>
      <!--//item-->
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-5.jpg" alt="image" />
      </div>
      <!--//item-->
      <div class="item">
        <img src="/assets/images/blog/blog-post-thumb-card-6.jpg" alt="image" />
      </div>
      <!--//item-->
    </div>
    <!--//testimonial-carousel-->
  </div>
  <!--//testimonial-carousel-container-->
  <!-- </div> -->
  <!--//container-->
  <!-- </section> -->
  <!--//testimonials-section-->
</template>

<script>
import { initializeSlider } from "@/assets/js/js-customized";
import useTestsStore from "@/stores/testimonials";
import { mapActions, mapState } from "pinia";

export default {
  async mounted() {
    await this.getAllRepositories();
    initializeSlider();
  },
  async created() {
    await this.getAllRepositories();
    // console.log("Get tests");
    // console.log(this.tests);
  },
  computed: {
    ...mapState(useTestsStore, ["tests"]),
  },
  methods: {
    ...mapActions(useTestsStore, ["getAllRepositories"]),
  },
};
</script>

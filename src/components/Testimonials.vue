<template>
    <section class="testimonials-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-5">{{$t('Tests')}}</h2>

        <div class="testiomonial-carousel-container">
          <div class="testimonial-carousel tiny-slider">
            <div class="item" v-for="test, index, in tests" :key="index">
              <div class="item-inner">
                <div class="quote-holder">
                  <blockquote class="quote-content">
                    {{test.quote}}
                  </blockquote>
                  <i class="fas fa-quote-left"></i>
                </div>
                <!--//quote-holder-->
                <div class="source-holder">
                  <div class="source-profile">
                    <img
                      :src="test.author.profileImage"
                      alt="image"
                    />
                  </div>
                  <div class="meta">
                    <div class="name">{{test.author.name}}</div>
                    <div class="info">{{test.author.title}}</div>
                  </div>
                </div>
              </div>
              <!--//item-inner-->
            </div>
            <!--//item-->
           
          </div>
          <!--//testimonial-carousel-->
        </div>
        <!--//testimonial-carousel-container-->
      </div>
      <!--//container-->
    </section>
    <!--//testimonials-section-->
</template>

<script>
import { initializeSlider } from "@/assets/js/js-customized";
import useTestsStore from "@/stores/testimonials";
import { mapActions, mapState } from "pinia";

export default{
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
}
</script>
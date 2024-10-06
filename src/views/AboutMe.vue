<template>
  <div class="main-wrapper">
    <section class="about-me-section p-3 p-lg-5 theme-bg-light">
      <div class="container">
        <div class="profile-teaser row">
          <div class="col">
            <h2 class="name font-weight-bold mb-1">{{ $t("BlogName") }}</h2>
            <div class="tagline mb-3">
              {{ $t("ShortProf") }}
            </div>
            <div class="bio mb-4">
              {{ $t("AboutDesc1") }}
              <router-link class="text-link" to="/blog">{{
                $t("MyBlog")
              }}</router-link
              >{{ $t("FullStop") }}
              {{ $t("AboutDesc2") }}
              <router-link class="text-link" to="/resume">{{
                $t("MyOnlineCv")
              }}</router-link
              >{{ $t("FullStop") }}
            </div>
            <!--//bio-->
            <div class="mb-4">
              <router-link class="btn btn-primary me-2 mb-3" to="/blog"
                ><i class="fas fa-arrow-alt-circle-right me-2"></i
                ><span class="d-none d-md-inline">{{
                  $t("ReadBlog")
                }}</span></router-link
              >
              <router-link class="btn btn-secondary mb-3" to="/resume"
                ><i class="fas fa-file-alt me-2"></i
                ><span class="d-none d-md-inline">{{ $t("ViewCv") }}</span>
              </router-link>
            </div>
          </div>
          <!--//col-->

          <div class="col-md-5 col-lg-5">
            <img
              class="profile-image img-fluid mb-3 mb-lg-0 me-md-0"
              style="filter: grayscale(100%)"
              src="assets/images/profile-lg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!--//about-me-section-->

    <section class="overview-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-3">{{ $t("WhatIDo") }}</h2>
        <div class="section-intro mb-5">
          {{ $t("WhatIDoDesc") }}
          <router-link class="text-link" to="/resume">{{
            $t("MyOnlineCv")
          }}</router-link>
          {{ $t("And") }}
          <router-link class="text-link" to="/blog">{{
            $t("MyBlog")
          }}</router-link
          >{{ $t("FullStop") }}
        </div>

        <Skills></Skills>

        <div class="text-center py-3">
          <router-link to="/contact" class="btn btn-primary"
            ><i class="fas fa-arrow-alt-circle-right me-2"></i
            >{{ $t("ContactMeWork") }}
          </router-link>
        </div>
      </div>
      <!--//container-->
    </section>

    <div class="container"><hr /></div>

    <Testimonials></Testimonials>

    <div class="container"><hr /></div>

    <BlogCard></BlogCard>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import Testimonials from "@/components/Testimonials.vue";
import BlogCard from "@/components/BlogCard.vue";
import Skills from "@/components/Skills.vue";

export default {
  components: {
    Testimonials,
    BlogCard,
    Skills,
  },
};
</script>

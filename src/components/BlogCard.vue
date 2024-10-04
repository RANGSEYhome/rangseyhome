<template>
    <section class="latest-blog-section p-3 p-lg-5">
      <div class="container">
        <h2 class="section-title font-weight-bold mb-5">{{$t('LatestPost')}}</h2>
        <div class="row">
          <div
            class="col-md-4 mb-5"
            v-for="(post, index) in posts.slice(0, 3)"
            :key="index"
          >
            <div class="card blog-post-card">
              <img
                class="card-img-top"
                :src="post.imageThumbCard"
                alt="image"
              />
              <div class="card-body">
                <h5 class="card-title">
                  <router-link class="theme-link" :to="`/blog/${post.link}`">{{ post.title }}</router-link>
                </h5>
                <p class="card-text">
                  {{ post.intro }}
                </p>
                <p class="mb-0">
                  <router-link class="text-link" :to="`/blog/${post.link}`">{{$t('ReadMore')}} &rarr;</router-link>
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">{{ post.publishedDate }}</small>
              </div>
            </div>
            <!--//card-->
          </div>
          <!--//col-->
        </div>
        <!--//row-->
        <div class="text-center py-3">
          <router-link to="/blog" class="btn btn-primary"
            ><i class="fas fa-arrow-alt-circle-right me-2"></i>{{$t('ReadBlog')}}</router-link
          >
        </div>
      </div>
      <!--//container-->
    </section>
    <!--//latest-blog-section-->
</template>

<script>
import useBlogPostStore from "@/stores/blog-posts";
import { mapActions, mapState } from "pinia";

export default {
  async created() {
    await this.getAllRepositories();
    // console.log("Get posts");
    // console.log(this.posts);
  },
  computed: {
    ...mapState(useBlogPostStore, ["posts"]),
  },
  methods: {
    ...mapActions(useBlogPostStore, ["getAllRepositories"]),
  },
};
</script>
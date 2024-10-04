<template>
    <div class="main-wrapper">
    <Subscription></Subscription>
    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container single-col-max-width">
        <div class="item mb-5" v-for="post, index, in posts" :key="index">
          <div class="row g-3 g-xl-0">
            <div class="col-2 col-xl-3">
              <img
                class="img-fluid post-thumb"
                :src="post.imageThumb"
                alt="image"
              />
            </div>
            <div class="col">
              <h3 class="title mb-1">
                <router-link class="text-link" :to="`/blog/${post.link}`"
                  >{{ post.title }}</router-link
                >
              </h3>
              <div class="meta mb-1">
                <span class="date">{{post.publishedDate}}</span
                ><span class="time">{{post.readTime}}</span
                ><span class="comment"
                  ><a class="text-link" href="#">{{post.comments}}</a></span
                >
              </div>
              <div class="intro">
                {{post.intro}}
              </div>
              <router-link class="text-link" :to="`/blog/${post.link}`">{{$t('ReadMore')}} &rarr;</router-link>
            </div>
            <!--//col-->
          </div>
          <!--//row-->
        </div>
        <!--//item-->

        <!-- <nav class="blog-nav nav nav-justified my-5">
          <a
            class="nav-link-prev nav-item nav-link d-none rounded-left"
            href="#"
            >Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i
          ></a>
          <a class="nav-link-next nav-item nav-link rounded" href="#"
            >Next<i class="arrow-next fas fa-long-arrow-alt-right"></i
          ></a>
        </nav> -->
      </div>
    </section>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import Subscription from "@/components/Subscription.vue";
import useBlogPostStore from "@/stores/blog-posts";
import { mapActions, mapState } from "pinia";

export default{
  components:{
    Subscription,
  },
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
}
</script>
<template>
  <div class="main-wrapper">
    <SubscriptionForm></SubscriptionForm>
    <section class="blog-list px-3 py-5 p-md-5">
      <div class="container single-col-max-width">
        <div class="item mb-5" v-for="(post, index) in posts" :key="index">
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
                <router-link class="text-link" :to="`/blog/${post.link}`">{{
                  post.title
                }}</router-link>
              </h3>
              <div class="meta mb-1">
                {{ $t("Published") }}
                <span v-if="post.publishedDate">{{
                  getRelativeDate(post.publishedDate)
                }}</span>
                <span v-else>N/A</span>
                <span v-if="post.readTime > 1" class="time"
                  >{{ post.readTime }} {{ $t("ReadTimes") }}</span
                ><span v-else>{{ $t("ReadTime") }}</span>
                <!-- <span v-if="post.comments > 1" class="comment"
                  ><a class="text-link" href="#"
                    >{{ post.comments }} {{ $t("Comments") }}</a
                  ></span
                ><span v-else class="comment"
                  ><a class="text-link" href="#"
                    >{{ post.comments }} {{ $t("Comment") }}</a
                  ></span
                > -->
              </div>
              <div class="intro">
                {{ post.intro }}
              </div>
              <router-link class="text-link" :to="`/blog/${post.link}`"
                >{{ $t("ReadMore") }} &rarr;</router-link
              >
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
import SubscriptionForm from "@/components/SubscriptionForm.vue";
import useBlogPostStore from "@/stores/blog-posts";
import Cookies from "js-cookie";
import { mapActions, mapState } from "pinia";
import { formatDistanceToNow } from "date-fns";
import { km } from "date-fns/locale";

export default {
  components: {
    SubscriptionForm,
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

    getRelativeDate(dateString) {
      const date = new Date(dateString);
      if (Cookies.get("lang") === "en") {
        return formatDistanceToNow(date, { addSuffix: true });
      } else {
        return formatDistanceToNow(date, { locale: km });
      }
    },
  },
};
</script>

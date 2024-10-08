<template>
  <header class="header text-center">
    <div class="force-overflow">
      <h1 class="blog-name pt-lg-4 mb-0">
        <router-link class="no-text-decoration" to="/">{{
          $t("BlogName")
        }}</router-link>
      </h1>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          id="navigation"
          class="collapse navbar-collapse flex-column"
        >
          <div class="profile-section pt-3 pt-lg-0">
            <img
              class="profile-image mb-3 rounded-circle mx-auto"
              src="/assets/images/profile.png"
              alt="image"
            />

            <div class="bio mb-3">
              {{ $t("ShortBio") }}<br /><a
                class="text-link"
                href="https://bit.ly/m/rangsey"
                target="_blank"
                >{{ $t("FindMoreMe") }}</a
              >
            </div>
            <!--//bio-->
            <SocialListRoundBg></SocialListRoundBg>
            <hr />
          </div>
          <!--//profile-section-->

          <ul class="navbar-nav flex-column text-start">
            <li v-for="(item, index) in navItems" :key="index" class="nav-item">
              <router-link
                class="nav-link"
                :to="item.link"
                :class="{ active: $route.path == item.link }"
                ><i class="fas fa-user fa-fw me-2" :class="item.icon"></i
                >{{ $t(item.text)
                }}<span class="sr-only">(current)</span></router-link
              >
            </li>

            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-cogs fa-fw me-2"></i>More Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="project.html">Project Page</a>
                </li>
                <li>
                  <a class="dropdown-item" href="blog-home.html">Blog Home 1</a>
                </li>
                <li>
                  <a class="dropdown-item" href="blog-home-alt.html"
                    >Blog Home 2</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="blog-post.html">Blog Post</a>
                </li>
              </ul>
            </li> -->
          </ul>

          <div class="my-2">
            <a class="btn btn-primary" id="language-toggle"
              ><i class="fas fa-language me-2"></i> ភាសាខ្មែរ</a
            >
          </div>
          <!--// language toggle-->

          <div class="dark-mode-toggle text-center w-100">
            <hr class="mb-4" />
            <h4 class="toggle-name mb-3">
              <i class="fas fa-adjust me-1"></i>{{ $t("DarkMode") }}
            </h4>
            <input class="toggle" id="darkmode" type="checkbox" />
            <label class="toggle-btn mx-auto mb-0" for="darkmode"></label>
          </div>
          <!--//dark-mode-toggle-->

          <div class="profile-section w-100">
            <hr class="mb-1" />
            <div class="bio mb-0">
              <router-link class="text-link mb-0" to="/about-project">{{
                $t("ReadProj")
              }}</router-link>
            </div>
          </div>
          <!--//read more about this project-->
        </div>
      </nav>
    </div>
    <!--//force-overflow-->
  </header>
</template>

<script>
// import my customized js
import {
  setThemeFromCookie,
  setLanguageFromCookie, toggleNavbar,
} from "@/assets/js/js-customized";
import SocialListRoundBg from "@/components/SocialListRoundBg.vue";

export default {
  components: {
    SocialListRoundBg,
  },
  data() {
    return {
      navItems: [
        {
          text: "AboutMe",
          icon: "fa-user",
          link: "/",
        },
        {
          text: "Resume",
          icon: "fa-file-lines",
          link: "/resume",
        },
        {
          text: "Contact",
          icon: "fa-envelope-open-text",
          link: "/contact",
        },
        {
          text: "Blog",
          icon: "fa-blog",
          link: "/blog",
        },
      ],
    };
  },
  mounted() {
    setThemeFromCookie();
    setLanguageFromCookie();
    toggleNavbar();
  },
};
</script>

<template>
  <ul class="social-list list-inline py-2 mx-auto">
    <li class="list-inline-item" v-for="item, index, in socialLinks" :key="index">
      <a :href="item.link"><i class="fa-brands fa-fw" :class="item.icon"></i></a>
    </li>
  </ul>
  <!--//social-list-->
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          link: "https://web.facebook.com/rangseyhome",
          icon: "fa-facebook",
        },
        {
          link: "https://www.youtube.com/@RANGSEYhome",
          icon: "fa-youtube",
        },
        {
          link: "https://www.tiktok.com/@rangseyhome",
          icon: "fa-tiktok",
        },
        {
          link: "https://github.com/RANGSEYhome",
          icon: "fa-github",
        },
      ],
    };
  },
};
</script>
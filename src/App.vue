<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
// import components
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
// register components
  components: {
    Header,
    Footer,
  },
};
</script>

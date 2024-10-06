<template>
  <div class="main-wrapper">
    <section class="cta-section theme-bg-light py-5">
      <div class="container text-center single-col-max-width">
        <h2 class="heading">{{ $t("Contact") }}</h2>
        <div class="intro">
          <p>
            {{ $t("HireMe") }}
            <a class="text-link" href="mailto:info.rangsey@gmail.com"
              >info.rangsey@gmail.com</a
            >
          </p>
          <p>{{ $t("ConnectMe") }}</p>
          <SocialListNoBg></SocialListNoBg>
        </div>
      </div>
      <!--//container-->
    </section>
    <ContactForm></ContactForm>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import SocialListNoBg from "@/components/SocialListNoBg.vue";
import ContactForm from '@/components/ContactForm.vue';

export default {
  components: {
    SocialListNoBg,
	ContactForm
  },
};
</script>

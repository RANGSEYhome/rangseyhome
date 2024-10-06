<template>
  <section class="cta-section theme-bg-light py-5">
    <div class="container text-center single-col-max-width">
      <h2 class="heading">{{ $t("SubsHeading") }}</h2>
      <div class="intro">
        {{ $t("SubsDesc") }}
      </div>
      <div class="single-form-max-width pt-3 mx-auto">
        <form
          @submit.prevent="handleSubmit"
          class="signup-form row g-2 g-lg-2 align-items-center"
        >
          <div class="col-12 col-md-9">
            <label class="sr-only" for="semail">Your email</label>
            <input
              @input="validateEmail"
              v-model="email"
              class="form-control me-md-1"
              :placeholder="$t('SubsInput')"
            />
          </div>
          <div class="col-12 col-md-2">
            <button type="submit" class="btn btn-primary">
              {{ $t("SubsButton") }}
            </button>
          </div>
          <div v-if="errors.email" class="text-danger col-12 col-md-9">
            {{ errors.email }}
          </div>
          <div
            v-if="successMessage"
            class="col-12 col-md-9 alert alert-success"
          >
            {{ successMessage }}
          </div>
          <div v-if="errorMessage" class="col-12 col-md-9 text-danger">
            {{ errorMessage }}
          </div>
        </form>
        <!--//signup-form-->
      </div>
      <!--//single-form-max-width-->
    </div>
    <!--//container-->
  </section>
</template>

<script>
import * as Yup from "yup";

export default {
  data() {
    return {
      email: "",
      errors: { email: null },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async validateEmail() {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email(this.$t('InvEmail'))
          .required(this.$t('ReqEmail')),
      });
      try {
        await schema.validate({ email: this.email });
        this.errors.email = null; // Clear previous error
      } catch (err) {
        this.errors.email = err.message; // Set error message
      }
    },
    async handleSubmit() {
      await this.validateEmail(); // Validate email on submit
      if (!this.errors.email) {
        try {
          // Simulate successful submission
          this.successMessage = this.$t('SubSuccess');
          this.errorMessage = ""; // Clear error message after 3 seconds
          // Clear the input regardless of success or failure
          this.email = "";
        } catch (err) {
          this.onInputChange();
          this.errorMessage = this.$t('SubFail');
          // Clear the input regardless of success or failure
          this.email = "";
        }
      } else {
        if (this.email !== "") {
          this.errorMessage = this.$t('FixError');
        } else {
          this.errorMessage = this.$t('SubFail');
        }
      }

      // Clear messages after a short delay
      setTimeout(() => {
        this.successMessage = ""; // Clear success message after 3 seconds
        this.errorMessage = ""; // Clear error message after 3 seconds
      }, 3000);
    },
    onInputChange() {
      // Clear the error message when the user starts typing
      this.errors.email = null;
    },
  },
};
</script>

<template>
  <section class="contact-section px-3 py-5 p-md-5">
    <div class="container">
      <form
        @submit.prevent="handleSubmit"
        class="contact-form col-lg-8 mx-lg-auto"
      >
        <h3 class="text-center mb-3">{{ $t("GetInTouch") }}</h3>
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <label class="sr-only" for="cname">Name</label>
            <input
              type="text"
              class="form-control"
              :placeholder="$t('Name')"
              v-model="name"
              @input="onInputChange('name')"
            />
            <div v-if="errors.name" class="mt-3 text-danger">
              {{ errors.name }}
            </div>
          </div>
          <div class="col-12 col-md-6">
            <label class="sr-only" for="cemail">Email</label>
            <input
              class="form-control"
              :placeholder="$t('Email')"
              v-model="email"
              @input="onInputChange('email')"
            />
            <div v-if="errors.email" class="mt-3 text-danger">
              {{ errors.email }}
            </div>
          </div>
          <!-- <div class="col-12">
                              <select id="services" class="form-select" name="services">
                                  <option selected>Select a service package you're interested in...</option>
                                  <option value="basic">Basic</option>
                                  <option value="standard">Standard</option>
                                  <option value="premium">Premium</option>
                                  <option value="not sure">Not sure</option>
                              </select>
                              <div class="mt-2">
                                  <small class="form-text text-muted pt-1"><i class="fas fa-info-circle me-2 text-primary"></i>Want to know what's included in each package? Check the <a class="text-link" href="services.html" target="_blank">Services &amp; Pricing</a> page.</small>
                              </div>
                          </div> -->
          <div class="col-12">
            <label class="sr-only" for="cmessage">Your message</label>
            <textarea
              class="form-control"
              :placeholder="$t('EnterMessage')"
              rows="10"
              v-model="message"
              @input="onInputChange('message')"
            ></textarea>
            <div v-if="errors.message" class="mt-3 text-danger">
              {{ errors.message }}
            </div>
          </div>
          <div class="form-group col-12">
            <button type="submit" class="btn btn-block btn-primary py-2">
              {{ $t("SendNow") }}
            </button>
          </div>
        </div>
        <!--//form-row-->
        <div v-if="successMessage" class="col-12 mt-3 alert alert-success">
          {{ successMessage }}
        </div>
        <div v-if="errorMessage" class="col-12 mt-3 text-danger">
          {{ errorMessage }}
        </div>
      </form>
    </div>
    <!--//container-->
  </section>
</template>

<script>
import SocialListNoBg from "@/components/SocialListNoBg.vue";
import * as Yup from "yup";

export default {
  components: {
    SocialListNoBg,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errors: { name: null, email: null, message: null },
      successMessage: "",
      errorMessage: "",
    };
  },
  methods: {
    async validateField(fieldName) {
      const schema = Yup.object().shape({
        name: Yup.string().required(this.$t("ReqName")),
        email: Yup.string()
          .email(this.$t("InvEmail"))
          .required(this.$t("ReqEmail")),
        message: Yup.string().required(this.$t("ReqMessage")),
      });

      try {
        await schema.validateAt(fieldName, {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.errors[fieldName] = null; // Clear previous error for this field
      } catch (err) {
        this.errors[fieldName] = err.message; // Set error message for this field
      }
    },
    async handleSubmit() {
      // Validate all fields
      await Promise.all([
        this.validateField("name", this.name),
        this.validateField("email", this.email),
        this.validateField("message", this.message),
      ]);

      // Check if there are any errors
      const hasErrors = Object.values(this.errors).some(
        (error) => error !== null
      );

      if (!hasErrors) {
        try {
          // Simulate successful submission
          this.successMessage = this.$t("SubSuccess");
          this.errorMessage = ""; // Clear previous error messages
          // Clear the input fields regardless of success or failure
          this.name = "";
          this.email = "";
          this.message = "";
        } catch (err) {
          this.errorMessage = this.$t("SubFail");
        }
      } else {
        this.errorMessage = this.$t("FixError");
      }

      // Clear messages after a short delay
      setTimeout(() => {
        this.successMessage = ""; // Clear success message after 3 seconds
        this.errorMessage = ""; // Clear error message after 3 seconds
      }, 3000);
    },
    onInputChange(fieldName) {
      // Clear the error message when the user starts typing
      this.validateField(fieldName, this[fieldName]); // Validate the specific field on input change
      this.errors.fieldName = null;
    },
  },
};
</script>

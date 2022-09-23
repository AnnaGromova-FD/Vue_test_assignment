<template>
  <section class="contact-us" id="contact-us">
    <h4>Contact Us</h4>
    <form
      @submit.prevent="handleSubmit"
      class="wrapper form-wrapper"
      name="contactForm"
    >
      <div class="inputs-wrapper">
        <base-input
          v-model.trim="firstName"
          label="First Name *"
          placeholder="Enter your First name"
        />

        <base-input
          v-model.trim="lastName"
          label="Last Name *"
          placeholder="Enter your Last name"
        />

        <base-input
          v-model.trim="company"
          label="Company *"
          placeholder="Enter your Company"
        />

        <base-input
          v-model.trim="email"
          label="Email *"
          placeholder="Enter your Email"
        />

        <base-input
          v-model.trim="jobTitle"
          label="Job Title *"
          placeholder="Enter your Job Title"
        />

        <base-input
          v-model.trim="country"
          label="Country"
          placeholder="Enter your country"
          required="false"
        />

        <base-input
          v-model.trim="state"
          label="State *"
          placeholder="Enter your State"
        />

        <base-input
          v-model.trim="zipCode"
          label="Zip Code *"
          placeholder="Enter your Zip Code"
        />
      </div>

      <div>
        <base-button type="submit" id="show-modal"> Submit </base-button>
      </div>
    </form>
    <Teleport to="body">
      <the-modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Form submitted!</h3>
        </template>
      </the-modal>
    </Teleport>
  </section>
</template>

<script>
import { reactive } from "vue";
import TheModal from "./TheModal.vue";

export default {
  components: {
    TheModal,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      jobTitle: "",
      country: "",
      state: "",
      zipCode: "",
      showModal: false,
    };
  },

  setup() {
    const form = reactive({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      jobTitle: "",
      country: "",
      state: "",
      zipCode: "",
    });

    return {
      form,
    };
  },
  methods: {
    handleSubmit() {
      if (document.forms["contactForm"].checkValidity()) {
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.contact-us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px;
}
.form-wrapper {
  flex-direction: column;
  align-items: center;
}
.inputs-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  margin-bottom: 26px;
}

h4 {
  margin-bottom: 44px;
}
</style>

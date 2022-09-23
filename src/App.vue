<template>
  <the-header />

  <main>
    <the-welcome title="Welcome to Test Page" subtitle="Front-end developer" />
    <the-about-us />
    <the-frameworks />
    <the-meeting-asking-section />
    <the-applications />
    <the-contact-us />
  </main>
  <footer>
    <the-footer />
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheWelcome from "./components/TheWelcome.vue";
import TheAboutUs from "./components/TheAboutUs.vue";
import TheFrameworks from "./components/TheFrameworks.vue";
import TheMeetingAskingSection from "./components/TheMeetingAskingSection.vue";
import TheApplications from "./components/TheApplications.vue";
import TheContactUs from "./components/TheContactUs.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheWelcome,
    TheAboutUs,
    TheFrameworks,
    TheMeetingAskingSection,
    TheApplications,
    TheContactUs,
    TheFooter,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap");
</style>

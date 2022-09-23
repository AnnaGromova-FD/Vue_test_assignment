<template>
  <section class="welcome">
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped>
.welcome {
  max-width: 1440px;
  height: 662px;
  background: url("../assets/images/welcome.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.welcome h1 {
  font-weight: 700;
  font-size: 70px;
  color: white;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}
.welcome h3 {
  font-size: 36px;
  color: white;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
}
</style>

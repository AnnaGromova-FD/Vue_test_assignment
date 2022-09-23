<template>
  <header id="home">
    <img
      alt="Success Craft logo"
      class="logo"
      src="../assets/images/logo.svg"
      width="197"
      height="38"
    />
    <div class="nav-links">
      <a href="/" mode="active" @click.prevent="scrollMeTo('home')">Home</a>
      <a href="about-us" @click.prevent="scrollMeTo('about-us')">About us</a>
      <a href="frameworks" @click.prevent="scrollMeTo('frameworks')"
        >Frameworks</a
      >
      <a href="applications" @click.prevent="scrollMeTo('applications')"
        >Applications</a
      >
      <a href="contact-us" @click.prevent="scrollMeTo('contact-us')"
        >Contact us</a
      >
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    scrollMeTo(id) {
      window.scrollTo({
        top: document.querySelector(`#${id}`).offsetTop - 50,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 21px 123px;
}
a {
  text-decoration: none;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-transform: uppercase;
  color: #3d3d3d;
  cursor: pointer;
}
a:hover,
:active {
  color: #71a3ff;
}
a.active {
  color: #71a3ff;
}
.nav-links {
  display: flex;
  width: 646px;
  justify-content: space-between;
}
</style>

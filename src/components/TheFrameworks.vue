<template>
  <section class="wrapper frameworks" id="frameworks">
    <h4>Frameworks</h4>
    <div
      class="wrapper framework"
      v-for="framework in frameworksList"
      :key="framework.id"
    >
      <div class="framework-image">
        <img
          :alt="framework.title"
          class="logo"
          :src="`${imageUrl}${framework.src}.jpg`"
        />
      </div>

      <div class="framework-description">
        <h5>{{ framework.title }}</h5>
        <p>
          {{ framework.descr }}
        </p>
        <base-button type="button">Read more</base-button>
        <base-button type="button" mode="inverted">Webinar</base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const imageUrl = new URL("../assets/images/", import.meta.url).href;
    return { imageUrl };
  },

  data() {
    return {
      frameworksList: [
        {
          id: "1",
          title: "Vue js",
          src: "vue",
          descr: `Vue.js is an open source JavaScript framework for creating user
        interfaces. It is easily integrated into projects using other JavaScript
        libraries. It can function as a web framework for developing single-page
        applications in a reactive style.`,
        },
        {
          id: "2",
          title: "React js",
          src: "react",
          descr: `React is an open source JavaScript library for developing user interfaces. Instagram Facebook, React is developed and supported by a community of individual developers and corporations. React can be used to develop single-page and mobile applications.`,
        },
        {
          id: "3",
          title: "Angular js",
          src: "angular",
          descr: `AngularJS is an open source JavaScript framework. Designed for the development of single-page applications. Its goal is to expand browser applications based on the MVC template, as well as simplify testing and development.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
.frameworks {
  display: flex;
  padding: 44px;
  background: #f5f7fa;
  flex-direction: column;
  align-items: center;
  gap: 45px;
}
.framework {
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  background-color: #fff;
}
.framework-image {
  width: 535px;
  height: 351px;
}
img {
  width: 100%;
}
.framework-description {
  flex: 4;
  padding: 27px 0 24px 73px;
}
h5 {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #3d3d3d;
  margin-bottom: 14px;
}
</style>

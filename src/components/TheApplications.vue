<template>
  <section class="applications" id="applications">
    <h4>Applications</h4>
    <div class="wrapper applications-wrapper">
      <div class="applications-item" v-for="app in appList" :key="app.id">
        <img :src="`${imageUrl}${app.src}.jpg`" :alt="app.title" />
        <div class="applications-item__title">
          <p>{{ app.title }}</p>
        </div>
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
      appList: [
        {
          id: 50,
          title: "App 1",
          src: "image13",
        },
        {
          id: 51,
          title: "App 2",
          src: "image14",
        },
        {
          id: 52,
          title: "App 3",
          src: "image15",
        },
        {
          id: 53,
          title: "App 4",
          src: "image16",
        },
        {
          id: 54,
          title: "App 5",
          src: "image17",
        },
        {
          id: 55,
          title: "App 6",
          src: "image18",
        },
        {
          id: 56,
          title: "App 7",
          src: "image19",
        },
        {
          id: 57,
          title: "App 8",
          src: "image20",
        },
      ],
    };
  },
};
</script>

<style scoped>
h4 {
  margin-bottom: 0;
}
.applications {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #f5f7fa;
  height: 553px;
}

.applications-wrapper {
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 96px;
  padding: 44px;
}
.applications-item {
  display: flex;
  flex-direction: column;
}
.applications-item__title {
  width: 227px;
  height: 40px;
  font-size: 16px;
  line-height: 20px;
  background: #3d3d3d;
}
p {
  color: white;
  text-align: center;
}
img {
  width: 227px;
  height: 124px;
}
</style>

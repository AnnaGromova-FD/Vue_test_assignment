<template>
  <section class="wrapper items">
    <div class="wrapper item" v-for="item in itemsList" :key="item.id">
      <img :alt="item.title" class="logo" :src="`${imageUrl}${item.src}.jpg`" />
      <div class="item-description">
        <h5>{{ item.title }}</h5>
        <p>
          {{ item.text }}
        </p>
        <base-button type="button">{{ item.buttonText }} </base-button>
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
      itemsList: [
        {
          id: "10",
          title: "Setup a Meeting",
          src: "image21",
          text: `Fill out our contact form and have someone get back to you within 24 hours.`,
          buttonText: "Schedule a Meeting",
        },
        {
          id: "11",
          title: "Ask a Question",
          src: "image22",
          text: `Have a question? Just fill out our contact us form and we will get back to you.`,
          buttonText: "Ask a Question",
        },
      ],
    };
  },
};
</script>

<style scoped>
.items {
  display: flex;
  padding: 44px;
  background: #f5f7fa;
  align-items: center;
}
.item {
  background-color: #fff;
}
.item-description {
  flex: 4;
  padding: 26px 20px;
}
h5 {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #3d3d3d;
  margin-bottom: 14px;
}
p {
  padding: 0;
}
</style>

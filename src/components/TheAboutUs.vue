<template>
  <section class="wrapper about-us" id="about-us">
    <div class="about-us__info">
      <h4>About us</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset.
      </p>
      <base-button type="button">Read more</base-button>
      <base-button type="button" mode="inverted">Contact us</base-button>
    </div>
    <div class="img">
      <img alt="Top 5 front end frameworks" src="../assets/images/top5.jpg" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-us {
  gap: 40px;
  height: 662px;
  background: url("../assets/images/white-abstract.svg") no-repeat center center;
  background-size: cover;
  padding: 102px 122px;
}
.about-us__info {
  flex: 2;
}
.img {
  flex: 2;
  width: 532px;
  width: 50%;
  height: 301px;
}
</style>

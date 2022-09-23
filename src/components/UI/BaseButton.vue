<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["mode", "type"],
};
</script>

<style scoped>
button {
  width: 200px;
  height: 40px;
  font-family: "Gothic A1, sans-serif";
  font-size: 16px;
  padding: 10px 30px;
  margin-right: 23px;
  background-color: #71a3ff;
  border: 1px solid #71a3ff;
  border-radius: 10px;
  color: white;
}
button.inverted {
  border: 1px solid #71a3ff;
  color: #3d3d3d;
  background-color: white;
}
button {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
button:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 10px;
  right: 25px;
  transition: 0.5s;
}
button:hover {
  padding-right: 24px;
  padding-left: 8px;
}

button:hover:after {
  opacity: 1;
  right: 33px;
}
</style>

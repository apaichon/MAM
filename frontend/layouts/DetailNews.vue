<template>
  <div id="detailnews">
    <slot name="close"></slot>
    <h3>{{ data.title }}</h3>
    <img :src="data.image" alt />
  </div>
</template>

<script>
export default {
  name: "more-news",
  props: ["data"]
};
</script>

<style lang="scss">
#detailnews {
  padding: 0 10px;
  width: 260px;
  position: relative;
  position: fixed;
  top: 64px;
  bottom: 0;
  right: 0;
  z-index: 1;
  background-color: aquamarine;
  .md-button {
    background-color: transparent !important;
    box-shadow: transparent !important;
  }
  .md-button:hover {
    background-color: transparent !important;
    box-shadow: transparent !important;
  }
}
</style>
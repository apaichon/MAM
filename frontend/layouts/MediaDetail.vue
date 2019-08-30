<template>
  <div id="detailnews">
    <div class="md-layout">
      <div class="md-layout-item md-size-70">
        <h5>{{ data.title }}</h5>
      </div>
      <div class="md-layout-item md-size-20">
        <slot name="close"></slot>
      </div>
    </div>
    <img :src="data.image" alt />
    <p>{{ data.description }}</p>
    <p>{{ data.date }}</p>
  </div>
</template>

<script>
export default {
  name: "more-media",
  props: ["data"],
  data () {
    return {
      // isActive: true
    };
  },
  // mounted () {
  //   this.$parent.$on('toggleNnav', () => {
  //     console.log('toggle')
  //     this.isActive = !this.isActive
  //   })
  // }
};
</script>

<style lang="scss" scoped>
#detailnews {
  display: none;
  padding: 0 10px;
  width: 400px;
  min-height: calc(100vh - 64px);
  background-color: white;
  &.active {
    display: block;
  }
  .md-button {
    background-color: transparent !important;
    box-shadow: none !important;
    color: #000000 !important;
    i {
      color: #000000 !important;
    }
  }

  .md-button i {
      color: #000000 !important;
  }
  .md-button:hover {
    background-color: transparent !important;
    box-shadow: none !important;
  }
}
</style>
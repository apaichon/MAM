<template>
  <div class="container">
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push({ path: '/newslists' })
    }, 0);
  }
}
</script>

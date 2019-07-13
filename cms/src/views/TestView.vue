<template>
    <div>
      Test View
    </div>
</template>
<script>
export default {
  name: 'testview',
  methods: {
    onCreateClicked (e) {
      this.$emit('onCreateClicked')
    }
  }
}
</script>

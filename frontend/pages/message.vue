<template>
  <div>
     <div class="md-layout md-alignment-top-center">
      <div class="md-layout-item md-size-80 message-box">
        <Message/>
      </div>
    </div>
  </div>
</template>

<script>
import Message from '~/components/Message.vue'

export default {
  components: {
    Message
  }
}
</script>

<style>
.message-box {
  margin-top: 1rem;
}
</style>

<template>
  <div class="content">
    <ChangePasswordCard v-bind:email="email" />
  </div>
</template>

<script>
import axios from "axios";
import https from "https";
import ChangePasswordCard from "~/components/ChangePasswordCard.vue";

export default {
  async asyncData() {
    return {
      email: "johndoe@gmail.com"
    };
  },
  components: {
    ChangePasswordCard
  }
};
</script>

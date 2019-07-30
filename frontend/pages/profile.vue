<template>
  <div class="container">
    <ProfileCard v-bind:email="email" />
  </div>
</template>

<script>
import axios from "axios";
import https from "https";
import ProfileCard from "~/components/ProfileCard.vue";

export default {
  async asyncData() {
    return {
      email: "johndoe@gmail.com"
    };
  },
  components: {
    ProfileCard
  }
};
</script>

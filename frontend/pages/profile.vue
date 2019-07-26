<template>
  <div class="container">
    <Profile v-bind:profile="profile[0]" />
  </div>
</template>

<script>
import axios from "axios";
import https from "https";
import Profile from "~/components/Profile.vue";

export default {
  async asyncData({ params }) {
    let response = await axios({
      method: "post",
      url: process.env.baseUrl,
      headers: {
        "Content-Type": "application/json",
        application: "Thai Stringers",
        objectfile: "../../biz/AccountProfileBiz",
        objectname: "AccountProfileBiz",
        objectmethod: "Find"
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    });

    return { profile: response.data.data };
  },
  components: {
    Profile
  },
  methods: {
    find() {}
  }
  // async asyncData({ params }) {
  //   let { data } = await axios({
  //     method: "get",
  //     url: "https://reqres.in/api/users/1"
  //   });

  //   return {
  //     firstname: data.first_name
  //   };
  // }
};
</script>

<style scoped>
</style>

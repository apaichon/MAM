<template>
  <div class="profile-container">
    <md-card style="width: 500px;">
      <md-card-header>
        <div class="md-title">Change Password</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Email</label>
          <md-input id="email" v-model="account.email" disabled></md-input>
          <span class="md-helper-text"></span>
        </md-field>
        <md-field>
          <label>Current Password</label>
          <md-input id="current-password"></md-input>
          <span class="md-helper-text"></span>
        </md-field>
        <md-field>
          <label>New Password</label>
          <md-input id="new-password"></md-input>
          <span class="md-helper-text"></span>
        </md-field>
        <md-field>
          <label>Confirm Password</label>
          <md-input id="confirm-password"></md-input>
          <span class="md-helper-text"></span>
        </md-field>
        <div class="md-layout-item md-size-100"></div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary" @click="changePassword">Confirm</md-button>
      </md-card-actions>

      <div class="change-password-card-loader">
        <div>
          <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </div>
      </div>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";
import https from "https";

export default {
  props: ["email"],
  data() {
    return { account: {} };
  },
  created() {
    this.getAccount();
  },
  mounted() {
    this.cardLoaded();
  },
  methods: {
    getAccount() {
      axios({
        method: "post",
        url: process.env.baseUrl,
        headers: {
          "Content-Type": "application/json",
          application: "Thai Stringers",
          objectfile: "../../biz/AccountBiz",
          objectname: "AccountBiz",
          objectmethod: "FindOne"
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        }),
        data: {
          condition: {
            filter: ["email", "==", this.email]
          }
        }
      }).then(({ data }) => {
        this.account = data.data.shift();
        this.cardLoaded();
      });
    },
    changePassword() {
      alert("not implemented!");
    },
    cardLoading() {
      const loader = document.querySelector(".change-password-card-loader");
      loader.style.opacity = 1;
      loader.style.visibility = "visible";
    },
    cardLoaded() {
      const loader = document.querySelector(".change-password-card-loader");
      loader.style.opacity = 0;
      loader.style.visibility = "hidden";
    }
  }
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
}

.change-password-card-loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  z-index: 6;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.4s, visibility 0.4s;
}
</style>

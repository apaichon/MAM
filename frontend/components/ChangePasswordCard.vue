<template>
  <div class="change-password-container">
    <md-card style="width: 500px;">
      <md-card-header data-background-color="purple">
        <div class="md-title">Change Password</div>
      </md-card-header>

      <form @submit="changePassword">
        <md-card-content style="padding-top: 20px;">
          <md-field>
            <label>Email</label>
            <md-input v-model="account.email" disabled></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>Current Password</label>
            <md-input v-model="currentPassword" ref="currentPassword" type="password"></md-input>
            <span class="md-helper-text"></span>
            <span class="md-error"></span>
          </md-field>
          <md-field>
            <label>New Password</label>
            <md-input v-model="newPassword" type="password"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>Confirm Password</label>
            <md-input v-model="confirmPassword" type="password"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <div class="md-layout-item md-size-100"></div>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-primary" type="submit" value="submit">Confirm</md-button>
        </md-card-actions>
      </form>

      <div ref="loader" class="change-password-card-loader">
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
    return {
      account: {},
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  created() {
    this.getAccount();
  },
  mounted() {},
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
          filter: ["email", "==", this.email]
        }
      }).then(({ data }) => {
        this.account = data.data.shift();
        this.cardLoaded();
        this.$refs.currentPassword.$el.focus();
      });
    },
    changePassword(e) {
      e.preventDefault();

      if (!this.currentPassword) {
        alert("Please enter your current password.");
        return;
      }
      if (!this.newPassword) {
        alert("Please enter your new password.");
        return;
      }
      if (!this.confirmPassword) {
        alert("Please confirm your new password.");
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        alert("New password doesn't match.");
        return;
      }

      this.cardLoading();
      axios({
        method: "post",
        url: process.env.baseUrl,
        headers: {
          "Content-Type": "application/json",
          application: "Thai Stringers",
          objectfile: "../../biz/AccountBiz",
          objectname: "AccountBiz",
          objectmethod: "ChangePassword"
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        }),
        data: {
          condition: ["email", "==", this.email],
          data: {
            oldPassword: this.currentPassword,
            newPassword: this.newPassword
          }
        }
      }).then(({ data }) => {
        if (
          data.code !== 200 &&
          data.message === "Current password is not match!"
        ) {
          alert(data.message);
          this.$refs.currentPassword.$el.focus();
        } else {
          alert("เปลี่ยนรหัสผ่านสำเร็จ");
          this.currentPassword = "";
          this.newPassword = "";
          this.confirmPassword = "";
        }
        this.cardLoaded();
      });
    },
    cardLoading() {
      const loader = this.$refs.loader;
      loader.style.opacity = 1;
      loader.style.visibility = "visible";
    },
    cardLoaded() {
      const loader = this.$refs.loader;
      loader.style.opacity = 0;
      loader.style.visibility = "hidden";
    }
  }
};
</script>

<style scoped>
.change-password-container {
  display: flex;
  justify-content: center;
  width: 100%;
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

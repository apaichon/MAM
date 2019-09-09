<template>
  <div class="change-password-container">
    <md-card style="max-width: 600px;">
      <md-card-header data-background-color="purple">
        <h4 class="title">Change Password</h4>
        <p class="category">It's time to change</p>
      </md-card-header>

      <form @submit="changePassword">
        <md-card-content style="padding-top: 20px;">
          <md-field>
            <label>Email (Readonly)</label>
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
  props: {
    email: {
      type: String
    }
  },
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
        method: "get",
        url: process.env.baseUrl + "/account/" + this.email
      }).then(({ data }) => {
        this.account = data;
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
        method: "put",
        url:
          process.env.baseUrl +
          "/account/" +
          this.email +
          "?module=changePassword",
        data: {
          oldPassword: this.currentPassword,
          newPassword: this.newPassword
        }
      }).then(({ status, data }) => {
        alert("เปลี่ยนรหัสผ่านสำเร็จ");
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
        this.cardLoaded();
      }).catch(({ response }) => {
        alert(response.data.message || 'Something wrong happened.')
        this.cardLoaded();
        this.$refs.currentPassword.$el.focus();
      });
    },
    cardLoading() {
      this.$refs.loader.style.visibility = "visible";
      this.$refs.loader.style.opacity = 1;
    },
    cardLoaded() {
      this.$refs.loader.style.visibility = "hidden";
      this.$refs.loader.style.opacity = 0;
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

.md-card .md-card-actions {
  border: 0px;
}
</style>

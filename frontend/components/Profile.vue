<template>
  <div class="md-layout md-alignment-center-center profile-container">
    <div class="md-layout-item md-size-100" style="display: flex; justify-content: center;">
      <div class="profile-image-box" @mouseenter="showChangeImage" @mouseleave="hideChangeImage">
        <div class="profile-image">
          <span class="change-profile-image">Change</span>
        </div>
      </div>
    </div>
    <div class="md-layout-item md-size-33 font-2x balance-panel">
      <i class="fas fa-coins"></i> 9999
    </div>
    <div class="md-layout-item md-size-33 font-2x balance-panel">
      <i class="fas fa-dollar-sign"></i> 9999
    </div>
    <md-field>
      <label>Email</label>
      <md-input id="email" v-model="profile.email" disabled></md-input>
      <span class="md-helper-text"></span>
    </md-field>
    <md-field>
      <label>First Name</label>
      <md-input id="firstName" v-model="profile.firstName"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
    <md-field>
      <label>Last Name</label>
      <md-input id="lastName" v-model="profile.lastName"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
    <md-field>
      <label>Mobile No.</label>
      <md-input id="mobileNo" v-model="profile.mobileNo"></md-input>
      <span class="md-helper-text"></span>
    </md-field>
    <div class="md-layout-item md-size-100">
      <md-button class="md-raised md-primary" @click="updateProfile">Update</md-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import https from "https";

export default {
  props: ["profile"],
  methods: {
    showChangeImage() {
      const el = document.querySelector(".change-profile-image");
      el.style.opacity = 1;
    },
    hideChangeImage() {
      const el = document.querySelector(".change-profile-image");
      el.style.opacity = 0;
    },
    updateProfile() {
      const reqBody = {
        condition: ["id", "==", this.profile.id],
        data: {
          firstName: document.querySelector("#firstName").value,
          lastName: document.querySelector("#lastName").value,
          mobileNo: document.querySelector("#mobileNo").value
        }
      };

      axios({
        method: "post",
        url: process.env.baseUrl,
        headers: {
          "Content-Type": "application/json",
          application: "Thai Stringers",
          objectfile: "../../biz/AccountProfileBiz",
          objectname: "AccountProfileBiz",
          objectmethod: "Edit"
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        }),
        data: reqBody
      }).then(({ data }) => {
        if (data.code === 200)
          alert('อัพเดทสำเร็จ');
        else
          alert('อัพเดทไม่สำเร็จ');
      });
    }
  }
};
</script>


<style scoped>
.profile-container {
  text-align: center;
  padding: 10px 20px;
  max-width: 500px;
}

.profile-image-box {
  position: relative;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
  height: 200px;
  width: 200px;
  cursor: pointer;
}

.profile-image {
  height: 200px;
  width: 200px;
  background-image: url(https://image.flaticon.com/icons/svg/236/236832.svg);
}

.change-profile-image {
  background: rgba(0, 0, 0, 0.54);
  bottom: 0;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  left: 0;
  line-height: 12px;
  position: absolute;
  padding: 10px 0;
  text-align: center;
  width: 200px;
  opacity: 0;
  transition: opacity 0.2s;
  -webkit-transition: opacity 0.2s;
}

.font-2x {
  font-size: 200%;
}

.balance-panel {
  margin: 20px 0;
}
</style>

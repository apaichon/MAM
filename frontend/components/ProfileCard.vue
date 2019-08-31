<template>
  <div class="profile-container">
    <md-card style="width: 500px;">
      <md-card-header data-background-color="blue">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header>

      <form @submit="updateProfile">
        <md-card-content style="padding-top: 20px;">
          <div style="display: flex; justify-content: center; margin: 10px 0;">
            <div
              class="profile-image-box"
              @mouseenter="showChangeImage"
              @mouseleave="hideChangeImage"
              @click="changeProfileImage"
            >
              <div ref="profileImage">
                <span ref="changeProfileImage" class="change-profile-image">Change</span>
              </div>
            </div>
          </div>
          <div style="display: flex; text-align: center">
            <div class="font-2x balance-panel" style="width: 50%">
              <i class="fas fa-coins"></i> 0.00
            </div>
            <div class="font-2x balance-panel" style="width: 50%">
              <i class="fas fa-dollar-sign"></i> 0.00
            </div>
          </div>

          <md-field>
            <label>Email (Readonly)</label>
            <md-input v-model="profile.email" disabled></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>First Name</label>
            <md-input v-model="profile.firstName"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>Last Name</label>
            <md-input v-model="profile.lastName"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
          <md-field>
            <label>Mobile No.</label>
            <md-input v-model="profile.mobileNo"></md-input>
            <span class="md-helper-text"></span>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-info" type="submit" value="submit">Update</md-button>
        </md-card-actions>
      </form>

      <div ref="loader" class="card-loader">
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
    },
    avatar: {
      type: String,
      default: require("~/assets/img/avatar.png")
    }
  },
  data() {
    return { profile: {} };
  },
  created() {
    this.getProfile();
  },
  mounted() {},
  methods: {
    showChangeImage() {
      const el = this.$refs.changeProfileImage;
      el.style.opacity = 1;
    },
    hideChangeImage() {
      const el = this.$refs.changeProfileImage;
      el.style.opacity = 0;
    },
    getProfile() {
      axios({
        method: "get",
        url: process.env.baseUrl + "/profile/" + this.email
      }).then(({ data }) => {
        this.profile = data;
        this.$refs.profileImage.style.backgroundImage = `url(${this.profile.photo || this.avatar})`;
        this.$refs.profileImage.style.backgroundSize = `cover`;
        this.$refs.profileImage.style.height = '200px';
        this.cardLoaded();
      });
    },
    updateProfile(e) {
      e.preventDefault();
      this.cardLoading();

      axios({
        method: "put",
        url: process.env.baseUrl + "/profile/" + this.email,
        data: {
          firstName: this.profile.firstName,
          lastName: this.profile.lastName,
          mobileNo: this.profile.mobileNo
        }
      }).then(({ status }) => {
        if (status === 200) alert("อัพเดทสำเร็จ");
        else alert("อัพเดทไม่สำเร็จ");
        this.cardLoaded();
      });
    },
    changeProfileImage() {
      alert("Not implemented!");
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
.profile-container {
  display: flex;
  justify-content: center;
  width: 100%;
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

#profile-image {
  height: 200px;
  width: 200px;
  background-size: cover;
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

.card-loader {
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

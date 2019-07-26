<template>
  <div class="md-layout md-alignment-center-center profile-container">
    <div class="md-layout-item md-size-100">
      <img
        src="https://image.flaticon.com/icons/svg/236/236832.svg"
        alt="user-image"
        width="200"
        height="200"
      />
    </div>
    <div class="md-layout-item md-size-33 font-2x"><i class="fas fa-coins"></i> 9999</div>
    <div class="md-layout-item md-size-33 font-2x"><i class="fas fa-dollar-sign"></i> 9999</div>
    <md-field>
      <label>Email</label>
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
    <div class="md-layout-item md-size-100">
      <md-button class="md-raised md-primary">Update</md-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["profile"],
  mounted() {}
};
</script>


<style scoped>
.profile-container {
  text-align: center;
  padding: 5px 15px;
}

.font-2x {
  font-size: 200%;
}
</style>

<template>
  <div class="container" id="login">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
        <h2>Thai Stringer</h2>
        <p>The real story from talented people</p>
        <md-card id="a">
          <md-card-content>
            <p>ข่าวด่วน Thai Stringer ปรับนโยบายนักข่าวสามารถกำหนดตัวผู้ซื้อได้แล้ว</p>
            <a href="/">อ่านต่อ</a>
          </md-card-content>
        </md-card>
        <a href="/">อ่านข่าวทั้งหมด</a>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
        <md-card class="md-card-stats">
          <md-card-header data-background-color="green">
            <i class="fas fa-user-lock"></i>
          </md-card-header>
          <md-card-content>
            <md-field>
              <!-- <md-icon>email</md-icon> -->
              <label>Email address</label>
              <md-input v-model="email" type="email" class="md-success"></md-input>
            </md-field>
            <md-field :md-toggle-password="false">
              <!-- <md-icon>lock</md-icon> -->
              <label>Password</label>
              <md-input v-model="password" type="password" class="md-success"></md-input>
            </md-field>
            <md-checkbox v-model="remember_me">Remember me</md-checkbox>
            <div class="btn-footer">
              <md-button class="md-raised md-success">Login</md-button>
              <div>
                <a>Forgot password</a> |
                <a>Need help</a>
              </div>
            </div>
          </md-card-content>
        </md-card>
        <a href="/">Register</a> or
        <a href="/">Register as company</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#login {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.md-layout {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .md-card-stats {
    .md-card-content {
      text-align: left;
      margin-top: 2rem;
    }
  }
}
.btn-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
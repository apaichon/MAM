<template>
  <div>
    <md-menu>
      <md-button md-menu-trigger>Home</md-button>

      <md-menu-content>
        <md-menu-item  href="/NewsCategory">News Category</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger href="/News">News</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" :md-offset-x="127" :md-offset-y="-36">
      <md-button md-menu-trigger>Incentive</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>Profile</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>

    <md-menu md-size="medium" md-align-trigger>
      <md-button md-menu-trigger>Admin</md-button>

      <md-menu-content>
        <md-menu-item>My Item 1</md-menu-item>
        <md-menu-item>My Item 2</md-menu-item>
        <md-menu-item>My Item 3</md-menu-item>
      </md-menu-content>
    </md-menu>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>


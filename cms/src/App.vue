<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Thai Stringers - CMS</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
         <SideNavbar ></SideNavbar>
      </md-app-drawer>
      <md-app-content>
       <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>

import SideNavbar from '@/components/SideNavbar'

export default {
  name: 'app',
  components: {SideNavbar},
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine"; // Import the theme engine

@include md-register-theme("black-green-dark", (
  primary: md-get-palette-color(green, A200), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme
.md-app {
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

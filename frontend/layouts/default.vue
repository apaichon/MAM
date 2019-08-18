<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!-- <notifications></notifications> -->

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/newslists">
        <i class="fas fa-newspaper"></i>
        <p>All News</p>
      </sidebar-link>
      <sidebar-link to="/dashboard">
        <i class="fas fa-image"></i>
        <p>All Media</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <nuxt />
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

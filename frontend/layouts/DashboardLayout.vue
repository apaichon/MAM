<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <!-- <notifications></notifications> -->

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/table-list">
        <md-icon>content_paste</md-icon>
        <p>Table list</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>

    <div>
      history
    </div>
  </div>
</template>

<script>
// import TopNavbar from "./TopNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./default.vue";
// import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    // TopNavbar,
    DashboardContent,
    // ContentFooter,
    // MobileMenu
  }
};
</script>

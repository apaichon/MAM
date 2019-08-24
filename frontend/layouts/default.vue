<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/newslists">
        <i class="fas fa-newspaper"></i>
        <p>News</p>
      </sidebar-link>
      <sidebar-link to="/media">
        <i class="fas fa-image"></i>
        <p>Media</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>

    <!-- <more-news></more-news> -->
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (min-width: 992px) {
  .md-toolbar .md-button:first-child {
    display: none;
  }
}
</style>

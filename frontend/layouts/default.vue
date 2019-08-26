<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/newslists">
        <i class="fas fa-newspaper"></i>
        <p>News</p>
      </sidebar-link>
      <sidebar-link to="/medialists">
        <i class="fas fa-image"></i>
        <p>Media</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <transition name="fade" mode="out-in">
        <nuxt />
      </transition>
    </div>

    <more-news></more-news>
  </div>
</template>

<script>
import MobileMenu from '~/layouts/MobileNavbar.vue'
import MoreNews from '~/layouts/DetailNews.vue'

export default {
  components: {
    MobileMenu,
    MoreNews
  }
}
</script>

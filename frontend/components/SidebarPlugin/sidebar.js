import Vue from 'vue';
// import Sidebar from "./SideBar.vue";
// import SidebarLink from "./SidebarLink.vue";

const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value;
  }
};

Vue.mixin({
  data() {
    return {
      sidebarStore: SidebarStore
    };
  }
});

if (!Vue.prototype.hasOwnProperty("$sidebar")) {
  Object.defineProperty(Vue.prototype, "$sidebar", {
    get() { return this.$root.sidebarStore; }
  })
}

// Object.defineProperty(Vue.prototype, "$sidebar", {
//   get() {
//     return this.$root.sidebarStore;
//   }
// });
// Vue.component("side-bar", Sidebar);
// Vue.component("sidebar-link", SidebarLink);

// export default SidebarPlugin;
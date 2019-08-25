import Vue from 'vue';

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
<template>
  <md-toolbar md-elevation="0" class="md-transparent" id="top-navbar">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
        <!-- <div class="md-layout" id="select-on-topbar">
          <div class="md-layout-item md-size-50">
            <md-field>
              <label for="movie">Thumbnail view</label>
              <md-select name="movie" id="movie">
                <md-option value="fight-club">View</md-option>
                <md-option value="godfather">View</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50">
            <md-field>
              <label for="movie">Order by Date</label>
              <md-select name="movie" id="movie">
                <md-option value="fight-club">Order by Date</md-option>
                <md-option value="godfather">Order by Month</md-option>
                <md-option value="godfather">Order by Year</md-option>
              </md-select>
            </md-field>
          </div>
        </div> -->
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: $sidebar.showSidebar }"
          @click="toggleSidebar"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <md-list-item href="/addnews" id="btn-add-news">
              <i class="material-icons">add</i>
              <p>add news</p>
            </md-list-item>
            <md-list-item href="/history">
              <i class="material-icons">watch_later</i>
              <p class="hidden-lg hidden-md">History</p>
            </md-list-item>
            <md-list-item href="/notifications">
              <i class="material-icons">notifications</i>
              <p class="hidden-lg hidden-md">Notification</p>
            </md-list-item>
            <md-list-item href="/setting">
              <i class="material-icons">settings</i>
              <p class="hidden-lg hidden-md">Setting</p>
            </md-list-item>
            <md-list-item to="/profile">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone"
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
};
</script>

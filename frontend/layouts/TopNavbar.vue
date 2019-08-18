<template>
  <md-toolbar md-elevation="0" class="md-transparent">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">{{ $route.name }}</h3>
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
            <md-list-item href="/History">
              <i class="material-icons">watch_later</i>
              <p class="hidden-lg hidden-md">History</p>
            </md-list-item>
            <md-list-item href="/notifications">
              <i class="material-icons">notifications</i>
              <p class="hidden-lg hidden-md">Notification</p>
            </md-list-item>
            <!-- <md-badge md-content="1">
              <md-button class="md-icon-button">
                <md-icon>notifications</md-icon>
              </md-button>
            </md-badge>-->
            <md-list-item href="/setting">
              <i class="material-icons">settings</i>
              <p class="hidden-lg hidden-md">Setting</p>
            </md-list-item>
            <md-list-item href="/user">
              <i class="material-icons">person</i>
              <p class="hidden-lg hidden-md">Profile</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
    <div class="md-toolbar-row">
      <md-field>
        <md-icon>search</md-icon>
        <label>Search news</label>
        <md-input></md-input>
      </md-field>
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

<template>
  <div>
    <md-card>
      <md-card-content>
        <md-app md-mode="reveal" class="message-app">
          <md-app-toolbar class="md-primary">
            <span class="md-title">กล่องข้อความ</span>
          </md-app-toolbar>
          <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-transparent" md-elevation="0">ข้อความ
            </md-toolbar>
          <md-app-content>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.</p>
          </md-app-content>
          </md-app-drawer>
          <md-app-content>
            <md-table>
              <md-table-row>
                <md-table-head>ชื่อผู้ส่ง</md-table-head>
                <md-table-head>ข้อความ</md-table-head>
              </md-table-row>
              <md-table-row @click="openMessage()" v-for="(user, index) in message" :key="index">
                <md-table-cell class="message-text-size message-text-size-sender">{{ user.name }}</md-table-cell>
                <md-table-cell class="message-text-size text-left">{{ user.message }}</md-table-cell>
              </md-table-row>
              </md-table>
          </md-app-content>
        </md-app>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      menuVisible: false,
    }
  },
  methods: {
    openMessage() {
      this.menuVisible = true
    }
  },
  computed: {
    ...mapState(['message'])
  },
  mounted() {
  },
};
</script>

<style>
  .close-button {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .md-app {
    max-height: 600px;
    min-height: 100%;
    border: 1px solid rgba(#000, .12);
  }
 .md-drawer {
    width: 90%;
    overflow: hidden;
    max-width: calc(100vw - 125px);
  }
  .message-text-size {
    width: 100%;
  }
  .md-content {
    border: 0px;
  }
  .text-left {
    text-align: left;
    cursor: pointer;
  }
  .message-text-size-sender {
    width: 30%;
    cursor: pointer;
  }
  .message-app {
    min-height:600px;
  }
</style>

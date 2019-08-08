<template>
  <div>
    <md-card>
      <md-card-content>
        <md-app md-mode="reveal" class="message-app">
          <md-app-toolbar class="md-primary">
            <span class="md-title">กล่องข้อความ</span>
          </md-app-toolbar>
          <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-primary" md-elevation="0">
              <div class="md-toolbar-section-start">
                  ข้อความ
              </div>
            <div class="md-toolbar-section-end">
              <md-button  class="md-icon-button">
                    <md-icon>delete</md-icon>
              </md-button>
              <md-button @click="menuVisible = false"  class="md-icon-button">
                <md-icon>close</md-icon>
              </md-button>
            </div>
            </md-toolbar>
          <md-app-content>
            <p>{{ fullMessage }}</p>
          </md-app-content>
          </md-app-drawer>
          <md-app-content>
              <md-table v-if="message" v-model="message" >
                <md-table-row @click="openMessage(item.message)" slot="md-table-row" slot-scope="{item}" >
                  <md-table-cell md-label="ชื่อผู้ส่ง"><md-badge class="md-square" md-content="New" />{{ item.name.substr(0,20) }}</md-table-cell>
                  <md-table-cell md-label="เรื่อง">{{ item.message.substr(0,20) }}</md-table-cell>
                  <md-table-cell md-label="ข้อความ">{{ item.message.substr(0,50) }}</md-table-cell>
                  <md-table-cell md-label="เวลา">20/06/2019 23:56</md-table-cell>
                </md-table-row>
              </md-table>
              <div v-if="!message" class="loading">
                <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
              </div>
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
      fullMessage: '',
    }
  },
  methods: {
    openMessage(message) {
      this.menuVisible = true
      this.fullMessage = message
    }
  },
  computed: {
    ...mapState(['message'])
  },
  mounted() {
    this.$store.dispatch('loadMessage')
  },
};
</script>

<style>
  .close-icon {
    position:absolute;
    right:20px;
    cursor: pointer;
  }
  .delete-icon {
    position:absolute;
    right:80px;
    cursor: pointer;

  }
  .loading {
    text-align:center;
    position:relative;
    top: 200px
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
  .message-text-size-subject {
    width: 30%;
    cursor: pointer;
  }
  .message-app {
    min-height:600px;
  }
</style>

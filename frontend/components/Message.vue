<template>
  <div>
    <md-card>
      <md-card-content>
        <md-app md-mode="reveal" class="message-app">
          <md-app-toolbar class="md-primary" data-background-color="blue">
            <span class="md-title">กล่องข้อความ</span>
          </md-app-toolbar>
          <md-app-drawer :md-active.sync="menuVisible">
            <md-toolbar class="md-primary" data-background-color="blue" md-elevation="0">
              <div class="md-toolbar-section-start">
                  ข้อความ
              </div>
            <div class="md-toolbar-section-end">
              <div>
              </div>
              <md-button @click="deleteMessage" data-background-color="red"   class="md-icon-button" style="margin-right:10px;">
                <md-icon>delete</md-icon>
              </md-button>
              <md-button @click="menuVisible = false"  data-background-color="orange" class="md-icon-button">
                <md-icon>close</md-icon>
              </md-button>
            </div>
            </md-toolbar>
          <md-app-content>
            <p>{{ fullMessage }}</p>
          </md-app-content>
          </md-app-drawer>
          <md-app-content>
            <md-table v-if="allMessage" v-model="allMessage" >
              <md-table-toolbar class="search-toolbar" v-if="allMessage && allMessage.length !==0">
                <div class="md-toolbar-section-start">
                </div>
                <md-field md-clearable class="md-toolbar-section-end md-layout-item md-size-30">
                  <md-input placeholder="ค้นหาจากผู้ส่ง" v-model="search" @input="searchOnTable" />
                </md-field>
              </md-table-toolbar>
                <md-table-row @click="openMessage(item.message, item.id, item.isRead)" slot="md-table-row" slot-scope="{item}" >
                  <md-table-cell md-label="ผู้ส่ง"><md-badge v-if="!item.isRead" class="md-square" md-content="New" />{{ item.sender }}</md-table-cell>
                  <md-table-cell md-label="เรื่อง">{{ subText(item.subject) }}</md-table-cell>
                  <md-table-cell md-label="ข้อความ">{{ subText(item.message) }}</md-table-cell>
                  <md-table-cell md-label="เวลา">{{ item.createdAt | date('DD/MM/YYYY HH:mm') }}</md-table-cell>
                </md-table-row>
            </md-table>
             <md-empty-state v-if="inboxIsEmpty"
              md-icon="mail_outline"
              md-label="ไม่มีข้อความในระบบ"
              md-description="คุณจะสามารถเห็นข้อความในกล่องนี้ได้ เมื่อมีข้อความใหม่เข้ามา">
            </md-empty-state>
            <div v-if="!allMessage " class="loading">
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
      messageId: '',
      userId: 'gJOCBRsRDOPWgj4ojEJGTdtyYZJ3',
      search: null,
    }
  },
  methods: {
    openMessage(message, messageId, status) {
      this.menuVisible = true
      this.fullMessage = message
      this.messageId = messageId
      if (!status) {
        this.$store.dispatch('message/updateStatusMessage', {
          userId: this.userId,
          messageId
        })
      }
    },
    subText(text) {
      return text.length > 60 ? text.substr(0,60) + '..' : text
    },
    deleteMessage() {
      this.$store.dispatch('message/deleteMessage', {
        userId: this.userId,
        messageId: this.messageId
      }).then(() => {
        this.menuVisible = false
      })
    },
    searchOnTable () {
      this.$store.dispatch('message/searchByName', this.search)
    }
  },
  computed: {
    ...mapState(['message', 'searched']),
    allMessage() {
      return this.search ? this.message.searched : this.message.message
    },
    inboxIsEmpty() {
      let isEmpty
      if (this.message.message) {
        isEmpty = this.message.message.length === 0 ? true : false
      }
      return isEmpty
    }
  },
  mounted() {
    this.$store.dispatch('message/loadMessage', this.userId)
  },
};
</script>

<style>
  .search-toolbar {
    padding: 0px;
  }
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

<template>
  <div class="content" id="news-lists">
    <div class="main-list">
      <div class="md-toolbar-row">
        <md-field id="search">
          <md-icon>search</md-icon>
          <label>Search news</label>
          <md-input></md-input>
        </md-field>
      </div>
      <div class="news-grid">
        <p>Today</p>
        <div class="md-layout">
          <div
            v-for="(n, i) in news"
            :key="i"
            @click="showDetail(n)"
            class="md-layout-item md-xlarge-20 md-large-20 md-medium-size-33 md-small-size-50 md-xsmall-size-100 md-size-25"
          >
            <news-item>
              <template slot="image">
                <img :src="n.image" alt="People" />
              </template>
              <template slot="title">
                <h4>{{ n.title }}</h4>
              </template>
            </news-item>
          </div>
        </div>
      </div>
    </div>
    <more-news :class="{ active: isActive }" :data="detail">
      <md-button class="md-icon-button" slot="close" @click="hideDetail">
        <i class="material-icons">clear</i>
      </md-button>
    </more-news>
  </div>
</template>

<script>
import NewsItem from "~/components/NewsItem.vue";
import MoreNews from "~/layouts/DetailNews.vue";

import padthai from "~/assets/img/news/padthai.jpg";
import scare from "~/assets/img/news/scare.jpg";
import champion from "~/assets/img/news/champion.jpg";
import grouper from "~/assets/img/news/grouper.jpg";

export default {
  components: {
    NewsItem,
    MoreNews
  },
  data() {
    return {
      // newsSide: false,
      isActive: false,
      detail: "",
      news: [
        {
          title: "ผัดไทยไม่หวานแล้ว",
          image: padthai,
          description: "",
          item: []
        },
        {
          title: "ก่อนคำหวานจะคืนกลับมาหลอน",
          image: scare,
          description: "",
          item: []
        },
        {
          title: "แชมป์ปีแรกในรอบล้านปี",
          image: scare,
          description: "",
          item: []
        },
        {
          title: "ตกปลาเก๋าดับเพราะไม่เก๋าจริง",
          image: grouper,
          description: "",
          item: []
        }
      ]
    };
  },
  methods: {
    showDetail(data) {
      this.detail = data;
      // console.log(this.$parent)
      // this.$parent.$emit("toggleNav");
      this.isActive = !this.isActive
    },
    hideDetail() {
      this.newsSide = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#news-lists {
  display: flex;
  .main-list {
    // display: flex;
    // align-items: stretch;
    // flex-direction: column;
    width: 100vw;
  }
}
.content {
  padding-top: 0;
  padding-bottom: 0;
  .md-layout-item {
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
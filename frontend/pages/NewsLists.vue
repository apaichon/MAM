<template>
  <div class="content" id="news-lists">
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
          @click="showDetail"
          class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
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
</template>

<script>
import NewsItem from "~/components/NewsItem.vue";
import padthai from "~/assets/img/news/padthai.jpg";
import scare from "~/assets/img/news/scare.jpg";
import champion from "~/assets/img/news/champion.jpg";
import grouper from "~/assets/img/news/grouper.jpg";

export default {
  components: {
    NewsItem
  },
  data() {
    return {
      horizontal: null,
      vertical: null,
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
    showDetail() {
      console.log("hi");
    }
  }
};
</script>

<style lang="scss" scoped>
  .content {
    padding-top: 0;
  }
</style>
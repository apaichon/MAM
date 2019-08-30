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
            class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-20"
          >
            <news-item>
              <template slot="image">
                <img :src="n.image" alt="People" />
              </template>
              <template slot="title">
                <h4>{{ n.id }}</h4>
                <p>{{ n.date }}</p>
              </template>
            </news-item>
          </div>
        </div>
      </div>
    </div>
    <more-media :class="{ active: isActive }" :data="detail">
      <md-button class="md-icon-button" slot="close" @click="hideDetail">
        <i class="material-icons">clear</i>
      </md-button>
    </more-media>
  </div>
</template>

<script>
import NewsItem from "~/components/NewsItem.vue";
import MoreMedia from "~/layouts/MediaDetail.vue";

import padthai from "~/assets/img/news/padthai.jpg";
import scare from "~/assets/img/news/scare.jpg";
import champion from "~/assets/img/news/champion.jpg";
import grouper from "~/assets/img/news/grouper.jpg";

export default {
  components: {
    NewsItem,
    MoreMedia
  },
  data() {
    return {
      isActive: false,
      detail: "",
      news: [
        {
          id: "NB12345678-01",
          title: "การผ่าตัดสุดสร้างสรรค์เกิดกับแมลงเต่าทอง",
          image: 'https://img.icons8.com/color/50/000000/video.png',
          description: "",
          date: "12 Jan 2019"
        },
        {
          id: "NB12345678-02",
          title: "การผ่าตัดสุดสร้างสรรค์เกิดกับแมลงเต่าทอง-1",
          image: 'https://img.icons8.com/color/50/000000/video.png',
          description: "",
          date: "12 Jan 2019"
        },
        {
          id: "NB12345678-03",
          title: "การผ่าตัดสุดสร้างสรรค์เกิดกับแมลงเต่าทอง-2",
          image: 'https://img.icons8.com/color/50/000000/video.png',
          description: "",
          date: "12 Jan 2019"
        },
        {
          id: "NB12345678-04",
          title: "การผ่าตัดสุดสร้างสรรค์เกิดกับแมลงเต่าทอง-3",
          image: 'https://img.icons8.com/color/50/000000/video.png',
          description: "",
          date: "12 Jan 2019"
        }
      ]
    };
  },
  methods: {
    showDetail(data) {
      this.detail = data;
      // console.log(this.$parent)
      // this.$parent.$emit("toggleNav");
      // this.isActive = !this.isActive
      if (this.isActive === false) {
        this.isActive = !this.isActive;
      }
    },
    hideDetail() {
      this.isActive = false;
    }
  }
};
</script>

<style lang="scss">
#news-lists {
  .news-grid {
    position: relative;
  }
}
</style>

<style lang="scss" scoped>
.content {
  padding-top: 0;
}
</style>

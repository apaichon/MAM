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
          <md-card>
            <md-card-content>
              <img :src="n.image" alt="People" />
              <h4 class="card-title">{{ n.title }}</h4>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import padthai from '~/assets/img/news/padthai.jpg'
import scare from '~/assets/img/news/scare.jpg'
import champion from '~/assets/img/news/champion.jpg'
import grouper from '~/assets/img/news/grouper.jpg'

export default {
  data () {
    return {
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
    }
  },
  methods: {
    showDetail () {
      console.log('hi')
    }
  }
}
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

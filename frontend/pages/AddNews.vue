<template>
  <div class="content" id="addnews">
    <div class="md-layout">
      <div class="md-layout-item">
        <p>
          Add news :No news related
          <a href="/">Add ralated news</a>
        </p>
      </div>
      <div class="md-layout-item text-right">
        <md-button>Save Draft</md-button>
        <md-button>Ready to Sale</md-button>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <detail />
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-40">
        <sale-condition />
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <video-upload />
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-40">
        <image-upload />
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <article-upload />
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-40">
        <md-card>
          <md-card-content>
            <p class="text-left">Copyright and Additional Info</p>
            <md-field>
              <label>Copyright Holder</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Copyright Notice</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Additional Info</label>
              <md-input></md-input>
            </md-field>
            <div class="text-right">
              <md-button>Set to Default</md-button>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue"
import Detail from '~/layouts/AddNews/Detail.vue'
import SaleCondition from '~/layouts/AddNews/SaleCondition.vue'
import VideoUpload from '~/layouts/AddNews/VideoUpload.vue'
import ArticleUpload from '~/layouts/AddNews/ArticleUpload.vue'
import ImageUpload from '~/layouts/AddNews/ImageUpload.vue'

export default {
  components: {
    StandardCard,
    Detail,
    SaleCondition,
    VideoUpload,
    ArticleUpload,
    ImageUpload
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      news_title: "",
      limit_sale: false
    };
  }
};
</script>

<style lang="scss" scoped>
#search {
  display: none;
}
#addnews {
  .md-button {
    text-align: center;
    // background-color: transparent !important;
    background: linear-gradient(60deg, #26c6da, #00acc1);
    border-radius: 20px;
    box-shadow: none !important;
    color: #ffffff !important;
    i {
      color: #ffffff !important;
    }
  }
}
</style>

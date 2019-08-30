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
        <standard-card data-background-color="blue">
          <template slot="header">
            <i class="fas fa-image"></i>
          </template>
          <template slot="content">
            <p class="category">Image Upload</p>
            <div v-for="(images, i) in image_list" :key="i">
              <md-field>
                <label>Title</label>
                <md-input v-model="images.title"></md-input>
              </md-field>
              <md-field>
                <label>Image files</label>
                <md-file v-model="images.file" accept="image/*" />
              </md-field>
            </div>
            <div class="text-right">
              <md-button @click="createNewImage">
                <md-icon>add</md-icon>Add Image
              </md-button>
            </div>
          </template>
        </standard-card>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <standard-card data-background-color="blue">
          <template slot="header">
            <i class="far fa-file-alt"></i>
          </template>
          <template slot="content">
            <p class="category">File Article Upload</p>
            <div v-for="(articles, i) in article_list" :key="i">
              <md-field>
                <label>Title</label>
                <md-input v-model="articles.title"></md-input>
              </md-field>
              <md-field>
                <label>Article files</label>
                <md-file v-model="articles.file" />
              </md-field>
            </div>
            <div class="text-right">
              <md-button @click="createNewFileArticle">
                <md-icon>add</md-icon>Add Article
              </md-button>
            </div>
          </template>
        </standard-card>
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

export default {
  components: {
    StandardCard,
    Detail,
    SaleCondition,
    VideoUpload
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
      
      image: "",
      image_list: [
        {
          id: 1,
          title: "",
          file: ""
        }
      ],
      article: "",
      article_list: [
        {
          id: 1,
          title: "",
          file: ""
        }
      ],
      limit_sale: false
    };
  },
  methods: {
    createNewImage() {
      const newId = Math.max.apply(null, this.image_list.map(t => t.id)) + 1;
      this.image_list.push({ id: newId, title: "", file: "" });
    },
    createNewFileArticle() {
      const newId = Math.max.apply(null, this.article_list.map(t => t.id)) + 1;
      this.article_list.push({ id: newId, title: "", file: "" });
    }
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

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
        <standard-card data-background-color="orange">
          <template slot="header">
            <i class="fa fa-tag"></i>
          </template>
          <template slot="content">
            <p class="category">News detail</p>
            <md-field>
              <label>Title</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label for="category">News Category</label>
              <md-select name="category" id="category">
                <md-option value="fight-club">item1</md-option>
                <md-option value="godfather">item2</md-option>
                <md-option value="godfather-ii">item3</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Short Description</label>
              <md-textarea class="short-description"></md-textarea>
            </md-field>
            <md-field>
              <label>Full Description</label>
              <md-textarea></md-textarea>
            </md-field>
            <md-field>
              <label>Tags</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Genre</label>
              <md-textarea class="genre"></md-textarea>
            </md-field>
            <md-field>
              <label>Location</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Thumbnall</label>
              <md-file />
            </md-field>
          </template>
        </standard-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-40">
        <md-card>
          <md-card-content>
            <p class="text-left">Sale condition</p>
            <md-checkbox>Limit Sale</md-checkbox>
            <md-field>
              <label for="category">Select Buyer</label>
              <md-select name="category" id="category">
                <md-option value="fight-club">item1</md-option>
                <md-option value="godfather">item2</md-option>
                <md-option value="godfather-ii">item3</md-option>
              </md-select>
            </md-field>
            <div>
              <md-radio value="accent">Forever</md-radio>
              <md-radio value="Primary" class="md-primary">Before 6PM</md-radio>
              <md-radio value="Primary" class="md-primary">Before 5PM</md-radio>
            </div>
            <md-field>
              <label for="category">Term of Usage</label>
              <md-select name="category" id="category">
                <md-option value="fight-club">item1</md-option>
                <md-option value="godfather">item2</md-option>
                <md-option value="godfather-ii">item3</md-option>
              </md-select>
            </md-field>
            <md-field>
              <label>Price</label>
              <md-input></md-input>
            </md-field>
            <md-button>Set to Default</md-button>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <standard-card data-background-color="blue">
          <template slot="header">
            <i class="fas fa-film"></i>
          </template>
          <template slot="content">
            <p class="category">Video Upload</p>
            <div v-for="(videos, i) in video_list" :key="i">
              <md-field>
                <label>Title</label>
                <md-input v-model="videos.title"></md-input>
              </md-field>
              <md-field>
                <label>Video files</label>
                <md-file v-model="videos.file" accept="video/*" />
              </md-field>
            </div>
            <md-button @click="createNewVideo">
              <md-icon>add</md-icon>Add Video
            </md-button>
          </template>
        </standard-card>
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
            <md-button @click="createNewImage">
              <md-icon>add</md-icon>Add Image
            </md-button>
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
            <md-button @click="createNewFileArticle">
              <md-icon>add</md-icon>Add Article
            </md-button>
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
            <md-button>Set to Default</md-button>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue";

export default {
  components: {
    StandardCard
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
      video: "",
      video_list: [
        {
          id: 1,
          title: "",
          file: ""
        }
      ],
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
      ]
    };
  },
  methods: {
    createNewVideo () {
      const newId = Math.max.apply(null, this.video_list.map(t => t.id)) + 1;
      this.video_list.push({ id: newId, title: '', file: '' });
    },
    createNewImage () {
      const newId = Math.max.apply(null, this.image_list.map(t => t.id)) + 1;
      this.image_list.push({ id: newId, title: '', file: '' });
    },
    createNewFileArticle  () {
      const newId = Math.max.apply(null, this.article_list.map(t => t.id)) + 1;
      this.article_list.push({ id: newId, title: '', file: '' });
    }
  }
};
</script>

<style lang="scss" scoped>
#search {
  display: none;
}
</style>

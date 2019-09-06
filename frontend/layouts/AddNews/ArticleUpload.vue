<template>
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
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue";

export default {
  name: "article-upload",
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
    createNewFileArticle() {
      const newId = Math.max.apply(null, this.article_list.map(t => t.id)) + 1;
      this.article_list.push({ id: newId, title: "", file: "" });
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>
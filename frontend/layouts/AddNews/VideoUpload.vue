<template>
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
      <div class="text-right">
        <md-button @click="createNewVideo">
          <md-icon>add</md-icon>Add Video
        </md-button>
      </div>
    </template>
  </standard-card>
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue"

export default {
  name: "video-upload",
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
      video: "",
      video_list: [
        {
          id: 1,
          title: "",
          file: ""
        }
      ]
    };
  },
  methods: {
    createNewVideo() {
      const newId = Math.max.apply(null, this.video_list.map(t => t.id)) + 1;
      this.video_list.push({ id: newId, title: "", file: "" });
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

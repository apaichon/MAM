<template>
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
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue";

export default {
  name: "image-upload",
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
      image: "",
      image_list: [
        {
          id: 1,
          title: "",
          file: ""
        }
      ]
    };
  },
  methods: {
    createNewImage() {
      const newId = Math.max.apply(null, this.image_list.map(t => t.id)) + 1;
      this.image_list.push({ id: newId, title: "", file: "" });
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

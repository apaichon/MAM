<template>
  <standard-card data-background-color="orange">
    <template slot="header">
      <i class="fa fa-tag"></i>
    </template>
    <template slot="content">
      <p class="category">News detail</p>
      <md-field>
        <label>Title</label>
        <md-input class="md-info"></md-input>
      </md-field>
      <md-field>
        <label for="category">News Category</label>
        <md-select name="category" id="category" class="md-info">
          <md-option value="fight-club">item1</md-option>
          <md-option value="godfather">item2</md-option>
          <md-option value="godfather-ii">item3</md-option>
        </md-select>
      </md-field>
      <md-field>
        <label>Short Description</label>
        <md-textarea class="short-description md-info"></md-textarea>
      </md-field>
      <md-field>
        <label>Full Description</label>
        <md-textarea class="md-info"></md-textarea>
      </md-field>
      <md-field>
        <label>Tags</label>
        <md-input class="md-info"></md-input>
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
</template>

<script>
import StandardCard from "~/components/Card/StandardCard.vue";

export default {
  name: "detail",
  components: {
    StandardCard
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>

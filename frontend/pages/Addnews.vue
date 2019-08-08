<template>
  <div class="content">
    <p>Add news :No news related</p>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fa fa-tag"></i>
          </template>

          <template slot="content">
            <p class="text-left">New detail</p>
            <p class="category text-left">Title</p>
            <p class="category text-left">Description</p>
            <!-- <h3 class="title">+245</h3> -->
          </template>
        </stats-card>

        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fa fa-film"></i>
          </template>

          <template slot="content">
            <p class="text-left">New detail</p>
            <p class="category text-left">Title</p>
            <p class="category text-left">Description</p>
            <!-- <h3 class="title">+245</h3> -->
          </template>
        </stats-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-35">
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fa fa-cloud-upload-alt"></i>
          </template>

          <template slot="content">
            <p class="text-left">Upload File</p>
            <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
            <p></p>
            <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>

            <!-- <h3 class="title">+245</h3> -->
          </template>

          <template slot="footer">
            <div class="stats"></div>
          </template>
        </stats-card>

        <stats-card data-background-color="blue">
          <!-- <template slot="header">
            <i class="fa fa-film"></i>
          </template>-->

          <template slot="content">
            <p class="text-left">New detail</p>
            <p class="category text-left">Title</p>
            <p class="category text-left">Description</p>
            <!-- <h3 class="title">+245</h3> -->
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>

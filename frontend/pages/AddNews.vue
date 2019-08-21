<template>
  <div class="content">
    <p>Add news :No news related</p>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-65">
        <md-card class="md-card-stats">
          <md-card-header data-background-color="orange">
            <i class="fa fa-tag"></i>
          </md-card-header>
          <md-card-content>
            <p class="text-left">New detail</p>
            <md-field>
              <label>Title</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Textarea</label>
              <md-textarea></md-textarea>
            </md-field>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-35">
        <md-card class="md-card-stats">
          <md-card-header data-background-color="blue">
            <i class="fa fa-cloud-upload-alt"></i>
          </md-card-header>
          <md-card-content>
            <p class="text-left">New detail</p>
            <div>
              <md-button class="md-primary">Primary</md-button>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: ''
    }
  }
}
</script>

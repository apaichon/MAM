<template>
    <div>
      <form novalidate class="md-layout" >
      <md-card class="md-layout-item md-size-90 md-small-size-100">
        <md-card-header>
          <div class="md-title">News Management</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="title">Title</label>
                <md-input name="title" id="title" v-model="newsModel.title"  />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="last-name">News Category</label>
                <md-select name="news-category" id="news-category">
                  <md-option></md-option>
                  <md-option value="E">Entertainment</md-option>
                  <md-option value="P">Political</md-option>
                  <md-option value="S">Sport</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="news-video">News Video</label>
                <md-file v-model="newsModel.videoUrl"  placeholder="Upload News Video" />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="news-image">Image</label>
                <md-file v-model="newsModel.imageUrl" placeholder="Upload News Image" />
              </md-field>
            </div>
          </div>
          <md-field >
            <label for="description">Description</label>
            <md-textarea v-model="newsModel.description"></md-textarea>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="button" class="md-primary" @click="onCreateClicked" >Create News</md-button>
        </md-card-actions>
      </md-card>

    </form>
    </div>
</template>
<script>
export default {
  name: 'NewsView',
  props: ['newsModel'],
  methods: {
    onCreateClicked (e) {
      this.$emit('onCreateClicked')
    }
  }
}
</script>

<template>
  <div class="content" id="addnews">
    <p>Add news :No news related <a href="/">Add ralated news</a></p>
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-60">
        <md-card class="md-card-stats">
          <md-card-header data-background-color="orange">
            <i class="fa fa-tag"></i>
          </md-card-header>
          <md-card-content>
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
              <md-textarea></md-textarea>
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
              <md-textarea></md-textarea>
            </md-field>
            <md-field>
              <label>Location</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Thumbnall</label>
              <md-file />
            </md-field>
          </md-card-content>
        </md-card>
      </div>

      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-40">
        <md-card class="md-card-stats">
          <!-- <md-card-header data-background-color="blue">
            <i class="fa fa-cloud-upload-alt"></i>
          </md-card-header> -->
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

<style lang="scss">
  #addnews {
    #upload-file {
      display: flex;
      margin-top: 5em;
      justify-content: space-between;
      align-content: center;
      align-items: center;
    }
    .md-card-stats .md-card-content {
      text-align: left;
    }
    .md-radio {
      display: flex;
    }
  }
  
</style>

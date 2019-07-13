<template>
    <div>
      <form novalidate class="md-layout" >
      <md-card class="md-layout-item md-size-90 md-small-size-100">
        <md-card-header>
          <div class="md-title">News Category List</div>
          <hr/>
        </md-card-header>
         <md-card-actions>
           <div class="md-layout">
            <div class="md-layout-item md-size-40">
              <md-field  >
                <label for="title">Category</label>
                <md-select name="news-status" id="news-status" >
                    <md-option></md-option>
                    <md-option value="false">Inactive</md-option>
                    <md-option value="true">Active</md-option>
                </md-select>
              </md-field>
            </div>
            <div class="md-layout-item md-size-40">
              <md-field >
                <label for="title">Text Search</label>
                <md-input name="textSearch" />
              </md-field>
            </div>
            <div class="md-layout-item">
                <md-button type="button" style="top:15px;left:10px" class="md-raised md-primary" >Search</md-button>
                <md-button to="/NewsCategoryEditor?mode=create" style="top:15px;left:10px" class="md-icon-button md-raised" >
                  <md-icon>add</md-icon>
                </md-button>
            </div>
          </div>
        </md-card-actions>

        <md-card-content>
          <md-table>
          <md-table-row>
            <md-table-head md-numeric>ID</md-table-head>
            <md-table-head>Name</md-table-head>
            <md-table-head>Email</md-table-head>
            <md-table-head>Gender</md-table-head>
            <md-table-head>Job Title</md-table-head>
          </md-table-row>
          <md-table-row  :key="item.id" v-for="(item, index) in items">
            <md-table-cell md-numeric>{{ index + 1}}</md-table-cell>
            <md-table-cell>{{item.id}}</md-table-cell>
            <md-table-cell>{{item.code}}</md-table-cell>
            <md-table-cell>{{item.name.th_TH}}</md-table-cell>
            <md-table-cell>{{item.name.en_US}}</md-table-cell>
          </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>

    </form>
  </div>
</template>

<script>

export default {
  name: 'NewsCategoryListView',
  props: ['items'],
  methods: {
    onSaveClicked (e) {
      this.$emit('onSaveClicked')
    }
  }
}
</script>

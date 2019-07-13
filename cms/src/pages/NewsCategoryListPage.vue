<template>
    <div>
      <NewsCategoryListView v-show="hasData" :items="getItemList"></NewsCategoryListView>
      <md-empty-state v-show="!hasData"
      md-icon="devices_other"
      md-label="Create your first data of news category."
      md-description="Creating data, you'll be able to see news category.">
      <md-button class="md-primary md-raised" to="/NewsCategoryEditor?mode=create">Create first news category</md-button>
    </md-empty-state>
    </div>
</template>

<script>
import NewsCategoryListView from '../views/NewsCategoryListView'
import NewsCategoryStore from '@/stores/NewsCategoryStore'
import NewsCategoryApi from '../apis/NewsCategoryApi'
const api = new NewsCategoryApi()

export default {
  name: 'NewsCategoryListPage',
  components: {
    NewsCategoryListView
  },
  computed: {
    getItemList: () => {
      return NewsCategoryStore.getters.items
    }
  },
  data () {
    return {
      items: NewsCategoryStore.getters.items,
      hasData: true
    }
  },
  mounted () {
    api.Find({}).then(response => {
      if ((response.status === 200 && response.data.code === 500) || response.status !== 200) {
        // show error message!
        // hide table
        this.hasData = false
      } else {
        // bind data and show table
        NewsCategoryStore.dispatch('setItems', response.data.data)
          .then(result => {
            console.log(NewsCategoryStore.getters.items)
          })
        this.hasData = true
      }
      console.log(this.hasData, response)
    })
  },
  methods: {
    save () {
      console.log(this.item)
    }
  }
}
</script>

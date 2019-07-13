<template>
    <div>
        <NewsView :newsModel="item" @onCreateClicked="save()"></NewsView>
    </div>
</template>

<script>
import NewsView from '../views/NewsView'

export default {
  name: 'NewsPage',
  components: {
    NewsView
  },
  data () {
    return {
      item: {}
    }
  },
  methods: {
    save () {
      console.log(this.item)
    }
  }
}
</script>

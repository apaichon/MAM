<template>
    <div>
      <loading :active.sync="isLoading"
        :is-full-page="fullPage"></loading>
      <NewsCategoryEditorView ref="editor" :model="item" :mode="mode" @onSaveClicked="save"></NewsCategoryEditorView>
    </div>
</template>

<script>
import NewsCategoryEditorView from '../views/NewsCategoryEditorView'
import NewsCategoryStore from '@/stores/NewsCategoryStore'
import NewsCategoryApi from '../apis/NewsCategoryApi'
import swal from 'sweetalert'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

const api = new NewsCategoryApi()

export default {
  name: 'NewsCategoryEditorPage',
  components: {
    NewsCategoryEditorView,
    Loading
  },
  data () {
    return {
      item: NewsCategoryStore.getters.item,
      mode: 'create',
      isLoading: false,
      fullPage: true
    }
  },
  mounted () {
    //  mode => create or update.
    let mode = (this.$route.query.mode ? this.$route.query.mode : 'create')
    this.mode = mode
    if (mode === 'create') {
      NewsCategoryStore.dispatch('newItem')
    }
  },
  methods: {
    add (eventName) {
      let data = {}
      data.data = this.item
      data.subDoc = data.data.code
      this.isLoading = true
      api.Add(data)
        .then((result) => {
          this.isLoading = false
          if (result.data.code === 200) {
            swal(`Insert ${data.data.code} is successfully`)
              .then(clicked => {
                if (eventName === 'onSaveNewClicked') {
                  this.$refs.editor.focusElement('newsCode')
                }
              })
            if (eventName === 'onSaveNewClicked') {
              NewsCategoryStore.dispatch('newItem')
            } else if (eventName === 'onSaveBackClicked') {
              this.$router.push('/NewsCategory')
            }
          } else {
            swal({
              title: 'Error',
              text: result.message,
              icon: 'error',
              buttons: true,
              dangerMode: true
            })
          }
        }).catch(err => {
          this.isLoading = false
          swal({
            title: 'Error',
            text: err.message,
            icon: 'error',
            dangerMode: true
          })
        })
    },
    update () {
      let data = {}
      data.data = this.item
      api.EditById(data)
        .then((result) => {
          if (result.data.code === 200) {
            this.message = `Update ${this.item.name.th_TH} is successfully`
            this.showSnackbar = true
            this.isInfinity = false
            this.mode = 'update'
            console.log('return data', result.data)
            // NewsCategoryStore.dispatch('setItem', result.data.data)
            // setTimeout(this.$router.push('/NewsCategory'), this.duration * 2)
          }
        })
    },
    save (e) {
      console.log('save', e)
      if (!e.isValid) {
        return
      }
      switch (this.mode) {
        case 'create':
          this.add(e.eventName)
          break
        case 'update':
          this.update()
          break
      }
    }
  }
}
</script>

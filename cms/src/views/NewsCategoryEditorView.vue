<template>
    <div>
      <form novalidate class="md-layout" >
      <md-card class="md-layout-item md-size-90 md-small-size-100">
        <md-card-header>
          <md-toolbar>
            <div class="md-title">
            <span class="md-list-item-text">News Category Management</span>
          </div>
          <md-button type="button" class="md-primary" >{{mode}}</md-button>
          </md-toolbar>
        </md-card-header>

        <md-card-content>
          <md-field >
            <label for="title">Code<span style="color:#b00020">*</span></label>
            <md-input v-validate="'required|alpha_num|min:3'" ref="newsCode" name="newsCode" id="newsCode" v-model="model.code" />
            <span>{{ errors.first('newsCode') }}</span>
          </md-field>
          <md-field >
            <label for="title">Name TH <span style="color:#b00020">*</span></label>
            <md-input v-validate="'required|min:3'" ref="newsNameTH" name="newsNameTH" v-model="model.name.th_TH"  />
            <span>{{ errors.first('newsNameTH') }}</span>
          </md-field>
          <md-field >
            <label for="title">Name EN <span style="color:#b00020">*</span></label>
            <md-input v-validate="'required|alpha_spaces|min:3'" ref="newsNameEN" name="newsNameEN" v-model="model.name.en_US"  />
            <span>{{ errors.first('newsNameEN') }}</span>
          </md-field>
          <md-field >
            <label for="description">Description TH</label>
            <md-textarea v-model="model.description.th_TH" ></md-textarea>
          </md-field>
          <md-field >
            <label for="description">Description EN</label>
            <md-textarea v-model="model.description.en_US" ></md-textarea>
          </md-field>
          <div class="md-layout-item md-small-size-100">
              <md-field >
                <label for="last-name">Status <span style="color:#b00020">*</span></label>
                <md-select name="news_status" id="news_status" v-model="model.status">
                  <md-option :value="0">Inactive</md-option>
                  <md-option :value="1">Active</md-option>
                  <md-option :value="2">Obsoleted</md-option>
                </md-select>
              </md-field>
            </div>
        </md-card-content>

        <md-card-actions>
          <md-button type="button" class="md-dense md-raised md-primary" @click="onSaveClicked('onSaveNewClicked')">Save and New</md-button>
          <md-button type="button" class="md-dense md-raised md-primary" @click="onSaveClicked('onSaveBackClicked')">Save and Back</md-button>
        </md-card-actions>
      </md-card>

    </form>
  </div>
</template>

<script>

export default {
  name: 'NewsCategoryEditorView',
  props: ['model', 'mode'],
  methods: {
    focusElement (name) {
      this.$refs[name].$el.focus()
    },
    onSaveClicked (name) {
      this.validate(this.$validator, this.$refs)
        .then(valid => {
          this.$emit('onSaveClicked', {
            isValid: valid,
            eventName: name
          })
        })
    },
    validate (validator, refs) {
      return new Promise((resolve, reject) => {
        validator.validate()
          .then(valid => {
            if (validator.errors.items.length > 0) {
              refs[validator.errors.items[0].field].$el.focus()
            }
            resolve(valid)
          })
      })
    }
  }
}
</script>

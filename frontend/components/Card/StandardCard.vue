<template>
  <md-card class="md-card-stats">
    <md-card-header :data-background-color="dataBackgroundColor">
      <slot name="header"></slot>
    </md-card-header>
    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'standard-card',
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>

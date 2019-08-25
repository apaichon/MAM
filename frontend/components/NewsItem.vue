<template>
  <!-- <md-card>
    <div class="md-card-header-image">
      <slot name="header"></slot>
    </div>
    <md-card-content>
      <slot name="title" class="card-title"></slot>
    </md-card-content>
  </md-card> -->
  <md-card>
      <md-card-media>
        <slot name="image"></slot>
      </md-card-media>

      <md-card-header>
        <slot name="title" class="md-title"></slot>
        <slot name="subitem" class="md-subhead"></slot>
      </md-card-header>
    </md-card>
</template>

<script>
export default {
  name: 'news-item'
}
</script>

<template>
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

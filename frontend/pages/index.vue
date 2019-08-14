<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title" style="line-height: 100px;">
        frontend
      </h1>
      <md-button class="md-raised md-primary">Primary</md-button>
      <h2 class="subtitle" style="line-height: 50px;">
        MAM Project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

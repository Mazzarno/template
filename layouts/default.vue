<template>
  <v-app>
    <transition name="page" mode="out-in">
      <Nuxt />
    </transition>
  </v-app>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  transition: {
    name: 'home',
    mode: 'out-in',
  },
}
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
html {
  overflow-x: hidden !important;
}
</style>
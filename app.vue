<template>
  <div class="select-none">
    <!--<Loading v-if="loading" />-->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
/*const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  window.setTimeout(() => {
    loading.value = false;
  }, 1000);
}); */
</script>
<style>
/* TRANSITION ANIMATION PAGE */
.page-enter-active,
.page-leave-active {
  transition: opacity 2s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0 2s ease;
}
</style>

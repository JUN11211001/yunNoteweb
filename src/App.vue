<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import GlobalHeader from './layout/GlobalHeader.vue'
</script>

<template>
  <GlobalHeader></GlobalHeader>

  <RouterView></RouterView>
</template>

<style scoped></style>

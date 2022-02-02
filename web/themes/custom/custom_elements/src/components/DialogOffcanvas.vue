<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'

defineProps<{
  slot: any,
}>()
</script>

<template>
  <Header/>
  <!-- <slot name="header"></slot> -->
  <slot name="breadcrumb"></slot>
  <slot name="highlighted"></slot>
  <slot name="main"></slot>
  <Footer />
</template>

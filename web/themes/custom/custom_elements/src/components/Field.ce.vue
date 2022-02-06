<template>
<div text="xl purple-800" font="bold" v-if="!label_hidden">{{ label }}</div>
<slot></slot>
</template>

<script setup lang="ts">
defineProps<{
  slot?: string,
  label: string,
  label_hidden?: boolean
  class?: string
  property?: string
}>()
</script>

<style>

</style>
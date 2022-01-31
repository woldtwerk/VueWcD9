<template>
<h3 text="xl purple-800" font="bold" v-if="!label_hidden">{{ label }}</h3>
<slot></slot>
</template>

<script setup lang="ts">
defineProps<{
  slot: any,
  label: string,
  label_hidden: boolean
}>()
</script>


<template>
<h3 text="xl purple-800" font="bold" v-if="!label_hidden">{{ label }}</h3>
<div v-if="label ==='Body'" class="prose lg:prose-xl">
<slot></slot>
</div>
<template v-else>
  <slot></slot>
</template>
</template>

<script setup lang="ts">
defineProps<{
  slot: any,
  label: string,
  label_hidden: boolean
}>()
</script>


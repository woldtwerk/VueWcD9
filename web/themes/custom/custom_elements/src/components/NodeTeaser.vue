<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
<div class="relative flex flex-col h-full overflow-hidden border rounded-lg border-slate-400">
  <div class="aspect-[16/9] overflow-hidden">
    <slot name="field_image"></slot>
  </div>

  <div class="p-4">
    <slot name="title_prefix"></slot>
    <h2 class="text-xl">{{ title }}</h2>
    <slot name="title_suffix"></slot>
    <!-- <slot name="date"></slot> -->
    <slot name="body"></slot>
  </div>
</div>
</template>

<style lang="postcss">
:host {
  /* @apply flex flex-col overflow-hidden relative rounded-lg !border-2 border-slate-800; */
}

</style>

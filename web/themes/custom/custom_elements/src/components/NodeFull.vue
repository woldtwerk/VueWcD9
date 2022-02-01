<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>

<div class="mt-8 prose prose-slate lg:prose-lg">
  <h1 property="schema:name">
    {{ title }}
  </h1>
</div>
<slot name="body"></slot>
<slot name="field_image"></slot>

<div class="mt-4 text-xs">
  <slot name="date"></slot>
</div>
</template>


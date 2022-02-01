<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
<slot name="title_prefix"></slot>
<h2 class="bg-blue-500">{{ title }}</h2>
<slot name="title_suffix"></slot>
<slot name="date"></slot>
<slot name="body"></slot>
<slot name="field_image"></slot>
</template>

<style lang="postcss">


h2 {
  color: blue;
}
</style>

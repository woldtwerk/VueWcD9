<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
<slot name="date"></slot>
<slot name="body"></slot>
<slot name="field_image"></slot>
</template>


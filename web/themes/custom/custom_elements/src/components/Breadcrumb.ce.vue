<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/solid'

interface Page {
  text: string
  url: string
}

const props = defineProps<{
  breadcrumbs: Page[]
}>()

const goTo = (url: string) => window.swup.loadPage({
  url,
  method: 'GET',
})

</script>

<template>
  <nav class="flex bg-white border-b border-gray-200" aria-label="Breadcrumb">
    <ol role="list" class="flex w-full max-w-screen-xl px-4 mx-auto space-x-4 sm:px-6 lg:px-8">
      <li class="flex">
        <div class="flex items-center">
          <a href="/" class="text-gray-400 hover:text-gray-500" @click.prevent="goTo('/')">
            <HomeIcon class="flex-shrink-0 w-5 h-5" aria-hidden="true" />
            <span class="sr-only" >Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in breadcrumbs" :key="page.text" class="flex">
        <div class="flex items-center">
          <svg class="flex-shrink-0 w-6 h-full text-gray-200" viewBox="0 0 24 44" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <a v-if="page.url" :href="page.url" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" @click.prevent="goTo(page.url)">{{ page.text }}</a>
          <span v-else="page.url" class="ml-4 text-sm font-medium text-gray-500">{{ page.text }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">

import { DocumentTextIcon, PencilAltIcon, TrashIcon, DocumentDuplicateIcon } from '@heroicons/vue/solid'
import { RenderFunction } from 'vue'

interface LocalTask {
  key: string
  title: string
  url: string
  active: boolean
  icon: string
}

interface Props {
  tasks: LocalTask[]
}

const props = defineProps<Props>()

const icons: Record<string, RenderFunction> = {
  'entity.node.canonical': DocumentTextIcon,
  'entity.node.edit_form': PencilAltIcon,
  'entity.node.delete_form': TrashIcon,
  'entity.node.version_history': DocumentDuplicateIcon,
}

const tabs = props.tasks.map(tab => {
  return {
    ...tab,
    icon: icons[tab.key]
  }
})

</script>

<template>
  <div>
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select a tab</label>
      <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
      <select id="tabs" title="tabs" class="block w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
        <option v-for="tab in tabs" :key="tab.key" :selected="tab.active">{{ tab.title }}</option>
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="flex -mb-px space-x-8" aria-label="Tabs">
          <a v-for="(tab, idx) in tabs" :key="tab.key" :href="tab.url" :class="[tab.active ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.active ? 'page' : undefined">
            <component :is="tab.icon" :class="[tab.active ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500', '-ml-0.5 mr-2 h-5 w-5']" aria-hidden="true" />
            <span>{{ tab.title }}</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
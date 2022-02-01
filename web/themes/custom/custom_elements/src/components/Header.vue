<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'

const navigation = [
  { name: 'Article 1', href: '/node/1' },
  { name: 'Article 2', href: '/node/2' },
  { name: 'Article 3', href: '/node/3' },
]

const current = ref(window.location.pathname)

const goTo = (url: string) => {
  // @ts-expect-error
  window.swup.loadPage({
    url,
    method: 'GET',
  })
  current.value = url
}

</script>

<template>
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }" >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-16 relative items-center justify-between">
        <div class="flex inset-y-0 left-0 absolute items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="rounded-md p-2 text-gray-400 inline-flex items-center justify-center hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset focus:ring-white focus:ring-2">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="h-6 w-6 block" aria-hidden="true" />
            <XIcon v-else class="h-6 w-6 block" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto block lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            <img class="h-8 w-auto hidden lg:block" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.href === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.href === current ? 'page' : undefined" @click.prevent="goTo(item.href)">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="flex pr-2 inset-y-0 right-0 absolute items-center sm:inset-auto sm:ml-6 sm:pr-0 sm:static">
          <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="rounded-full flex bg-gray-800 text-sm focus:outline-none focus:ring-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
                <span class="sr-only">Open user menu</span>
                <img class="rounded-full h-8 w-8" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
              <MenuItems class="bg-white rounded-md shadow-lg ring-black mt-2 py-1 origin-top-right right-0 ring-1 ring-opacity-5 w-48 z-10 absolute focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.href === current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.href === current ? 'page' : undefined" @click.prevent="goTo(item.href)">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

import { defineCustomElement } from '~/api/ApiCustomElements'
import { hyphenate } from '@vue/shared'

/**
 * Import modules.
 */
const modules = (import.meta.globEager('./modules/*.ts'))

/**
 * 
 * @param filename of vue file
 * @returns valid ce tagname. Adds hyphen at end if hyphenating filename doesn't produce name with hyphen.
 */
const getTagname = (filename: string) => {
  let tagName = hyphenate(filename.split('/').at(-1).replace(/(\.ce\.vue|\.lazy\.vue)/, ''))
  return tagName.includes('-') ? tagName : `${tagName}-`
}

/**
 * Import all vue ce and define them as custom elements.
 */
const CustomElements = import.meta.globEager('./components/*.ce.vue')
Object.keys(CustomElements).forEach(ce => {
  customElements.define(getTagname(ce), defineCustomElement(CustomElements[ce].default))
})

/**
 * Lazy import all vue ce and define them as custom elements.
 */
const LazyCustomElements = import.meta.glob('./components/*.lazy.vue')
Object.keys(LazyCustomElements).forEach(async(ce) => {
  customElements.define(getTagname(ce), defineCustomElement(await (await LazyCustomElements[ce]()).default))
})

/**
 * Regist Service Worker.
 */
window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')
})
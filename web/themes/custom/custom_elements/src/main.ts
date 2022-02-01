import { defineCustomElement } from './api/ApiCustomElements'
import { supportsAdoptingStyleSheets } from './api/styles'

import tailwind from './tailwind.css'

// @ts-ignore
import Swup from "swup/lib/index.js";
// @ts-ignore
import SwupProgressPlugin from "@swup/progress-plugin";
// @ts-ignore
import SwupScrollPlugin from '@swup/scroll-plugin';

// @ts-expect-error
window.tw = {
  styles: tailwind
}
if(supportsAdoptingStyleSheets) {
  const sheet = new CSSStyleSheet()
  sheet.replaceSync(tailwind)

  // @ts-expect-error
  window.tw.sheet = sheet
}

// console.log(tailwind)

import Node from "./components/NodeFull.vue";
import NodeTeaser from "./components/NodeTeaser.vue";
import Field from "./components/Field.vue";
import DialogOffcanvas from "./components/DialogOffcanvas.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import LocalTasks from "./components/LocalTasks.vue";

// createApp(App).mount('#app')

customElements.define("node-full", defineCustomElement(Node));
customElements.define("node-teaser", defineCustomElement(NodeTeaser));
customElements.define("field-", defineCustomElement(Field));
customElements.define("dialog-offcanvas", defineCustomElement(DialogOffcanvas));
customElements.define("breadcrumb-", defineCustomElement(Breadcrumb));
customElements.define("local-tasks", defineCustomElement(LocalTasks));

const swupOptions = {
  containers: ["[data-router]"],
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]):not([data-drupal-link-system-path]):not([href^="/admin"]), ' +
    'a[href^="/"]:not([data-no-swup]):not([href^="/admin"]):not([href*="/edit/"]):not([href$="/edit"]), ' +
    'a[href^="#"]:not([data-no-swup])',
};

const swup = new Swup({
  ...swupOptions,
  plugins: [
    new SwupProgressPlugin(),
    new SwupScrollPlugin({
      animateScroll: false
    })],
});

// @ts-expect-error
window.swup = swup

swup.on("contentReplaced", () => {
  swup.options.containers.forEach((container: string) => {
    const context = document.querySelectorAll(container);
    context.forEach((element) => {
      console.log('loaded')
      if(window.hasOwnProperty('Drupal')) {
        Drupal.attachBehaviors(element, drupalSettings);
      }
    });
  });
});

import { defineCustomElement } from './api/ApiCustomElements'
import { supportsAdoptingStyleSheets } from './api/styles'

import tailwind from './tailwind.css'

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
import Header from "./components/Header.vue";

// createApp(App).mount('#app')

customElements.define("node-full", defineCustomElement(Node));
customElements.define("node-teaser", defineCustomElement(NodeTeaser));
customElements.define("field-", defineCustomElement(Field));
customElements.define("dialog-offcanvas", defineCustomElement(DialogOffcanvas));
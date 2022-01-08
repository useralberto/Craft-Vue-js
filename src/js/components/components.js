import Vue from "vue";

import Header from "./_Header.vue";
import Footer from "./_Footer.vue";
import MasterHead from "./_MasterHead.vue";

if (document.querySelector("#app")) {
  Vue.component("vue-picture-element", VuePictureElement);
  const app = new Vue({
    el: "#app",
    components: {
      "header-components": Header,
      "footer-components": Footer,
      "masterhead-component": MasterHead,
    },
    data() {
      return {};
    },
  });
}

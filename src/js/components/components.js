import Vue from "vue";

import Header from "./_Header.vue";
import Footer from "./_Footer.vue";

if (document.querySelector("#app")) {
  const app = new Vue({
    el: "#app",
    components: {
      "header-components": Header,
      "footer-components": Footer,
    },
  });
}

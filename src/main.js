import Vue from "vue";
import store from "./store";
import App from "./App.vue";

import Vuetify from "vuetify";
import VuetifyDraggableTreeview from "vuetify-draggable-treeview";
import "vuetify/dist/vuetify.css";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(VuetifyDraggableTreeview);

Vue.use(Vuetify, {
  iconfont: "mdi",
});

Vue.config.productionTip = false;

Vue.extend({
  components: {
    VuetifyDraggableTreeview,
  },
});

new Vue({
  store,
  vuetify: new Vuetify({}),
  render: (h) => h(App),
}).$mount("#app");

<template>
  <div class="document__category">
    <div @click="openCategory(index)" class="category__title" :class="open ? 'open' : 'close'">
      <div class="category__info">
        <div>
          <button>
            <img class="arrow" src="@/assets/arrow.svg" width="8" height="13" />
          </button>
          <h3>{{ category.title }}</h3>
        </div>

        <Controls />
      </div>

      <div class="category__items">
        <collapse-transition>
          <ul v-show="category.open">
            <li v-for="(elem, idx) in category.elems" :key="idx">
              {{ elem.title }}
            </li>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
import CollapseTransition from "@ivanv/vue-collapse-transition"
import Controls from "./Controls.vue"

export default {
  name: "Category",
  props: ["category", "index", "open"],

  components: {
    CollapseTransition,
    Controls
  },

  methods: {
    openCategory(currentIndex) {
      this.$store.dispatch("openCategory", currentIndex);
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/Category.css";
</style>
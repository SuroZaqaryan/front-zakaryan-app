<style scoped>
.item-container {
  max-width: 100%;
  margin: 0;
}

.item {
  padding: 1rem;
}

.item-sub {
  margin: 0 0 0 1rem;
}
</style>

<template>
  <!-- <draggable v-bind="dragOptions" tag="div" class="item-container" :list="list" :value="value" @input="emitter">
    <div class="item-group" :key="el.id" v-for="el in realValue">
      <div class="item">{{ el.title }}</div>
      <nested-test class="item-sub" :list="el.elems" />
    </div>
  </draggable> -->

  <draggable v-bind="dragOptions" :group="{ name: 'g1' }" tag="div" class="item-container" :list="list" :value="value"
    @input="emitter">
    <div :key="category.id" v-for="category in realValue" class="document__category">
      <div class="category__title">
        <div class="category__info item">
          <div>
            <button @click="openCategory(category.id)">
              <img class="arrow" src="@/assets/arrow.svg" width="8" height="13" />
            </button>
            <div>
              <input type="text" v-model="category.title" :disabled="category.edit">
            </div>
          </div>
          <Controls :item="category" type="category" handle="handle" />
        </div>
        <div class="category__items">
          <collapse-transition>
            <nested-test class="item-sub" :list="category.elems" />
            <!-- <div v-show="category.open" class="category__items">
              <ul>
                <transition-group type="transition">
                  <li v-for="(elem, idx) in category.elems.filter((x) => x.categoryId === category.id)" :key="idx">
                    <input type="text" v-model="elem.title" :disabled="elem.edit">
                    <Controls @drag-start="dragStart($event, elem)" :item="category" :itemChild="elem" type="elem" />
                  </li>
                </transition-group>
              </ul>
            </div> -->
          </collapse-transition>
        </div>

      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import CollapseTransition from "@ivanv/vue-collapse-transition"
import Controls from "./Controls.vue"

export default {
  name: "nested-test",
  methods: {
    emitter(value) {
      this.$emit("input", value);
    },

    openCategory(currentIndex) {
      this.$store.dispatch("openCategory", currentIndex);
    },
  },
  components: {
    draggable,
    CollapseTransition,
    Controls
  },
  computed: {
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },

    realValue() {
      return this.value ? this.value : this.list;
    }
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
    }
  }
};
</script>

<style scoped>
@import "../../assets/styles/Category.css";
</style>


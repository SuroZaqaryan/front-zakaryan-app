<template>
  <div>
    <div class="category">
      <v-layout wrap>
        <v-flex mb-5 xs12>
          <v-card>
            <v-card-text class="pa-0">
              <v-draggable-treeview v-model="items" group="categories"
                v-click-outside="onClickOutside">
                <template v-slot:label="{ item }">
                  <div class="d-flex align-center category_field">
                    <div>
                      <p class="category__field category__field-name" v-if="item.edit">
                        {{ item.name }}
                      </p>
                      <form v-else action="">
                        <input type="text" :id="item.id" :disabled="item.edit"
                          :class="item.edit ? 'disabled' : 'editabled'" class="category__field" v-model="item.name" />
                      </form>
                    </div>

                    <ul class="d-flex align-center category_status">
                      <li v-for="(color, idx) in item.colors" :key="idx" :class="color"> </li>
                      <p v-if="item.status">Обязательный</p>
                    </ul>

                    <p class="m-0 category_subname">{{ item.subName }}</p>
                  </div>
                </template>

                <template v-slot:append="{ item }">
                  <Controls :item="item" :type="item.type" handle="handle" />
                </template>
              </v-draggable-treeview>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <p v-if="!items.length">Нету таких результатов</p>
    </div>
    <Elems />
    <pre>{{ items }}</pre>
  </div>
</template>

<script>
import Elems from "./Elems"
import Controls from "./Controls.vue";

export default {
  name: "TestComp",

  computed: {
    items: {
      get() {
        return this.$store.getters.items;
      },
      set(value) {
        this.$store.commit("updateElements", value);
      },
    },
  },

  components: {
    Elems,
    Controls,
  },

  methods: {
    onClickOutside() {
      this.items.forEach((item) => {
        item.children?.forEach((subItem) => {
          subItem.edit = true;
          item.edit = true;
        });
      });
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/Category.css";
</style>
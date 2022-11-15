<template>
  <div class="category">
    <v-layout wrap>
      <v-flex mb-5 xs12>
        <v-card>
          <v-card-text class="pa-0">
            <v-draggable-treeview
              v-model="items"
              group="categories"
              @drop.native="dragend($event)"
              v-click-outside="onClickOutside"
            >
              <template v-slot:label="{ item }">
                <div class="d-flex align-center category_field">
                  <div>
                    <p class="category__field" v-if="item.edit">
                      sasadsadsadsad
                    </p>
                    <form v-else action="">
                      <input
                        type="text"
                        :id="item.id"
                        :disabled="item.edit"
                        :class="item.edit ? 'disabled' : 'editabled'"
                        class="category__field"
                        v-model="item.name"
                      />
                    </form>
                  </div>
                  <div>

                  </div>
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
    <pre>{{ items }}</pre>
  </div>
</template>

<script>
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
    Controls,
  },

  methods: {
    onClickOutside() {
      this.items.forEach((item) => {
        item.children.forEach((subItem) => {
          subItem.edit = true;
          item.edit = true;
        });
      });
    },
    ajouterMenu() {
      // this.items.push({
      //   id: 3,
      //   name: "Test",
      //   icon: "fa-solid fa-chevron-down",
      //   link: "",
      //   children: [],
      // });
    },
    ajouterSousMenu(item, event) {
      // item.children.push({
      //   id: 301,
      //   name: "Test",
      //   icon: "",
      //   link: "test",
      //   children: [],
      // });
      event.target.parentNode.click();
    },
    dragstart(event) {
      console.log(event);
    },
    dragend(event) {
      var id = event.target.getElementsByClassName("primary--text")[0].id;
      if (id !== "") {
        console.log(id);
      } else {
        console.log(event.target);
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/styles/Category.css";
</style>
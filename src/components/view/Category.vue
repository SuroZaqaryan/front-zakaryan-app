<template>
  <div class="category">
    <div>
      <i class="fa-solid fa-chevron-down"></i>
    </div>
    <v-layout wrap>
      <v-flex mb-5 xs12>
        <v-card>
          <v-card-text>
            <v-draggable-treeview
              v-model="items"
              group="categories"
              :empty-insert-threshhold="500"
              @drop.native="dragend($event)"
            >
              <!-- <template v-slot:prepend="{ item }">
                <div
                  @click="test"
                  style="background: red; width: 20px; height: 20px"
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </div>
              </template> -->

              <template v-slot:prepend="{ item }">
                <v-icon>{{ item.icon }}</v-icon>
              </template>

              <template v-slot:label="{ item }">
                <span :id="item.id" class="primary--text">{{ item.name }}</span>
              </template>

              <template v-slot:append="{ item }">

                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      small
                      class="mr-2"
                      @click.stop="ajouter(item)"
                      v-if="!item.link"
                    >
                      mdi-folder
                    </v-icon>
                  </template>
                  <span>Ajouter un menu</span>
                </v-tooltip>

                <v-tooltip bottom>

                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-on="on"
                      small
                      class="mr-2"
                      @click.stop="ajouterSousMenu(item, $event)"
                      v-if="!item.link"
                    >
                      mdi-plus
                    </v-icon>
                  </template>

                  <span>Ajouter un sous-menu</span>
                </v-tooltip>
                <Controls />
                <!-- <v-icon small class="mr-2" @click.stop=""> edit </v-icon>
                <v-icon small class="mr-2" @click.stop=""> mdi-delete </v-icon> -->
              </template>
            </v-draggable-treeview>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Controls from "./Controls.vue";

export default {
  name: "TestComp",
  data: () => ({
    items: [
      {
        id: 1,
        name: "Central League",
        icon: "fa-solid fa-chevron-down",
        link: "",
        children: [
          { id: 101, name: "Dragons", icon: "", link: "test" },
          { id: 102, name: "Tigers", icon: "", link: "test" },
        ],
      },
      {
        id: 2,
        name: "Pacific League",
        icon: "fa-solid fa-chevron-down",
        link: "",
        children: [
          {
            id: 7,
            name: "Lions",
            link: "",
          },
        ],
      },
    ],
    hoverParent: false,
    hoverChild: false,
    i: 0,
  }),

  components: {
    Controls,
  },

  computed: {
    clonedItems: function () {
      return JSON.parse(JSON.stringify(this.items));
    },
  },

  watch: {
    clonedItems: {
      deep: true,
      handler(newVal, oldVal) {
        console.log(newVal);
        console.log(oldVal);
      },
    },
  },
  methods: {
    test() {
      console.log(1);
    },
    ajouterMenu() {
      this.items.push({
        id: 3,
        name: "Test",
        icon: "fa-solid fa-chevron-down",
        link: "",
        children: [],
      });
    },
    ajouterSousMenu(item, event) {
      item.children.push({
        id: 301,
        name: "Test",
        icon: "",
        link: "test",
        children: [],
      });
      event.target.parentNode.click();
      console.log(event.target.parentNode.parentNode);
      console.log(event.target.parentNode);
      console.log(event.target.parentNode.nextSibling);
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
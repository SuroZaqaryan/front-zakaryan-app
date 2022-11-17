<template>
  <v-row id="modal" justify="center">
    <v-dialog v-model="showModal" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h6">Создать категорию</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="Имя"
                  v-model="category.name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="pa-0">
                <v-text-field
                  label="Субтитры"
                  v-model="category.subName"
                ></v-text-field>
              </v-col>

              <v-col cols="12" class="pa-0">
                <v-autocomplete
                  :items="category.colors"
                  label="Цвета"
                  multiple
                ></v-autocomplete>
              </v-col>

              <v-col cols="12" class="pa-0">
                <v-sheet>
                  <v-switch
                    v-model="showChildrensContent"
                    label="Включить подкотегорию"
                    inset
                  ></v-switch>
                </v-sheet>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions class="px-9 pb-4">
          <v-spacer></v-spacer>
          <v-btn @click="closeModal" color="red" class="px-5" dark>
            Закрыть
          </v-btn>
          <v-btn
            @click="createCategory(category, $uuid.v4())"
            color="blue"
            class="px-5"
            dark
          >
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["showModal"]),

  data() {
    return {
      showChildrensContent: false,
      v1: this.$uuid.v1(),
      category: {
        name: "",
        subName: "",
        icon: "fa-solid fa-chevron-down",
        type: "category",
        edit: true,
        colors: ["blue", "orange", "yellow", "pink"],
        children: [],
      },
    };
  },

  methods: {
    closeModal() {
      this.$store.dispatch("closeModal");
    },

    createCategory(category, newId) {
      this.$store.dispatch("createCategory", { category, newId });
    },
  },
};
</script>
<template>
  <div id="document">
    <div class="document__title">
      <div>
        <h3>Документы</h3>
      </div>

      <div class="document__create">
        <button class="bookmark">
          <img
            width="14"
            height="14"
            src="../assets/bookmark.svg"
            alt="bookmark"
          />
        </button>

        <button @click="createCategory">
          <img src="../assets/add.svg" width="17" height="17" alt="add" />
          <b>Новый тип</b>
        </button>

        <button>
          <img src="../assets/add.svg" width="17" height="17" alt="add" />
          <b>Новый документ</b>
        </button>
      </div>
    </div>
    <Modal />
    <Search />
    <Category />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Category from "./view/Category.vue";
import Search from "./view/Search.vue";
import Modal from "./view/Modal.vue";

export default {
  name: "Document",

  components: {
    Category,
    Search,
    Modal,
  },

  computed: mapGetters(["items", "showModal"]),

  methods: {
    createCategory() {
      this.$store.dispatch("openModal");
    },
  },
};
</script>

<style scoped>
@import "../assets/styles/Document.css";
</style>
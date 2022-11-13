<template>
  <div id="document">
    <div class="document__title">
      <div>
        <h3>Документы</h3>
      </div>

      <div class="document__create">
        <button class="bookmark">
          <img width="14" height="14" src="../assets/bookmark.svg" alt="bookmark" />
        </button>

        <button>
          <img src="../assets/add.svg" width="17" height="17" alt="add" />
          <b>Новый тип</b>
        </button>

        <button>
          <img src="../assets/add.svg" width="17" height="17" alt="add" />
          <b>Новый документ</b>
        </button>
      </div>
    </div>

    <Search />
    
    <Category v-model="categories" />
  </div>
</template>

<script>
import Category from "./view/Category.vue";
import Search from "./view/Search.vue"

export default {
  name: "Document",

  components: {
    Category,
    Search,
  },

  computed: {
    categories: {
      get() {
        return this.$store.getters.categories
      },
      set(value) {
        this.$store.dispatch("updateElements", value);
      }
    }
  }

};
</script>

<style scoped>
@import "../assets/styles/Document.css";
</style>
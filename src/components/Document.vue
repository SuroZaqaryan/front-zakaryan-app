<template>
  <div id="document">
    <div class="document__title">
      <div><h3>Документы</h3></div>

      <div class="document__create">
        <button class="bookmark">
          <img
            width="16"
            height="16"
            src="../assets/bookmark.svg"
            alt="bookmark"
          />
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

    <div class="document__search">
      <div>
        <img
          class="search"
          src="../assets/search.svg"
          width="17"
          height="17"
          alt="search"
        />
        <input type="text" name="" id="" />
        <img
          class="remove"
          src="../assets/remove.svg"
          width="21"
          height="21"
          alt="remove"
        />
      </div>
    </div>

    <div class="document__category">
      <Category
        v-for="(category, idx) in categories"
        :category="category"
        :index="idx"
        :key="idx"
        :open="category.open"
        @toggleOpen="toggleOpen"
      />
    </div>
  </div>
</template>

<script>
import Category from "./Category.vue";

export default {
  name: "Document",

  components: {
    Category,
  },

  methods: {
    toggleOpen(currentIdx) {
      this.categories.forEach((item, index) => {
        currentIdx === index ? (item.open = true) : (item.open = false);
      });
    },
  },

  data() {
    return {
      categories: [
        {
          title: "Обязательное поле для всех",
          open: false,
          elems: [{ title: "Passport" }, { title: "IIn" }],
        },
        {
          title: "Обязательное поле для всех",
          open: false,
          elems: [{ title: "Passport" }, { title: "IIn" }],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import "../assets/styles/Document.css";
</style>
<template>
  <div
    @click="$emit('toggleOpen', index)"
    class="category__title"
    :class="open ? 'category open' : 'category'"
  >
    <div>
      <button>
        <img src="../assets/arrow.svg" width="12" height="15" />
      </button>
      <h3>{{ category.title }}</h3>
    </div>

    <div class="category__controls">
      <button>
        <img src="../assets/edit.svg" width="15" height="15" alt="edit">
      </button>
      <button>
        <img src="../assets/delete.svg" width="21" height="21" alt="remove">
      </button>
      <button class="draggable">
        <img src="../assets/draggable.svg" width="15" height="15" alt="draggable">
      </button>
    </div>
    <!-- <h3>{{ category.open }}</h3> -->
  </div>
</template>
  
  <script>
export default {
  name: "Category",
  props: ["category", "index", "open"],
};
</script>

<style scoped>
@import "../assets/styles/Category.css";
</style>
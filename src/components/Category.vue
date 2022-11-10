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
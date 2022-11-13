<template>
  <div class="category__controls">
    <button @click="edit(item, type, itemChild)">
      <img src="@/assets/edit.svg" width="15" height="15" alt="edit">
    </button>
    <button @click="deleteCategory(item, type, itemChild)">
      <img src="@/assets/delete.svg" width="21" height="21" alt="remove">
    </button>
    <button draggable="true" @dragstart="dragStart($event, itemChild)" class="draggable">
      <img :class="{ handle }" src="@/assets/draggable.svg" width="15" height="15" alt="draggable">
    </button>
  </div>
</template>

<script>
export default {
  props: ["item", "type", "itemChild", "handle"],

  methods: {
    edit(item, type, itemChild) {
      this.$store.dispatch("editCategory", { item, type, itemChild })
    },
    deleteCategory(item, type, itemChild) {
      this.$store.dispatch("deleteCategory", { item, type, itemChild })
    },
    dragStart($event, elem) {
      this.$emit('drag-start', $event, elem)
    }
  }
};
</script>
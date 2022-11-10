<template>
  <div class="document__search">
    <div>
      <img class="search" src="@/assets/search.svg" width="17" height="17" alt="search" />
      <input type="text" />
      <img class="remove" src="@/assets/remove.svg" width="21" height="21" alt="remove" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Search",

  computed: mapGetters(["searchValue"])
};
</script>

<style scoped>
@import "../../assets/styles/Search.css";
</style>
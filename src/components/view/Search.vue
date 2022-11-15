<template>
  <div class="document__search">
    <div>
      <img class="search" src="@/assets/search.svg" width="17" height="17" alt="search"/>

      <input type="text" v-model="search" ref="search"/>

      <img v-if="search.length" @click="remove"
           class="remove" src="@/assets/remove.svg" width="21" height="21" alt="remove"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  computed: {
    search: {
      get() {
        return this.$store.getters.search
      },
      set(value) {
        this.$store.dispatch('updateSearch', value)
      }
    }
  },

  methods: {
    remove() {
      this.search = ''
      this.$refs.search.value = ''
    },
  }
};
</script>

<style scoped>
@import "../../assets/styles/Search.css";
</style>
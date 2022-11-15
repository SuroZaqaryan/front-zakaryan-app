<template>
  <v-app>
    <Document />
  </v-app>
</template>

<script>
export default {
  components: {
    Document: () => import("./components/Document.vue"),
  },
};
</script>

<style>
* {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #c2c5cd;
}

.list-group-item i {
  cursor: pointer;
}
</style>

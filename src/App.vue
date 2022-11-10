<template>
  <div id="app">
    <Document />
  </div>
</template>

<script>
import Document from './components/Document.vue'

export default {
  name: 'App',
  components: {
    Document
  }
}
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

#app {
  margin: 0 2rem;
}
</style>

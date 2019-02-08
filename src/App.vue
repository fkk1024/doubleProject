<template>
  <div id="app">
    <div v-show="false">
      <a href="./content2.html" id="MainAEl">content2.html</a>
    </div>
    <div v-show="false">
      <a href="./content.html">content.html</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeMount() {
      window.location.href = './content2.html'
    },
    mounted() {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

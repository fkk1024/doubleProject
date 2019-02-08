<template>
  <section>
    你好世界，第一个页面content
    <button @click="$router.push({path:'testVue'})">testVue</button>
  </section>
</template>

<script>
  export default {
    name: "",
    props: [],
    data() {
      return {}
    },
    methods: {},
    mounted() {
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <section>
    testVue
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et fuga incidunt natus nulla repudiandae sunt totam
    voluptas voluptate! Accusamus aut deleniti doloremque error magnam nesciunt quisquam quo ratione sapiente voluptas?
    <button @click="$router.push({path:'helloworld'})">helloworld</button>
    <div>
      <a href="./content2.html">content2.html</a>
    </div>
    <div>
      <a href="./content.html">content.html</a>
    </div>
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

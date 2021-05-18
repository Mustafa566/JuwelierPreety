<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  created() {
    this.$store.commit('user')
  }
}
</script>

<style>
html, body {
  background-color: #f7f7f7;
}

#app {
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>

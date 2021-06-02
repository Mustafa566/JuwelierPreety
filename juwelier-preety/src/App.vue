<template>
  <div id="app">
    <!-- <b-alert variant="success" show class="succesAlert">Success Alert</b-alert>
    <b-alert variant="danger" show class="warningAlert">Success Alert</b-alert> -->
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
    //this.$store.commit('user')
  }
}
</script>

<style>
html, body {
  background-color: #f7f7f7;
}

.newDiv {
    background-color: #E4E4E4;
    width: 10px;
}

.newDiv2 {
    background-color: #E4E4E4;
    height: 10px;
}

.spacer, .secondSpacer {
  background-color: #E4E4E4;
}

#app {
  overflow-x: hidden;
  overflow-y: hidden;
}

.successAlert {
  position: absolute;
  width: 100%;
  z-index: 1;
}

.warningAlert {
  position: absolute;
  width: 100%;
  z-index: 1;
}
</style>

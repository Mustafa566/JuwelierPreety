<template>
<div>
  <Login v-if="openLogin"></Login>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="navColor" href="#">Over ons</b-nav-item>
        <b-nav-item class="navColor" href="#" disabled>Contact</b-nav-item>
        <b-nav-item class="navColor" href="#" disabled>Klanten service</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="isModalVisible()">Inloggen</b-nav-item>
        <div>
          <img>
          <img>
          <img>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <!-- Image logo -->
  <b-row class="containerColor">
    <img class="logo" src="@/assets/logo.png">
  </b-row>

  <b-row class="spacer"><br></b-row>
</div>
</template>

<script>
import Login from '../components/Login.vue'

export default {
  name: 'Header',
  components: {
    Login
  },
  data() {
    return {
      dialog: false,
      openLogin: false
    }
  },
  methods: {
    isModalVisible: function() {
      this.dialog =! this.dialog
      this.openLogin = true
      if(this.isModalVisible){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (max-width: 991px) {
  .navbar {
    height: 60px !important;
    background-color: red;
  }

  #nav-collapse {
    background-color: white;
  }
}

.navbar {
  height: 30px !important;
}

.nav-link, .navColor {
  color: #707070 !important;
  cursor: pointer;
}

.containerColor {
  background-color: #f7f7f7;
}

.logo {
  margin: 0 auto;
  width: 250px;
  height: 100px;
}

.spacer {
  height: 5px;
}
</style>

<template>
<div>
  <Login v-if="openLogin" :close="openLogin"></Login>
  <Contact v-if="openContact"></Contact>
  <CustomerService v-if="openService"></CustomerService>
  <ShoppingCartDetail v-if="openShoppingCart"></ShoppingCartDetail>
  <FavoritesPopUp v-if="openFavoritesPopUp"></FavoritesPopUp>
  <UserForm v-if="userData === false && isLoggedIn === true"></UserForm>
  <b-navbar toggleable="lg">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="navColor">
          <router-link to="AboutUs" class="navColor">Over ons</router-link>
        </b-nav-item>
        <b-nav-item class="navColor" @click="contact()">Contact</b-nav-item>
        <b-nav-item class="navColor" @click="service()">Klanten service</b-nav-item>
        <b-nav-item class="navColor" @click="shoppingCart()">ShoppingCart</b-nav-item>
        <b-nav-item class="navColor" @click="favorites()">Favorites</b-nav-item>
        <b><b-nav-item class="navColor">{{this.name}}</b-nav-item></b>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" @click="login()" v-if="!this.$store.state.isLoggedIn">Inloggen</b-nav-item>
        <b-nav-item href="#" @click="logout()" v-if="this.$store.state.isLoggedIn">Log uit</b-nav-item>
        <div>
          <img src="@/assets/headerIcons/Profile.png" class="profileIcon" @click="toProfile">
          <img>
          <img>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  <!-- Image logo -->
  <b-row class="containerColor">
    <router-link to="/" class="logo">
      <img class="logo" src="@/assets/logo.png">
    </router-link>
  </b-row>

  <b-row class="spacer"><br></b-row>
</div>
</template>

<script>
import Login from '../components/Login.vue'
import Contact from '../components/Contact.vue'
import CustomerService from '../components/CustomerService.vue'
import ShoppingCartDetail from '../components/ShoppingCartDetail.vue'
import FavoritesPopUp from '../components/FavoritesPopUp.vue'
import UserForm from '../components/UserForm.vue'
import firebase from 'firebase';
import store from '../store.js';

export default {
  name: 'Header',
  components: {
    Login,
    Contact,
    CustomerService,
    ShoppingCartDetail,
    FavoritesPopUp,
    UserForm
  },
  data() {
    return {
      dialog: false,
      openLogin: false,
      openContact: false,
      openService: false,
      openShoppingCart: false,
      openFavoritesPopUp: false,
      userData: store.state.userData,
      name: localStorage.getItem('User')
    }
  },
  mounted() {
    async function getUsers() {
      await store.commit('getUserData');
    }
    async function users() {
      await store.commit('user');
    }
    getUsers();
    users();
  },
  methods: {
    toProfile() {
      this.$router.push('UserInformation');
    },
    checkScroll() {
      if(this.dialog == true){
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    },
    logout() {
      firebase.auth().signOut().then(() => {
          localStorage.setItem('isLoggedIn', false);
          location.reload()
          this.$router.push('/')
      })
    },
    login() {
      this.dialog =! this.dialog
      this.checkScroll();
      this.openLogin = true;
    },
    contact() {
      this.dialog =! this.dialog
      this.checkScroll();
      this.openContact = true;
    },
    service() {
      this.dialog =! this.dialog
      this.checkScroll();
      this.openService = true;
    },
    shoppingCart() {
      this.dialog =! this.dialog
      this.checkScroll();
      this.openShoppingCart = true;
    },
    favorites() {
      this.dialog =! this.dialog
      this.checkScroll();
      this.openFavoritesPopUp = true;
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

a:hover {
  text-decoration: none;
}

.navbar {
  height: 30px !important;
}

.nav-link, .navColor {
  color: #707070 !important;
  cursor: pointer;
}

.profileIcon {
  width: 20px;
  margin-top: 10px;
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

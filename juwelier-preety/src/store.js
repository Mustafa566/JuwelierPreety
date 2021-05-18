import Vue from 'vue'
import Vuex from 'vuex'
// import { db } from './database.js';
import firebase from 'firebase';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 451510,
    getUser: firebase.auth().currentUser,
    isLoggedIn: null
  },
  mutations: {
    increment (state) {
      state.count++
    },
    user(state) {
      firebase.auth().onAuthStateChanged(currentUser => {
        if(currentUser) {
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
        }
        console.log(currentUser)
      });
    }
  }
})
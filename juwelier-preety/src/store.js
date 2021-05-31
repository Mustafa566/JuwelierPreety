import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';
import {db} from './database';
Vue.use(Vuex)

const getUserLocalStorage = localStorage.getItem('User');
export default new Vuex.Store({
  state: {
    getUser: '',
    isLoggedIn: false,
    userData: null,
    getUserDataDoc: {},
    getUserLocalStorage: localStorage.getItem('User')
  },
  mutations: {
    async user(state) {
      await firebase.auth().onAuthStateChanged(currentUser => {
        if (currentUser) {
          state.getUser = currentUser.email;
          localStorage.setItem('User', state.getUser);
          state.isLoggedIn = true;
          console.log('Current user: ', state.getUser);
          console.log('Is logged in: ', state.isLoggedIn);
        } else {
          state.isLoggedIn = false;
          console.log('Is logged in: ', state.isLoggedIn);
        }
      })
    },
    findUser() {
      var user = firebase.auth().currentUser.email;
      if (user) {
        // User is signed in.
        console.log('User: ', user);
      } else {
        // No user is signed in.
        console.log('no user');
      }
    },
    async getUserData(state) {
      await state.getUser == firebase.auth().currentUser;
      db.collection('Users').doc(`${getUserLocalStorage}`/*'musti@gmail.com'*/).get().then(snapshot => {
        const document = snapshot.data()
        // do something with document
        if(snapshot.exists == true) {
          state.userData = true;
          state.getUserDataDoc = document;
          //console.log('DOCUMENT', state.getUserDataDoc);
        } else {
          console.log('User is not in database');
          state.userData = false;
        }
      })
    }
  }
})
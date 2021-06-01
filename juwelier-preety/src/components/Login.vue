<template>
    <div class="main">
        <div class="loginSection" v-if="openLogin">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <!-- Login -->
            <div class="authBody">
                <h3 class="authText mb-4">Inloggen</h3>
                <b-form-input type="email" class="authInput" v-model="login.email" placeholder="Email..."></b-form-input>
                <b-row class="mt-3">
                    <b-col>
                        <b-form-input type="password" class="authInput passInput" v-model="login.password" placeholder="Wachtwoord..." @keyup.enter="userLogin"></b-form-input>
                    </b-col>
                    <b-col class="arrowDiv pointer" cols="2" @click="userLogin()">
                        <span class="helper"></span>
                        <img src="@/assets/arrow.png" class="arrowImg">
                    </b-col>
                </b-row>
                <b-row class="socialMediaLogin">
                    <b-col class="logoLogin pointer" @click="googleSignIn">
                        <img src="@/assets/LoginIcons/google.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer" @click="facebookSignIn">
                        <img src="@/assets/LoginIcons/facebook.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin disable">
                        <img src="@/assets/LoginIcons/twitter.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin disable">
                        <img src="@/assets/LoginIcons/apple.png" class="imgLogo">
                    </b-col>
                </b-row>
            <h6 class="pointer" @click="openForgotPassword()">Wachtwoord vergeten?</h6>
                <h3 class="newCustomerText">Nieuwe Klant</h3>
                <div class="buttons pointer" @click="openRegister = true; openLogin = false">
                    <h4>Registreren</h4>
                </div>
            </div>
        </div>
    
        <!-- Register form -->
        <div class="registerSection" v-if="openRegister">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <div class="authBody">
                <h3 class="authText mb-4">Registreren</h3>
                <b-form-input class="authInput" v-model="form.firstName" placeholder="Voornaam..."></b-form-input>
                <b-form-input class="authInput mt-3" v-model="form.lastName" placeholder="Achternaam..."></b-form-input>
                <b-form-input class="authInput mt-3" v-model="form.email" placeholder="E-mailadres..."></b-form-input>
                <b-form-input type="password" class="authInput mt-3" v-model="form.password" placeholder="Wachtwoord..."></b-form-input>
                <b-form-select class="mt-3" v-model="form.selected" :options="options"></b-form-select>
            <hr class="selectGenderHr">
                <div class="buttons pointer" @click="register()">
                    <h4>Registreren</h4>
                </div>
                <h3 class="newCustomerText mt-4">Bent u al lid ?</h3>
                <div class="buttons pointer" @click="openRegister = false; openLogin = true">
                    <h4>Inloggen</h4>
                </div>
            </div>
        </div>

        <!-- Forgot password -->
        <div class="forgotPasswordSection" v-if="openForgotPass">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <div class="authBody">
                <h3 class="authText mb-4">Wachtwoord vergeten</h3>
                <b-row class="mt-3">
                    <b-col>
                        <b-form-input class="authInput passInput" placeholder="Emailadres..." v-model="forgotPassInput"></b-form-input>
                    </b-col>
                    <b-col class="arrowDiv pointer" cols="2" @click="forgotPassword">
                        <span class="helper"></span>
                        <img src="@/assets/arrow.png" class="arrowImg">
                    </b-col>
                </b-row>
                <h3 class="newCustomerText mt-4">Bent u al lid ?</h3>
                <div class="buttons pointer" @click="openForgotPass = false; openLogin = true">
                    <h4>Inloggen</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../database.js';
import firebase from 'firebase';
//import store from '../store.js';

export default {
    props: ['close'],
    data() {
        return {
            closeLogin: 'sdsfs',
            openLogin: true,
            openRegister: false,
            openForgotPass: false,
            options: [
                { value: 'Man', text: 'Man' },
                { value: 'Vrouw', text: 'Vrouw' },
                { value: 'Wil het niet zeggen', text: 'Wil het niet zeggen' },
            ],
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                selected: 'Man',
            },
            login: {
                email: '',
                password: ''
            },
            forgotPassInput: ''
        }
    },
    methods: {
        userLogin() {
            firebase.auth().signInWithEmailAndPassword(this.login.email, this.login.password)
            .then(() => {
                localStorage.setItem('isLoggedIn', true);
                location.reload()
            },
            err => {
                alert(err.message);
            })
        },
        async addUserData() {
            const element = Math.floor(10000 + Math.random() * 100000);
            if (this.form.firstName != '' && this.form.lastName != '' && this.form.email != '' && this.form.password != '') {
                await db.collection('Users').doc(`${firebase.auth().currentUser.email}`).set({
                    customerId: element,
                    firstName: this.form.firstName,
                    lastName: this.form.lastName,
                    email: this.form.email,
                    gender: this.form.selected,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                alert(element);
            } else {
                alert('Input empty')
            }
        },
        async register() {
            await firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(() => {
                this.addUserData();
                localStorage.setItem('isLoggedIn', true);
                setTimeout(function () { 
                    location.reload(); 
                }, 2000);
            },
            err => {  
                alert(err.message);
            })
        },
        forgotPassword() {
            firebase.auth().sendPasswordResetEmail(this.forgotPassInput).then(() => {
                alert('Email send');
                // Email sent.
            }).catch((error) => {
                // An error happened.
                alert(error);
            });
        },
        googleSignIn() {
            const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
                location.reload()
            }).catch(err => {
                console.log(err)
            })
        },
        facebookSignIn() {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
                location.reload()
            }).catch(err => {
                console.log(err)
            })
        },
        openForgotPassword() {
            this.openLogin = false
            this.openRegister = false;
            this.openForgotPass = true;
        }
    }
}
</script>

<style scoped>
.col {
    padding-right: 0px;
    padding-left: 0px;
}

.pointer {
    cursor: pointer;
}

.disable {
    cursor: not-allowed;
}

.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
    overflow: hidden;
}

.header {
    margin: 0 auto;
    margin-top: 120px;
    width: 500px;
    height: 100%;
    background-color: #f7f7f7;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    color: #707070;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}

p {
    margin: 0;
}

.closeBtn {
    float: right;
    margin-right: 30px;
    cursor: pointer;
}

.authBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 100%;
    background-color: #f7f7f7;
    border: 5px solid white;
    color: #707070;
}

.authText {
    border-bottom: 5px solid #EEEEEE;
    color: #707070;
}

.authInput {
    padding: 30px 20px;
    padding-right: 0px;
}

.passInput {
    margin-left: 15px;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #ced4da;
}

.arrowDiv {
    background-color: #E5E5E5;
    margin-right: 15px;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.arrowImg {
    vertical-align: middle;
}

.logoLogin {
    background-color: #E5E5E5;
    margin: 10px 15px;
    padding: 5px;
    text-align: center;
}

.imgLogo {
    width: 24px;
    height: 24px;
}

.newCustomerText {
    border-bottom: 5px solid #EEEEEE;
}

.buttons {
    background-color: #EEEEEE;
    opacity: 0.5;
    text-align: center;
    padding: 10px 10px;
}

/* Register css */
.selectGenderHr {
    width: 100%;
    height: 5px;
    background-color: #EEEEEE;
    border: none;
}
</style>
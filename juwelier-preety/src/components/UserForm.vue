<template>
    <div class="main">
        <div class="header">
            <b-row>
                <b-col>
                    <p>Gebruikers formulier (verplicht)</p>
                </b-col>
            </b-row>
        </div>
        <div class="contactBody">
            <h3 class="contactText mb-4">Formulier</h3>
            <b-form-input class="contactInput" v-model="firstName" placeholder="Voornaam..."></b-form-input>
            <b-form-input class="contactInput mt-3" v-model="lastName" placeholder="Achternaam..."></b-form-input>
            <b-form-input class="contactInput mt-3" v-model="email" placeholder="E-mailadres..."></b-form-input>
            <b-form-select class="mt-3" v-model="selected" :options="options"></b-form-select>
        <hr class="hrLine">
            <div class="buttons pointer" @click="addUserData">
                <h4>Versturen</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../database.js';
//import firebase from 'firebase';

export default {
    data() {
        return {
            options: [
                { value: 'Man', text: 'Man' },
                { value: 'Vrouw', text: 'Vrouw' },
                { value: 'Wil het niet zeggen', text: 'Wil het niet zeggen' },
            ],
            firstName: '',
            lastName: '',
            email: '',
            selected: 'Man',
        }
    },
    methods: {
        async addUserData() {
            //var user = firebase.auth().currentUser.email;
            await db.collection('Users').doc(`${this.email}`).set({
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                selected: this.selected,
                isValid: true
            })
            location.reload();
        }
    },
    created() {
        // var docRef = db.collection("Users").doc(`${firebase.auth().currentUser.email}`);
        // docRef.get().then((doc) => {
        //     if (doc.exists) {
        //         console.log("Document data:", doc.data());
        //     } else {
        //         // doc.data() will be undefined in this case f
        //         console.log("No such document!");
        //     }
        // }).catch((error) => {
        //     console.log("Error getting document:", error);
        // });
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
    height: 50px;
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

.contactBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 470px;
    background-color: #f7f7f7;
    border: 5px solid white;
    color: #707070;
}

.contactText {
    border-bottom: 5px solid #EEEEEE;
    color: #707070;
}

.contactInput {
    padding: 30px 20px;
    padding-right: 0px;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #ced4da;
}

.buttons {
    background-color: #EEEEEE;
    opacity: 0.5;
    text-align: center;
    padding: 10px 10px;
}

.hrLine {
    width: 100%;
    height: 5px;
    background-color: #EEEEEE;
    border: none;
}
</style>
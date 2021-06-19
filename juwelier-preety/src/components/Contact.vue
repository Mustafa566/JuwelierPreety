<template>
    <div class="main">
        <div class="header">
            <b-row>
                <b-col>
                    <p>Contact <span class="closeBtn" @click="remove">X</span></p>
                </b-col>
            </b-row>
        </div>
        <div class="contactBody">
            <h3 class="contactText mb-4">Formulier</h3>
            <b-form-input class="contactInput" placeholder="Voornaam..." v-model="form.firstName"></b-form-input>
            <b-form-input class="contactInput mt-3" placeholder="Achternaam..." v-model="form.lastName"></b-form-input>
            <b-form-input class="contactInput mt-3" placeholder="E-mailadres..." v-model="form.email"></b-form-input>
        <hr class="hrLine">
            <b-form-textarea class="mt-3" placeholder="Bericht..." rows="4" v-model="form.message"></b-form-textarea>
        <hr class="hrLine">
            <div class="buttons pointer" @click="send">
                <h4>Versturen</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../database.js';
//import store from '../store.js';

export default {
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            }
        }
    },
    methods: {
        async send() {
            await db.collection('ContactForms').add({
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                email: this.form.email,
                message: this.form.message,
            })
            location.reload();
        },
        remove() {
            location.reload()
            // const getMain = document.getElementById('main');
            // getMain.classList.add("remove");
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

.remove {
    display: none;
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

.closeBtn {
    float: right;
    margin-right: 30px;
    cursor: pointer;
}

.contactBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 550px;
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
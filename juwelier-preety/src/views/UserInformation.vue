<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Gebruikers account</h4>
        </div>
    <div class="secondSpacer"></div>
        <b-row>
            <b-col lg="8" class="firstCol">
                <div class="firstDiv">
                <h2 class="mainText">Gebruikers informatie</h2>
                <hr class="hr">
                    <b-row class="firstColumn">
                        <b-col>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Voornaam" 
                                    v-model="getUserDataDoc.firstName" 
                                    :value="getUserDataDoc.firstName" 
                                    :disabled="disable"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Geboorte datum" 
                                    v-model="getUserDataDoc.birth" 
                                    :value="getUserDataDoc.birth" 
                                    :disabled="disable"
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Achternaam" 
                                    v-model="getUserDataDoc.lastName" 
                                    :value="getUserDataDoc.lastName" 
                                    :disabled="disable"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Klant Nummer" 
                                    :value="getUserDataDoc.customerNumber" 
                                    disabled>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Email" 
                                    v-model="getUserDataDoc.email" 
                                    :value="getUserDataDoc.email" 
                                    :disabled="disable"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-select 
                                    v-model="getUserDataDoc.gender"
                                    :options="options"
                                    :disabled="disable">
                                    </b-form-select>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Telefoon" 
                                    v-model="getUserDataDoc.phoneNumber" 
                                    :value="getUserDataDoc.phoneNumber" 
                                    :disabled="disable"
                                    required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput" v-if="openUpdate">
                                    <b-button class="btn-success" @click="update" :disabled="disable">Update</b-button>
                                    <b-button class="ml-2 btn-danger" @click="openUpdate = false; disable = true" :disabled="disable">Cancel</b-button>
                                </b-col>
                            </b-row> 
                        </b-col>
                        <b-col cols="3" class="userCol">
                            <div class="userDiv">
                                <h4 class="userText">Gebruikers opties</h4>
                                <div class="buttonOptions cursor" @click="openInput">Gegevens aanpassen</div>
                                <div class="buttonOptions">Nieuwe gebruiker</div>
                                <div class="buttonOptions cursor">Verwijder gebruiker</div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            <div class="newDiv2"></div>
                <div class="firstDiv">
                <h2 class="mainText">Bezorg informatie</h2>
                <hr class="hr">
                    <b-row class="firstColumn">
                        <b-col>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Land" 
                                    v-model="getUserDelivery.land" 
                                    :value="getUserDelivery.land" 
                                    :disabled="disableDeliv"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Postcode" 
                                    v-model="getUserDelivery.zipcode" 
                                    :value="getUserDelivery.zipcode" 
                                    :disabled="disableDeliv"
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Straatnaam" 
                                    v-model="getUserDelivery.streetName" 
                                    :value="getUserDelivery.streetName" 
                                    :disabled="disableDeliv"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Soort Appartment, Flat ..." 
                                    v-model="getUserDelivery.houseSort" 
                                    :value="getUserDelivery.houseSort" 
                                    :disabled="disableDeliv"
                                    required> 
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Huis Nummer + Toevoeging" 
                                    v-model="getUserDelivery.houseNumberOrLetter" 
                                    :value="getUserDelivery.houseNumberOrLetter" 
                                    :disabled="disableDeliv"
                                    required> 
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="mb-2 rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Plaats" 
                                    v-model="getUserDelivery.province" 
                                    :value="getUserDelivery.province" 
                                    :disabled="disableDeliv"
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="mb-2" v-if="updateBtn">
                                    <b-button class="btn-success" @click="AddUserDelivery" :disabled="disableDeliv">Update</b-button>
                                    <b-button class="ml-2 btn-danger" @click="updateBtn = false; disableDeliv = true" :disabled="disableDeliv">Cancel</b-button>
                                </b-col>
                            </b-row> 
                        </b-col>
                        <b-col cols="3" class="userCol">
                            <div class="userDiv">
                                <h4 class="userText">Bezorg opties</h4>
                                <div class="buttonOptions cursor" @click="openDelivInput">Verander bezorg adres</div>
                                <div class="buttonOptions">Nieuw bezorg adres</div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            <div class="newDiv2"></div>
                <b-row class="orderNewRow">
                    <b-col>
                        <h2 class="orderHeadText">Recentelijke bestellingen</h2>
                        <b-row class="rowBlock">
                            <b-col class="colBlock">

                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <div class="newDiv"></div>
            <b-col class="cartCol" align-self="stretch">
                <div class="cartDiv">
                    <h1 class="cartH1">Huidige winkelwagen</h1>
                    <h3 class="cartH3">Artikelen</h3>
                    <b-row class="cartProducts pt-2 mb-2" v-for="index in 5" :key="index">
                        <b-col lg="7" class="cartColProducts mt-2">
                            <p>JUANBLUE HALS BAND</p>
                        </b-col>
                        <b-col lg="2" class="cartColProducts mt-2">
                            <input type="number" class="w-100 inputNumber">
                        </b-col>
                        <b-col lg="2" class="cartColProducts mt-2">
                            <p class="productPrice">€ 100</p>
                        </b-col>
                        <b-col lg="1" class="cartColProducts">
                            <p class="deleteBtn">X</p>
                        </b-col>
                    </b-row>
                    <h3 class="cartH3 w-50">Verzend kosten</h3>
                    <b-row>
                        <b-col class="col" lg="8">
                            <p class="deliveryCost">Verzend kosten</p>
                        </b-col>
                        <b-col class="col">
                            <p class="deliveryCost">Gratis</p>
                        </b-col>
                    </b-row>
                    <h3 class="cartH3 w-50">Te betalen totaal</h3>
                    <b-row>
                        <b-col class="col" lg="8">
                            <p class="deliveryCost">Totale kosten</p>
                        </b-col>
                        <b-col class="col">
                            <p class="deliveryCost">€ 100</p>
                        </b-col>
                    </b-row>
                </div>
            <div class="newDiv2"></div>
                <div class="favoriteList">
                    <h1 class="cartH1">Huidige verlanglijst</h1>
                    <h3 class="cartH3 w-50">Artikelen</h3>
                    <b-row class="cartProducts pt-2 mb-2" v-for="index in 5" :key="index">
                        <b-col lg="7" class="cartColProducts mt-2">
                            <p>JUANBLUE HALS BAND</p>
                        </b-col>
                        <b-col lg="2" class="cartColProducts mt-2">
                            <p class="productPrice">€ 100</p>
                        </b-col>
                        <b-col lg="1" class="cartColProducts mt-2">
                            <img src="@/assets/heart.png">
                        </b-col>
                        <b-col lg="1" class="cartColProducts mt-2">
                            <img src="@/assets/shopCart.png">
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        </b-row>
    <div class="secondSpacer"></div>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Footer from '../components/Footer.vue'
import store from '../store.js'
import { db } from '../database.js';
import firebase from 'firebase';

export default {
    components: {
        Header,
        Navbar,
        SocialMedia,
        Footer
    },
    data() {
        return {
            options: [
                { value: 'Man', text: 'Man' },
                { value: 'Vrouw', text: 'Vrouw' },
                { value: 'Wil het niet zeggen', text: 'Wil het niet zeggen' },
            ],
            getUser: store.state.getUserLocalStorage,
            getUserDataDoc: {
                firstName: '',
                lastName: '',
                email: '',
                gender: '',
                phoneNumber: '',
                birth: ''
            },
            getUserDelivery: {
                land: '',
                zipcode: '',
                streetName: '',
                houseSort: '',
                houseNumberOrLetter: '',
                province: ''
            },
            openUpdate: false,
            disable: true,
            disableDeliv: true,
            updateBtn: false
        }
    },
    methods: {
        openInput() {
            this.disable = false;
            this.openUpdate = true;
        },
        openDelivInput() {
            this.disableDeliv = false;
            this.updateBtn = true;
        },
        update() {
            db.collection('Users').doc(store.state.getUserLocalStorage).update({ 
                firstName: this.getUserDataDoc.firstName,
                lastName: this.getUserDataDoc.lastName,
                email: this.getUserDataDoc.email,
                gender: this.getUserDataDoc.gender,
                phoneNumber: this.getUserDataDoc.phoneNumber,
                birth: this.getUserDataDoc.birth,
                updateAt: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(() => {
                this.disable = true;
                this.openUpdate = false;
            })
        },
        AddUserDelivery() {
            db.collection('UserDelivery').doc(store.state.getUserLocalStorage).set({ 
                userId: store.state.getUserLocalStorage,
                land: this.getUserDelivery.land,
                zipcode: this.getUserDelivery.zipcode,
                streetName: this.getUserDelivery.streetName,
                houseSort: this.getUserDelivery.houseSort,
                houseNumberOrLetter: this.getUserDelivery.houseNumberOrLetter,
                province: this.getUserDelivery.province,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }).then(() => {
                this.disableDeliv = true;
                this.updateBtn = false;
            }) 
        },
        async queryUserData() {
            await db.collection("Users").where("email", "==", `${this.getUser}`).get().then((res) => {
                res.docs.forEach(element => {
                    var data = element.data();
                    this.getUserDataDoc = data;
                });
            })
        },
        async queryUserDeliveryData() {
            await db.collection("UserDelivery").where("userId", "==", `${this.getUser}`).get().then((res) => {
                res.docs.forEach(element => {
                    var data = element.data();
                    this.getUserDelivery = data;
                    console.log(data)
                });
            })
        }
    },
    mounted() {
        this.queryUserData();
        this.queryUserDeliveryData();
        // if(document.getElementById("question").value.length == 0){
        //     var element = document.getElementById("question");
        //     element.classList.add("emptyInputBorder");
        // }
    }
}
</script>

<style scoped>
.col, .col-lg-8 {
    padding: 0;
}

.cursor {
    cursor: pointer;
}

.spacer {
  background-color: #E4E4E4;
  width: 100%;
  height: 5px;
}

.secondSpacer {
  background-color: #E4E4E4;
  width: 100%;
  height: 10px;
}

.headText {
    color: #707070;
    background-color: #f7f7f7;
    border: 5px solid white;
}

.firstCol {
    background-color: #f7f7f7;
}

.firstDiv {
    background-color: #f7f7f7;
    border: 5px solid white;
    margin-left: 20px;
    padding: 0px 20px;
}

.mainText {
    margin-left: 15px;
    margin-bottom: 0px;
}

.firstColumn {
    background-color: #f7f7f7;
    margin-left: 0px;
}

.emptyInputBorder {
    border: 2px solid red;
}

.hr {
    border: none;
    width: 90%;
    height: 5px;
    background-color: white;
    margin-left: 15px;
    margin-top: 5px;
}

.rightInput {
    border-left: 6px solid white;
}

.userCol {
    border-left: 5px solid white;
    margin-left: 10px;
    height: 100%;
}

.userDiv {
    width: 90%;
}

.userText {
    border-bottom: 5px solid white;
    padding-bottom: 10px;
}

.buttonOptions {
    background-color: white;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    padding: 10px 10px;
}

.cartCol {
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    border: 2px solid #f7f7f7;
}

.cartDiv {
    border: 5px solid white;
    margin-right: 15px;
    padding-left: 0px;
}

.cartH1 {
    border-bottom: 5px solid white;
    width: 90%;
}

.cartH3 {
    border-bottom: 2px solid red;
    width: 30%;
}

.cartProducts {
    background-color: #F1F1F1;
    margin: 0px;
    margin-right: 10px;
}

.cartColProducts {
    padding-right: 0px;
}

.inputNumber {
    text-decoration: none;
    border: none;
    background-color: #E5E5E5;
}

.productPrice {
    background-color: #E5E5E5;
    text-align: center;
    padding: 5px 5px;
    border-radius: 5px;
    font-weight: bold;
}

.deleteBtn {
    font-weight: bolder;
    font-size: 25px;
    color: #DBDBDB;
}

.deliveryCost {
    font-size: 20px;
    margin-left: 20px;
}

.orderNewRow {
    border: 5px solid white;
    margin: 0;
    margin-left: 20px;
    padding: 0;
}

.orderHeadText {
    margin: 10px 20px;
    border-bottom: 5px solid white;
    width: 90%;
}

.rowBlock {
    margin: 0px 20px;
    margin-bottom: 10px;
    overflow-x: auto;
    max-width: 100%;
}

.colBlock {
    width: 200px;
    height: 540px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: #f7f7f7;
}

.titleDiv[data-v-638f3be0] {
    display: none;
}

.favoriteList {
    margin-right: 15px;
    padding: 10px 10px;
    border: 5px solid white;
}
</style>
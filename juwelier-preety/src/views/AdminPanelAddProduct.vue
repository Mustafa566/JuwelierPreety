<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Nieuw product</h4>
        </div>
    <div class="secondSpacer"></div>
        <b-row>
            <b-col lg="8" class="firstCol">
                <div class="firstDiv">
                <h2 class="mainText">Product informatie</h2>
                <hr class="hr">
                    <b-row class="firstColumn">
                        <b-col>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product naam" 
                                    v-model="form.productName" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product merk" 
                                    v-model="form.productBrand" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-textarea 
                                    rows="5" 
                                    type="text" 
                                    placeholder="Product beschrijving..." 
                                    v-model="form.productDescription" 
                                    required>
                                    </b-textarea>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-textarea 
                                    rows="5" 
                                    type="text" 
                                    placeholder="Product Kenmerk" 
                                    v-model="form.productCharacteristic" 
                                    required>
                                    </b-textarea>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product korting" 
                                    v-model="form.productSale" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product Kleur" 
                                    v-model="form.productColor" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product korting actief" 
                                    v-model="form.productSaleDate" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product Prijs" 
                                    v-model="form.productPrice" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Nieuwe collectie" 
                                    v-model="form.newCollection" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product categorie" 
                                    v-model="form.productCategorie" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Live Voorbeeld" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Product materiaal" 
                                    v-model="form.productMaterial" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Exclusief" 
                                    v-model="form.exclusivePrice" 
                                    required>
                                    </b-form-input>
                                </b-col>
                                <b-col lg="6" class="mb-2 rightInput">
                                    <b-form-input 
                                    type="text" 
                                    placeholder="Geslacht doelgroep" 
                                    v-model="form.targetAudience" 
                                    required>
                                    </b-form-input>
                                </b-col>
                            </b-row> 
                        </b-col>
                        <b-col cols="3" class="productCol">
                            <div class="productDiv">
                                <h4 class="productText">Product opties</h4>
                                <div class="buttonOptions cursor" @click="addProduct">Product toevoegen</div>
                                <div class="buttonOptions cursor">Product verwijderen</div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col class="imageCol" align-self="stretch">
                <div class="imageDiv">
                    <h1 class="imageH1">Foto's importeren</h1>
                    <div class="photoBox">
                        <img src="@/assets/addPhoto.png" class="photoImg">
                    </div>
                    <b-row class="imgRow">
                        <div class="imgBox" v-for="index in 5" :key="index">
                            <img src="@/assets/addImg.png">
                        </div>
                        <img :src="form.url">
                    </b-row>
                </div>
            </b-col>
        </b-row>
    <div class="secondSpacer"></div>
        <SocialMedia></SocialMedia>
    <div class="secondSpacer"></div>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Footer from '../components/Footer.vue'
import { db } from '../database.js';
import firebase from 'firebase';

import { Base64 } from 'js-base64';

export default {
    components: {
        Header,
        Navbar,
        SocialMedia,
        Footer
    },
    data() {
        return {
            form: [{
                productName: '',
                productDescription: '',
                productSale: '',
                productSaleDate: '',
                newCollection: '',
                exclusivePrice: '',
                productBrand: '',
                productCharacteristic: '',
                productColor: '',
                productPrice: '',
                productCategorie: '',
                productMaterial: '',
                targetAudience: '',
                url: null,
            }]
        }
    },
    created() {
        // const str = "dcode";
        // const base64 = btoa(str);
        // const decode = atob(base64);

        // console.log("Original: ", str);
        // console.log("Base64: ", base64);
        // console.log("Decode: ", decode);
        
        var pngBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.url = Base64.atob(pngBase64);
    },
    methods: {
        async addProduct() {
            try {
                await db.collection('Products').add({
                    productName: this.form.productName,
                    productDescription: this.form.productDescription,
                    productSale: this.form.productSale,
                    productSaleDate: this.form.productSaleDate,
                    newCollection: this.form.newCollection,
                    exclusivePrice: this.form.exclusivePrice,
                    productBrand: this.form.productBrand,
                    productCharacteristic: this.form.productCharacteristic,
                    productColor: this.form.productColor,
                    productPrice: this.form.productPrice,
                    productCategorie: this.form.productCategorie,
                    productMaterial: this.form.productMaterial,
                    targetAudience: this.form.targetAudience,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }).then(() => {
                    this.form = ''
                })
            } catch (error) {
                alert(error)
            }
        }
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
  background-color: #f7f7f7;
  width: 100%;
  height: 5px;
}

.secondSpacer {
  background-color: #f7f7f7;
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
    margin-left: 25px;
    padding: 0px 20px;
}

.mainText {
    margin-left: 15px;
    margin-bottom: 0px;
}

.firstColumn {
    background-color: #f7f7f7;
    margin-left: 0px;
    padding-bottom: 20px;
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

.productCol {
    border-left: 5px solid white;
    margin-left: 10px;
    height: 100%;
}

.productDiv {
    width: 90%;
}

.productText {
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

.imageCol {
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    border: 2px solid #f7f7f7;
}

.imageDiv {
    border: 5px solid white;
    margin: 0 20px;
    padding-left: 10px;
}

.imageH1 {
    border-bottom: 5px solid white;
    width: 90%;
}

.photoBox {
    border: 5px solid white;
}

.photoImg {
    margin: 15% 30%;
}

.imgRow {
    padding: 0;
    margin: 10px 0px;
}

.imgBox {
    border: 2px solid white;
    padding: 5px;
    margin-right: 5px;
}
</style>
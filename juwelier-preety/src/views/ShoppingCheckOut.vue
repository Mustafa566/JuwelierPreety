<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Product afrekenen</h4>
        </div>
    <div class="secondSpacer"></div>
        <b-row>
            <b-col lg="8" class="firstCol">
                <div class="firstDiv">
                <h1 class="mainText">Bezorg adres</h1>
                <hr class="hr">
                <b-row class="firstColumn">
                    <b-col>
                        <b-row>
                            <b-col lg="6" class="mb-2">
                                <b-form-input type="text" placeholder="Voornaam" required></b-form-input>
                            </b-col>
                            <b-col lg="6" class="rightInput">
                                <b-form-input type="text" placeholder="Geboorte datum" required></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col lg="6" class="mb-2">
                                <b-form-input type="text" placeholder="Achternaam" required></b-form-input>
                            </b-col>
                            <b-col lg="6" class="rightInput">
                                <b-form-input type="text" placeholder="Klant Nummer" required></b-form-input>
                            </b-col>
                        </b-row> 
                        <b-row>
                            <b-col lg="6" class="mb-2">
                                <b-form-input type="text" placeholder="Email" required></b-form-input>
                            </b-col>
                            <b-col lg="6" class="rightInput">
                                <b-form-input type="text" placeholder="Geslacht" required></b-form-input>
                            </b-col>
                        </b-row> 
                        <b-row>
                            <b-col lg="6" class="mb-2">
                                <b-form-input type="text" placeholder="Telefoon" required></b-form-input>
                            </b-col>
                        </b-row> 
                    </b-col>
                    <b-col cols="3" class="deliveryCol">
                        <div class="deliveryDiv">
                            <h4 class="deliveryText">Bezorg opties</h4>
                            <div class="buttonOptions">Nieuwe bezorg adres</div>
                            <div class="buttonOptions">Zakelijke bezorg adres</div>
                        </div>
                    </b-col>
                </b-row>
            </div>
                <b-row class="deliveryNewRow">
                    <b-col>
                        <h1 class="deliveryHeadText">Bezorg moment</h1>
                        <b-row class="rowBlock">
                            <b-col class="colBlock" lg="2" v-for="index in 5" :key="index"></b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <b-row class="deliveryNewRow">
                    <b-col>
                        <h1 class="deliveryHeadText">Betaal methode</h1>
                        <b-row class="rowBlock">
                            <b-col class="colBlock" lg="2" v-for="index in 5" :key="index"></b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col class="cartCol" align-self="stretch">
                <div class="cartDiv">
                    <h1 class="cartH1">Overzicht</h1>
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
                    <PopulairCollectionNoTitle class="mb-2"></PopulairCollectionNoTitle>
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
import PopulairCollectionNoTitle from '../components/PopulairCollectionNoTitle.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Header,
        Navbar,
        PopulairCollectionNoTitle,
        SocialMedia,
        Footer
    },
    data() {
        return {
            bezorgArray: [
                { placeholder: 'Voornaam' },
                { placeholder: 'Geboorte datum' },
                { placeholder: 'Achternaam' },
                { placeholder: 'Klant nummer' },
                { placeholder: 'Email' },
                { placeholder: 'Geslacht' },
                { placeholder: 'Telefoon' },
            ]
        }
    }
}
</script>

<style scoped>
.col, .col-lg-8 {
    padding: 0;
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
    border-left: 20px solid white;
    border: 5px solid white;
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

.deliveryCol {
    border-left: 5px solid white;
    margin-left: 10px;
    height: 100%;
}

.deliveryDiv {
    width: 90%;
}

.deliveryText {
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
    margin: 0 20px;
    padding-left: 10px;
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

.deliveryNewRow {
    border: 5px solid white;
    margin: 0;
    margin-left: 20px;
    margin-top: 20px;
    padding: 0;
}

.deliveryHeadText {
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
    height: 200px;
    margin-right: 10px;
    margin-bottom: 10px;
    background-color: white;
}

.titleDiv[data-v-638f3be0] {
    display: none;
}
</style>
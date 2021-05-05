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
                                    <b-form-input type="text" placeholder="Product naam" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input type="text" placeholder="Product merk" required></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-textarea rows="5" type="text" placeholder="Product beschrijving..." required></b-textarea>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-textarea rows="5" type="text" placeholder="Product Kenmerk" required></b-textarea>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input type="text" placeholder="Product korting" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input type="text" placeholder="Product Kleur" required></b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input type="text" placeholder="Product korting actief" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input type="text" placeholder="Product Prijs" required></b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input type="text" placeholder="Nieuwe collectie" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input type="text" placeholder="Product categorie" required></b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input type="text" placeholder="Live Voorbeeld" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="rightInput">
                                    <b-form-input type="text" placeholder="Product materiaal" required></b-form-input>
                                </b-col>
                            </b-row> 
                            <b-row>
                                <b-col lg="6" class="mb-2">
                                    <b-form-input type="text" placeholder="Exclusief" required></b-form-input>
                                </b-col>
                                <b-col lg="6" class="mb-2 rightInput">
                                    <b-form-input type="text" placeholder="Geslacht doelgroep" required></b-form-input>
                                </b-col>
                            </b-row> 
                        </b-col>
                        <b-col cols="3" class="productCol">
                            <div class="productDiv">
                                <h4 class="productText">Product opties</h4>
                                <div class="buttonOptions">Product toevoegen</div>
                                <div class="buttonOptions">Product verwijderen</div>
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

export default {
    components: {
        Header,
        Navbar,
        SocialMedia,
        Footer
    },
    data() {
        return {
            
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
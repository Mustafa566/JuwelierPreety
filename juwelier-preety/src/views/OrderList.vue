<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Bestelling lijst</h4>
        </div>
    <div class="secondSpacer"></div>
        <b-row>
            <b-col lg="8" class="firstCol">
                <div class="firstDiv">
                <h2 class="mainText">Bestellingen</h2>
                <hr class="hr">
                    <b-row class="tableRow" v-for="index in 10" :key="index">
                        <b-col class="tableData">
                            <p>Productnaam</p>
                        </b-col>
                        <b-col class="tableData">
                            <p>Product kenmerk</p>
                        </b-col>
                        <b-col class="tableData">
                            <p>Klant naam</p>
                        </b-col>
                        <b-col class="tableData">
                            <p>Klant email</p>
                        </b-col>
                        <b-col>
                            <div class="arrowCol">
                                <img src="@/assets/arrow.png" class="arrowImg">
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-col>
        <div class="newDiv"></div>
            <b-col class="orderCol" align-self="stretch">
                <div class="orderDiv">
                    <h1 class="orderH1">Bestelling filter</h1>
                    <b-row class="orderRow">
                        <b-input-group class="mt-2 mr-2">
                            <b-form-input></b-form-input>
                            <b-input-group-append>
                                <b-button class="searchBtn">Zoek</b-button>
                            </b-input-group-append>
                        </b-input-group>
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

export default {
    components: {
        Header,
        Navbar,
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

.tableRow {
    background-color: #efefef;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-left: 15px;
}

.arrowCol {
    background-color: #E6E6E6;
    width: 70px;
    height: 35px;
    margin-bottom: 15px;
}

.arrowImg {
    margin: 0 20%;
}

.hr {
    border: none;
    width: 90%;
    height: 5px;
    background-color: white;
    margin-left: 15px;
    margin-top: 5px;
}

.orderCol {
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    border: 2px solid #f7f7f7;
}

.orderDiv {
    border: 5px solid white;
    margin-right: 15px;
    padding-left: 10px;
    height: 820px;
}

.orderH1 {
    border-bottom: 5px solid white;
    width: 90%;
}

.orderRow {
    padding: 0;
    margin: 10px 0px;
}

.searchBtn {
    background-color: #E6E6E6;
    color: #707070;
}
</style>
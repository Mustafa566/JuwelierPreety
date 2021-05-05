<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Admin paneel</h4>
        </div>
    <div class="secondSpacer"></div>
        <b-row>
            <b-col lg="4" class="firstCol">
                <div class="firstDiv">
                <h2 class="mainText">Admin opties</h2>
                <hr class="hr">
                    <b-row class="filterRow" v-for="opties in adminOpties" :key="opties.name">
                        <b-col lg="11" class="optieText">
                            <h4>{{opties.name}}</h4>
                        </b-col>
                        <b-col class="arrowBtn">
                            <span class="helper"></span>
                            <img src="@/assets/arrow.png" class="arrowImgFilter">
                        </b-col>
                    </b-row>
                </div>
            </b-col>
            <b-col class="secondCol" align-self="stretch">
                <div class="storeDiv">
                    <h1 class="storeH1">Winkel informatie</h1>
                    <b-row class="storeRow" v-for="index in 5" :key="index">
                        <h4>Test</h4>
                        <h4>Test</h4>
                    </b-row>
                </div>

                <div class="storeDiv mt-2">
                    <h1 class="storeH1">Recentelijke aankopen</h1>
                    <b-row class="storeRow" v-for="index in 5" :key="index">
                        <h4>Test</h4>
                        <h4>Test</h4>
                    </b-row>
                </div>

                <div class="storeDiv mt-2">
                    <h1 class="storeH1">Product informatie</h1>
                    <b-row class="storeRow" v-for="index in 5" :key="index">
                        <h4>Test</h4>
                        <h4>Test</h4>
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
            adminOpties: [
                { name: 'Gebruikers' },
                { name: 'Producten' },
                { name: 'Filters' },
                { name: 'Bestellingen' },
                { name: 'Winkel' },
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
    border: 5px solid white;
    margin-left: 25px;
    padding: 0px 20px;
}

.mainText {
    margin-left: 15px;
    margin-bottom: 0px;
    margin-top: 15px;
}

.filterRow {
    background-color: #efefef;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    padding-left: 15px;
}

.optieText {
    padding-top: 15px;
    padding-bottom: 15px;
}

.arrowBtn {
    background-color: #c7c7c7;
    color: white;
}

.arrowImgFilter {
    vertical-align: middle;
    width: 30px;
    margin: 5px;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
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

.secondCol {
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
}

.storeDiv {
    border: 5px solid white;
    margin: 0 20px;
    padding-left: 10px;
    max-height: 310px;
}

.storeH1 {
    border-bottom: 5px solid white;
    width: 90%;
}

.storeRow {
    padding: 0;
    margin: 10px 0px;
}
</style>
<template>
  <div class="home">
    <Header></Header>
<div class="spacer"></div>
    <Navbar></Navbar>
<div class="secondSpacer"></div>
    <div class="txtDiv">
        <h5 class="text-center pt-1">Product beschrijving</h5>
    </div>
<div class="secondSpacer"></div>
    <!-- Show product info -->
    <div class="productDiv textColor pb-2">
        <b-row class="pt-2">
            <b-col align-self="baseline" class="firstCol">
                <div class="productTitle">
                    <div class="first ml-3">
                        <h3>RHINE STONE</h3>
                        <h5>FRANSE RING MET FLEUR UIT BABLA</h5>
                    </div>
                    <div class="second">
                        <h4 class="itemAvailability">Uit verkocht</h4>
                        <p>2 tot 5 weken</p>
                    </div><br>
                </div>
                <b-row class="productInfoDiv mt-2">
                    <b-col>
                        <h3 class="description">Beschrijving</h3>
                        <div class="descriptionInfoBg">
                            <p class="descriptionText">
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                              Lorem Ipsum is simply dummy text of the printing and typeset
                              ting industry. Lorem Ipsum has been the industry's standard d
                              ummy text ever since the 150ently with desktop publishing sof
                              tware like Aldus PageMaker includeng versions of Lorem 
                              Ipsum.
                            </p>
                        </div>
                    <!-- Add to cart -->
                        <b-row class="pt-2 addCardDiv textColor">
                            <b-col class="cardText" lg="5">
                                <b-row>
                                    <b-col>
                                        <h3 class="mt-2">Voeg toe aan winkelwagen</h3>
                                    </b-col>
                                    <b-col lg="2" class="heartDiv">
                                        <img src="@/assets/heart.png" class="heartImg">
                                    </b-col>
                                    <b-col lg="2" class="heartDiv">
                                        <img src="@/assets/shopCart.png" class="heartImg">
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col class="cost text-center pt-1" lg="2">
                                <h1>$1200</h1>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="2" align-self="stretch" class="imgDiv">
                <img src="@/assets/productImg.png" class="imgSelf">
            </b-col>
        </b-row>
       
    </div>
    <!-- Product specificaties -->
    <div class="txtDiv">
        <h5 class="text-center textColor pt-1">Product specificaties</h5>
    </div>
    <b-row>
        <b-col lg="4" v-for="productSpecif in productSpec" :key="productSpecif.name">
            <div class="productSpecDiv textColor pl-3 pb-1">
                <h2>{{productSpecif.name}}</h2>
            </div>
        </b-col>
        <!-- <b-col lg="4">
            <div class="productSpecDiv pl-3">
                <h1>test</h1>
            </div>
        </b-col>
        <b-col lg="4">
            <div class="productSpecDiv pl-3">
                <h1>test</h1>
            </div>
        </b-col> -->
    </b-row>
<!-- <div class="bigSpacer"></div> -->
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
  name: 'Home',
  data() {
    return {
        productSpec: [
          { name: 'Model nummer:' },
          { name: 'Diamand Gewicht:' },
          { name: 'Karaat:' },
          { name: 'Materiaal:' },
          { name: 'Diamand zuiverheid:' },
          { name: 'Model set:' },
          { name: 'Maat:' },
          { name: 'Kleur steen:' },
          { name: 'Merk:' },
          { name: 'Diamand slijpvorm:' },
          { name: 'Slijpvorm:' },
          { name: 'Diamand aantal:' },
          { name: 'Afmeting:' },
        ]
    }
  },
  head: {
		title: function () {
			return {
				inner: 'Juwelier Preety',
        separator: '|',
        complement: 'item'
			}
		}
	},
}
</script>


<style scoped>
@media only screen and (min-width: 893px) and (max-width: 1450px) {
  
}

@media only screen and (max-width: 768px) {
    
}

@media only screen and (min-width: 992px) {
  
}

.textColor {
  color: #707070;
}

.getBorder {
  border: 5px solid #f7f7f7;
}

.productDiv {
  margin: 0 auto;
  background-color: #E4E4E4;
  padding: 0px 50px;
}

.txtDiv {
  border: 5px solid white;
  background-color: #f7f7f7;
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

.bigSpacer {
  background-color: #E4E4E4;
  width: 100%;
  height: 100px;
}

.productTitle {
  background-color: white;
  display: flex;
  width: 101%;
}

.first {
  flex: auto;
}

.itemAvailability {
  margin: 0;
}

.imgDiv {
  margin: 0px 5px;
  padding: 0;
  width: 100%;
  height: 100%;
}

.imgSelf {
  width: 100%;
  height: 100%;
  border: 2px solid white;
}

.productInfoDiv {
  background-color: white;
  margin-left: 0px;
}

.firstCol {
  padding-left: 0px;
}

.description {
  border-left: 5px solid red;
  margin-top: 5px;
  padding-left: 5px;
}

.descriptionInfoBg {
  max-width: 80%;
  padding: 0px 5px;
  background-color: #f7f7f7;
}

.descriptionText {
  font-weight: bold;
  font-size: 18px;
}

.addCardDiv {
  background-color: white;
}

.cardText {
  border: 2px solid #f7f7f7;
  margin: 10px;
}

.cost {
  border: 2px solid #f7f7f7;
  margin: 10px;
}

.heartDiv {
  border-left: 2px solid #f7f7f7;
  height: 60px;
}

.heartImg {
  width: 40px;
  height: 40px;
  margin: 10px 15px;
}

.productSpecDiv {
  background-color: #f7f7f7;
  margin: 10px 20px;
}
</style>
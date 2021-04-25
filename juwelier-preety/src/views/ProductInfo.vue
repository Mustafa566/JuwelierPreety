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
    <b-container class="mt-5 container">
        <b-row class="pt-2 pl-1">
            <b-col align-self="baseline">
                <div class="productTitle getBorder">
                    <div class="first">
                        <h3>RHINE STONE</h3>
                        <h5>FRANSE RING MET FLEUR UIT BABLA</h5>
                    </div>
                    <div class="second">
                        <h4 class="itemAvailability">Uit verkocht</h4>
                        <p>2 tot 5 weken</p>
                    </div><br>
                </div>
                <b-row class="productInfoDiv getBorder mt-2">
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
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="2" align-self="stretch" class="imgDiv">
                <img src="@/assets/productImg.png" class="imgSelf">
            </b-col>
        </b-row>
        
        <b-row>
            <div>
                <h1>shdgfhsgdf</h1>
            </div>
        </b-row>
    </b-container>
<div class="bigSpacer"></div>
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

.getBorder {
  border: 5px solid #f7f7f7;
}

.container {
  max-width: 1540px;
}

.txtDiv {
  border: 5px solid white;
  background-color: #f7f7f7;
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

.bigSpacer {
  background-color: #f7f7f7;
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
  border: 2px solid white;
  margin: 0px 5px;
  padding: 0;
  width: 100%;
  height: 100%;
}

.imgSelf {
  width: 100%;
  height: 100%;
}

.productInfoDiv {
  background-color: white;
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
</style>
<template>
  <div class="home">
    <Header></Header>
<div class="spacer"></div>
    <Navbar></Navbar>
<div class="secondSpacer"></div>
    <!-- Show collection and products -->
    <div class="parent">
        <div class="leftSide">
            <PopulairCollection></PopulairCollection>
        </div>
        <b-row class="rightSide">
            <b-col xs="12" sm="12" md="8" lg="2" class="mr-1 mb-1 colProduct" v-for="product in items" :key="product" @click="increment()">
                <div class="productInfo">
                    <img src="@/assets/productImg.png" class="productImg">
                    <div class="productDetails">
                        <img src="@/assets/heart.png" class="heartIcon">
                        <b-row>
                            <b-col>
                                <p>{{product.Name}}</p>
                                <p>{{product.Description}}</p>
                            </b-col>
                            <b-col>
                                Op vooraad
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </div>
    
<div class="spacer"></div>
    <Carousel></Carousel>
<div class="spacer"></div>
    <SocialMedia></SocialMedia>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import PopulairCollection from '../components/PopulairCollection.vue'
import Carousel from '../components/Carousel.vue'
import SocialMedia from '../components/SocialMedia.vue'
import Footer from '../components/Footer.vue'
import { db } from '../database.js';

export default {
  components: {
    Header,
    Navbar,
    PopulairCollection,
    Carousel,
    SocialMedia,
    Footer
  },
  name: 'Home',
  data() {
    return {
      
    }
  },
  created() {
    
  },
  head: {
		title: function () {
			return {
				inner: 'Juwelier Preety',
        separator: '|',
        complement: 'Home'
			}
		}
	},
  firebase: {
    items: db.collection('Products')
  }
}
</script>


<style scoped>
@media only screen and (min-width: 893px) and (max-width: 1450px) {
  .colProduct {
    flex: 0 0 100%;
    max-width: 47%;
    background-color: black !important;
  }
}

@media only screen and (max-width: 768px) {
    .leftSide {
        display: none;
    }
}

@media only screen and (min-width: 992px) {
  .col-lg-2 {
    flex: 0 0 24.666667%;
    max-width: 25.666667%;
  }
}

html, body, template, .home {margin: 0; height: 100%; overflow: hidden}

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

.colProduct {
  border: 5px solid white;
  padding: 0;
  height: 400px;
}

.parent {
  display: flex;
  background-color: #E4E4E4;
}

.info {
  background-color: white;
}

.rightSide {
  width: 100%;
  padding: 5px 30px;
}

.leftSide {
  width: 700px;
}

.productInfo {
  width: 100%;
  height: 100%;
}

.productImg {
  width: 100%;
  height: 290px;
}

.productDetails {
  width: 100%;
  height: 80px;
}

.heartIcon {
  position: absolute;
  top: 5px;
  right: 5px;
}

/* .removePadding {
  padding-right: 0;
} */
</style>
<template>
    <div>
        <Header></Header>
    <div class="spacer"></div>
        <Navbar></Navbar>
    <div class="secondSpacer"></div>
        <div class="headText">
            <h4 class="text-center">Over ons</h4>
        </div>
        <div class="mainDiv">
            <b-row class="mainContent">
                <b-col>
                    <img src="@/assets/AboutUs/aboutUs1.png" class="imgLeft">
                </b-col>
                <b-col cols="9" class="description">
                    <h3>Hoofdtekst</h3>
                <hr>
                    <p>
                        Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. 
                        Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, 
                        toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. 
                        Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. 
                        Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk 
                        door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                    </p>
                </b-col>
            </b-row>
            <b-row class="mainContent">
                <b-col cols="9" class="description">
                    <h3>Hoofdtekst</h3>
                <hr>
                    <p>
                        In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. 
                        het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. 
                        Richard McClintock, een professor latijn aan de Hampden-Sydney College in Virginia, heeft één van de meer obscure 
                        latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in 
                        de klassieke literatuur de onverdachte bron ontdekt. Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus 
                        Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling 
                        over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor 
                        sit amet..", komt uit een zin in sectie 1.10.32.
                        Het standaard stuk van Lorum Ipsum wat sinds de 16e eeuw wordt gebruikt is hieronder, 
                        voor wie er interesse in heeft, weergegeven. Secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" 
                        door Cicero zijn ook weergegeven in hun exacte originele vorm, vergezeld van engelse versies van de 1914 vertaling door H. Rackham.
                    </p>
                </b-col>
                <b-col>
                    <img src="@/assets/AboutUs/aboutUs2.png" class="imgRight">
                </b-col>
            </b-row>
            <b-row class="mainContent">
                <b-col>
                    <img src="@/assets/AboutUs/aboutUs1.png" class="imgLeft">
                </b-col>
                <b-col cols="9" class="description">
                    <h3>Hoofdtekst</h3>
                <hr>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dapibus orci, a posuere nisl. 
                        Phasellus non purus semper elit ultrices molestie id sit amet neque. Suspendisse nec quam quis risus mollis consectetur. 
                        Morbi lacinia erat ac mattis vestibulum. Ut maximus euismod dapibus. Maecenas ac dui id felis tincidunt pellentesque eu non lectus. 
                        Morbi lacinia dolor ac ex auctor fermentum. Donec justo arcu, cursus vel dapibus efficitur, laoreet eget nunc. Fusce ultricies 
                        augue est, ut viverra magna vehicula at. Etiam elementum nisl sed ante vulputate, non consectetur nibh eleifend. In arcu leo, 
                        molestie et turpis eu, dapibus ultricies urna. Donec sed fermentum purus, eu aliquam ligula. Donec at leo pellentesque odio 
                        laoreet interdum. Aenean mollis non mi eget sagittis. Donec facilisis neque a tincidunt tempor.
                        Fusce vitae lobortis diam. Mauris dictum mauris sit amet commodo dictum. Suspendisse nec felis condimentum sapien tristique 
                        vulputate. Vestibulum gravida ante tristique egestas semper. In vel nibh tincidunt orci ornare maximus. Nunc dignissim elementum 
                        erat sed lacinia. Etiam non quam quam.
                        Nam vitae ipsum eget nisi pretium elementum. Vivamus congue sapien ac ante placerat, ac feugiat nibh iaculis. Fusce sapien est, 
                        laoreet tempor sem sit amet, euismod gravida leo. Aenean posuere arcu eget mauris scelerisque varius eu sit amet turpis. Vivamus 
                        nec arcu vel enim malesuada posuere sed a sem. Nunc dignissim luctus tempor. Mauris et libero pellentesque, dignissim diam a, 
                        pellentesque neque. Aenean posuere nisl nulla, vitae sodales tellus laoreet vel. Nullam ornare interdum erat id finibus. Cras 
                        ullamcorper eros sed rhoncus rhoncus. Nam feugiat ac ante bibendum interdum. Vivamus auctor in dui eu iaculis. Vivamus eu pulvinar 
                        ligula, non rutrum ligula. Vestibulum egestas dapibus nulla, a finibus nibh convallis et. Duis rhoncus lacus et leo laoreet fringilla. 
                        Vivamus at elit at nibh semper pretium.
                    </p>
                </b-col>
            </b-row>
        </div>
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

        }
    }
}
</script>

<style scoped>
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

.imgLeft {
    width: 100%;
    border: 5px solid white;
    margin-left: -15px;
}

.imgRight {
    width: 100%;
    border: 5px solid white;
    margin-left: 15px;
}

.mainDiv {
    max-width: 95%;
    margin: 0 auto;
    padding-top: 10px;
    background-color: #f7f7f7;
}

.mainContent {
    background-color: #f7f7f7;
    margin-top: 10px;
}

.description {
    border: 5px solid white;
}

hr {
    margin: 0;
    border: 2px solid #A80000;
    width: 25%;
}
</style>
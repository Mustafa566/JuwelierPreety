<template>
    <div class="main mt-1">
        <b-row>
            <!-- col for Informatie en hulp -->
            <b-col class="colList ml-5" xs="12" sm="12" md="2" lg="2">
                <h6>Informatie en hulp</h6>
                <p v-for="info in information" :key="info.text">
                    {{info.text}}
                </p>
            </b-col>
            <!-- col for Mijn account -->
            <b-col class="colList" xs="12" sm="12" md="2" lg="2">
                <h6>Mijn account</h6>
                <p v-for="acc in account" :key="acc.text">
                    {{acc.text}}
                </p>
            </b-col>
            <!-- col for Klanten service -->
            <b-col class="colList" xs="12" sm="12" md="2" lg="2">
                <h6>Klanten service</h6>
                <p v-for="klant in service" :key="klant.text">
                    {{klant.text}}
                </p>
            </b-col>
            <!-- col for social media -->
            <b-col class="colList" xs="12" sm="12" md="2" lg="2">
                <h6>Social media</h6>
                <p v-for="media in socialMedia" :key="media.text">
                    {{media.text}}
                </p>
            </b-col>
            <b-col>
                <div class="formDiv mb-2">
                    <h5>ABBONEER OP ONS DAGBLAD!</h5>
                    <p>Krijg het eerste alle nieuwtjes over Juwelier Preety!</p>
                    <b-form inline @submit.prevent="subscribe">
                        <b-form-input class="mt-1" id="input-large" size="lg" placeholder="Email..." v-model="email"></b-form-input>
                        <b-button class="sendBtn" @click="subscribe">></b-button>
                    </b-form>
                </div>
            </b-col>
        </b-row>


        <b-row class="copyrightDiv p-2">
            <b-col xs="1" sm="4" md="3" lg="2">
                <p>&copy; AedionStudio 2021</p>
            </b-col>
            <b-col xs="1" sm="8" md="9" lg="10">
                <b-icon-facebook class="icons float-right"></b-icon-facebook>
                <b-icon-instagram class="icons float-right"></b-icon-instagram>
                <b-icon-twitter class="icons float-right"></b-icon-twitter>  
                <img src="@/assets/snapchat.png" class="icons float-right">  
            </b-col>
        </b-row>
    </div>
</template>

<script>
//import firebase from 'firebase'
import {db} from '../database'

export default {
    data() {
        return {
            information: [
                { text: 'Bestelmogelijkheden' },
                { text: 'Verzending en levering' },
                { text: 'Betaalwijze' },
                { text: 'Retourneren' },
                { text: 'Garantie' },
                { text: 'Klachten' }
            ],
            account: [
                { text: 'Mijn account' },
                { text: 'Mijn gegevens' },
                { text: 'Order status' },
                { text: 'Order historie' },
                { text: 'Account aanmaken' },
                { text: 'Inloggen' },
            ],
            service: [
                { text: 'Speciale gelegenheid' },
                { text: 'Specifieke aanvraag' },
                { text: 'Cadeau bonnen' }
            ],
            socialMedia: [
                { text: 'Facebook' },
                { text: 'Instagram' },
                { text: 'Twitter' }
            ],
            email: ''
        }
    },
    methods: {
        async subscribe() {
            if (this.email != '') {
                var documentReference = db.collection('SubscribeNewsletter').doc(this.email);
                await documentReference.get().then((documentSnapshot) => {
                    // check and do something with the data here.
                    if (documentSnapshot.exists) {
                        // do something with the data
                        alert('Email exist');
                    } else {
                        db.collection('SubscribeNewsletter').doc(this.email).set({
                            email: this.email
                        })
                        this.email = '';
                    }
                });
            } else {
                alert('Input empty');
            }
        },
    }
}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .colList {
        margin-left: 3rem;
  }

  .formDiv {
      margin-left: 3rem;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1070px) {
  .col-md-2 {
        flex: 0 0 22.666667%;
        max-width: 25.666667%;
  }

  .formDiv {
      margin-left: 3rem;
  }
}

@media only screen and (max-width: 575px) {
    .copyrightDiv {
        flex-wrap: unset;
    }
}    

.main {
    background-color: #f7f7f7;
    /* height: 268px; */
}

.colList {
    border-left: 5px solid white;
    margin-top: 10px;
    margin-bottom: 30px;
}

p {
    margin: 0;
    padding: 0;
}

.formDiv {
    margin-top: 40px;
}

.form-control {
    width: 70%;
}

.sendBtn {
    padding: 0.550rem 0.90rem;
    margin-top: 5px;
    font-weight: bolder;
    font-size: 20px;
    background-color: #F1F1F1;
    border: none;
}

.form-control:focus {
    border: none;
    box-shadow: none;
}

.copyrightDiv {
    background-color: white;
}

.icons {
    font-size: 20px;
    width: 20px;
    opacity: 0.38;
    margin-right: 5px;
}
</style>
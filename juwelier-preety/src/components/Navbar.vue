<template>
  <div>
      <b-container>
          <b-row>
                <b-col v-for="headNavbarList in headNavbar" :key="headNavbarList.name">
                    <p class="categorie" @click="active()">{{ headNavbarList.name }}</p>
                </b-col>
            </b-row>
      </b-container>
    <div class="spacer"></div>  
      <!-- Categorie navbar -->
      <b-container v-if="openCategorie">
          <b-row>
                <b-col v-for="cateNavbar in cateNavbarList" :key="cateNavbar.name">
                    <p class="productCategorie">{{ cateNavbar.name }}</p>
                </b-col>
            </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            headNavbar: [
                { name: 'Goud' },
                { name: 'Zilver' },
                { name: 'Sale' },
                { name: 'Reparaties' }
            ],
            cateNavbarList: [
                { name: 'Oorbellen' },
                { name: 'Kettingen' },
                { name: 'Ringen' },
                { name: 'Armbanden' },
                { name: 'Horloges' },
            ],
            openCategorie: false
        }
    },
    methods: {
        active() {
            this.openCategorie = true
        }
    }
}
</script>

<style scoped>
.categorie {
    margin: 0;
    padding: 2px;
    font-size: 20px;
}

.productCategorie {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 15px;
}

.spacer {
    background-color: #E4E4E4;
    width: 100%;
    height: 10px;
}
</style>
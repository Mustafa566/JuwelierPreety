<template>
  <div class="main">
      <!-- Show all collections -->
      <div class="allCollections">
          <div class="container" v-for="getList in collectionList" :key="getList.text">
              <img src="@/assets/PopulairCollections/trouwen.jpg" class="getImg">
              <div class="textOnImg">{{ getList.text }}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            collectionList: [
                { text: 'NIEUWE SEIZOENS COLLECTIE' },
                { text: 'NIEUWE HUWLIJK COLLECTIE' },
                { text: 'NIEUWE ARMBAND COLLECTIE' },
                { text: 'NIEUWE UITGAANS COLLECTIE' },
                { text: 'NIEUWE RINGEN COLLECTIE' }
            ]
        }
    }
}
</script>

<style scoped>
.main {
    margin-right: 10px;
    overflow-y: auto;
    max-height: 240px;
}

.allCollections {
    max-height: 750px;
    overflow-y: auto;
    overflow-x: hidden;
}

.container {
    position: relative;
    border: 4px solid white;
    padding: 0px;
    margin-right: 30px;
    margin-top: 5px;
}

.getImg {
    width: 100%;
    height: 110px;
}

.textOnImg {
    position: absolute;
    bottom: 25px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    font-weight: bolder;
    padding-left: 10px;
}
</style>
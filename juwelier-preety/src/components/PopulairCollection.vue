<template>
  <div class="main">
      <div class="titleDiv">
          <h5 class="titleText">Populaire Collecties</h5>
      </div>

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
/* IMAGE SIZE width="400" height="100"*/
.titleDiv {
    margin: 5px 0px;
    margin-left: 10px;
    margin-right: -10px;
    padding-top: 10px;
    padding-bottom: 2px;
    background-color: #f7f7f7;
    border: 5px solid white;
}

.titleText {
    text-align: center;
}

.allCollections {
    max-height: 750px;
    overflow-y:auto;
    overflow-x: hidden;
    background-color: white;
}

.container {
    position: relative;
    border: 2px solid white;
}

.getImg {
    width: 100%;
    height: 110px;
    margin-left: 15px;
    margin-bottom: 5px;
}

.textOnImg {
    position: absolute;
    bottom: 25px;
    left: 30px;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    font-weight: bolder;
    padding-left: 10px;
}
</style>
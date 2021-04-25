<template>
  <div>
        <div class="headText">
            <h4 class="text-center">Exclusieve Collectie</h4>
        </div>
        <b-carousel id="carousel-fade" fade indicators :interval="3000">
            <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=10"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=12"></b-carousel-slide>
            <b-carousel-slide img-src="https://picsum.photos/1024/250/?image=22"></b-carousel-slide>
        </b-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.headText {
    color: #707070;
    background-color: #f7f7f7;
    border: 5px solid white;
}

.carousel-inner {
    height: 352px !important;
    margin: 50px;
}
</style>
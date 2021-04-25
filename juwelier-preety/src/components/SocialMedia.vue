<template>
  <div class="main">
        <div class="headText">
            <h4 class="text-center">Social Media</h4>
        </div>
        <b-row class="mt-3 pb-3">
            <b-col sm="1" md="2" lg="4"></b-col>
            <b-col>
                <div class="socialMediaDiv d-flex justify-content-center mb-2">
                    <b-icon-facebook class="m-4 icons"></b-icon-facebook>
                </div>
            </b-col>
            <b-col>
                <div class="socialMediaDiv d-flex justify-content-center mb-2">
                    <b-icon-instagram class="m-4 icons"></b-icon-instagram>
                </div>
            </b-col>
            <b-col>
                <div class="socialMediaDiv d-flex justify-content-center mb-2">
                    <b-icon-twitter class="m-4 icons"></b-icon-twitter>
                </div>
            </b-col>
            <b-col>
                <div class="socialMediaDiv d-flex justify-content-center mb-2">
                    <img src="@/assets/snapchat.png" class="m-4 icons">
                </div>
            </b-col>
            <b-col md="1" lg="4"></b-col>
        </b-row>
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
.main {
    background-color: #f7f7f7;
}

.headText {
    color: #707070;
    background-color: #f7f7f7;
    border: 5px solid white;
}

.socialMediaDiv {
    width: 100px;
    height: 100px;
    background-color: white;
    border-radius: 25px;
}

.icons {
    font-size: 50px;
    opacity: 0.38;
}
</style>
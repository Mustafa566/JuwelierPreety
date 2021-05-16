<template>
    <div class="main">
        <div class="header">
            <b-row>
                <b-col>
                    <p>Winkel wagen<span class="closeBtn">X</span></p>
                </b-col>
            </b-row>
        </div>
        <div class="productBody">
            <h3 class="productText mb-4">Producten</h3>
            <div class="scrollBox">
                <b-row class="mb-2 productRow" v-for="data in getData" :key="data">
                    <b-col lg="6">
                        <p class="productTextList mt-3">{{data.headText}}</p>
                    </b-col>
                    <b-col lg="2">
                        <b-form-input type="number" class="mt-2"></b-form-input>
                    </b-col>
                    <b-col lg="2" class="price">
                        <p>$100</p>
                    </b-col>
                    <b-col lg="1" class="ml-4">
                        <p class="close">X</p>
                    </b-col>
                </b-row>
            </div>
            <b-row class="newCustomerText">
                <b-col>
                    <h3>Totaal:</h3>
                </b-col>
                <b-col lg="3">
                    <h3>$1000</h3>
                </b-col>
            </b-row>
            <div class="buttons pointer">
                <h4>Afrekenen</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getData: [
                { headText: 'JUANBLUE KETTING'},
                { headText: 'JUANBLUE RING'},
                { headText: 'JUANBLUE HALS BAND'}
            ]
        }
    }
}
</script>

<style scoped>
.col {
    padding-right: 0px;
    padding-left: 0px;
}

.form-control {
    padding: 0;
    border: none;
    background-color: #ececec;
}

.form-control:focus {
    box-shadow: none;
    border-color: none;
}

.pointer {
    cursor: pointer;
}

.main {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1;
    overflow: hidden;
}

.header {
    margin: 0 auto;
    margin-top: 120px;
    width: 500px;
    height: 50px;
    background-color: #f7f7f7;
    border-top: 10px solid white;
    border-bottom: 10px solid white;
    color: #707070;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}

p {
    margin: 0;
}

.closeBtn {
    float: right;
    margin-right: 30px;
    cursor: pointer;
}

.productBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 600px;
    background-color: #f7f7f7;
    border: 5px solid white;
    color: #707070;
}

.productText {
    border-bottom: 5px solid #EEEEEE;
    color: #707070;
}

.scrollBox {
    max-height: 350px;
    height: 600px;
    overflow-y: scroll;
}

.productRow {
    width: 100%;
    height: 50px;
    background-color: #e6e4e4;
    margin: 0 auto;
}

.productTextList {
    font-size: 15px;
}


.price {
    width: 100%;
    margin: 10px 0px;
    padding-top: 2px;
    text-align: center;
    background-color: #ECECEC;
    border-radius: 5px;
}

.close {
    margin: 10px 0px;
}

.hrLine {
    width: 100%;
    height: 5px;
    background-color: #EEEEEE;
    border: none;
}

.newCustomerText {
    border-bottom: 5px solid #EEEEEE;
    margin: 20px 5px;
}

.buttons {
    background-color: #EEEEEE;
    opacity: 0.5;
    text-align: center;
    padding: 10px 10px;
    margin-top: 30px;
}
</style>
<template>
    <div class="main">
        <div class="header">
            <b-row>
                <b-col>
                    <p>Klanten service<span class="closeBtn">X</span></p>
                </b-col>
            </b-row>
        </div>
        <div class="serviceBody">
            <h3 class="serviceText mb-4">Service informatie</h3>
            <b-row class="mb-2" v-for="data in getData" :key="data">
                <b-col cols="3">
                    <h5 class="text">{{data.headText}}</h5>
                </b-col>
                <b-col class="infoText">
                    {{data.value}}
                </b-col>
            </b-row>
        <hr class="hrLine">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            getData: [
                { headText: 'Locatie:', value: '' },
                { headText: 'Telefoon:', value: '' },
                { headText: 'Email:', value: '' },
                { headText: 'Spoed Tel:', value: '' },
                { headText: 'Kvk:', value: '' },
                { headText: 'Iban:', value: '' }
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

.serviceBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 480px;
    background-color: #f7f7f7;
    border: 5px solid white;
    color: #707070;
}

.serviceText {
    border-bottom: 5px solid #EEEEEE;
    color: #707070;
}

.text {
    padding-top: 10px;
}

.infoText {
    width: 100%;
    height: 50px;
    background-color: #E5E5E5;
    margin-right: 15px;
}

.hrLine {
    width: 100%;
    height: 5px;
    background-color: #EEEEEE;
    border: none;
}
</style>
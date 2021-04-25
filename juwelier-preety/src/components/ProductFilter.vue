<template>
    <div>
        <div class="headText mb-2">
            <h4 class="text-center">Product Filter</h4>
        </div>

        <div class="filterDiv mb-2" v-for="names in filterNames" :key="names.name">
            <div v-b-toggle.collapse-1 variant="primary" class="filter" @click="changeClass()">
                <b-row>
                    <b-col cols="10">
                        <p class="text ml-2">{{ names.name }}</p>
                    </b-col>
                    <b-col>
                        <img src="@/assets/notCollapse.png" style="width: 35px; height: 35px;" class="mt-2" id="imgArrow">
                    </b-col>
                </b-row>
            </div>
            <b-collapse id="collapse-1" class="collapse">
                <b-card class="card">
                    <b-row>
                        <b-col cols="10">
                            <p class="card-text">Collapse contents Here</p>
                        </b-col>
                        <b-col>
                            <b-form-checkbox size="lg" button-variant="black"></b-form-checkbox>
                        </b-col>
                    </b-row>
                </b-card>
            </b-collapse>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flipFlop: 0,
            filterNames: [
                { name: 'Prijs' },
                { name: 'Merken' },
                { name: 'Kleur' },
                { name: 'Model' },
                { name: 'Materiaal' }
            ]
        }
    },
    methods: {
        changeClass() {
            this.flipFlop++
            var element = document.getElementById("imgArrow");
            if(this.flipFlop == 1) {
                element.classList.add("rotate");
            } else {
                element.classList.remove("rotate");
                this.flipFlop = 0;
            }
            console.log(this.flipFlop)
        }
    }
}
</script>

<style scoped>
@keyframes rotate {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(90deg);}
}

@keyframes reverseRotate {
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(-90deg);}
}

.headText {
    color: #707070;
    background-color: #f7f7f7;
    border: 5px solid white;
}

.filterDiv {
    background-color: #f7f7f7;
    padding: 0;
}

.filter {
    background-color: white;
}

.text {
    border-left: 5px solid #E8E8E8;
    padding: 10px;
    margin-bottom: 0;
}

.show {
    margin-left: 5px;
}

.collapse {
    margin-top:2px;
}

.card {
    border: none;
    border-left: 3px solid lightgray;
    margin-left: 5px;
}

.rotate {
    animation-name: rotate;
    animation-duration: 1s;
    transform: rotate(90deg);
}

.reverseRotate {
    animation-name: reverseRotate;
    animation-duration: 1s;
    transform: rotate(-90deg);
}
</style>
<template>
    <div class="main">
        <div class="loginSection" v-if="openLogin">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <div class="authBody">
                <h3 class="authText mb-4">Inloggen</h3>
                <b-form-input class="authInput" placeholder="Email..."></b-form-input>
                <b-row class="mt-3">
                    <b-col>
                        <b-form-input class="authInput passInput" placeholder="Wachtwoord..."></b-form-input>
                    </b-col>
                    <b-col class="arrowDiv pointer" cols="2">
                        <span class="helper"></span>
                        <img src="@/assets/arrow.png" class="arrowImg">
                    </b-col>
                </b-row>
                <b-row class="socialMediaLogin">
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/google.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/facebook.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/twitter.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/apple.png" class="imgLogo">
                    </b-col>
                </b-row>
            <h6 class="pointer" @click="openForgotPassword()">Wachtwoord vergeten?</h6>
                <h3 class="newCustomerText">Nieuwe Klant</h3>
                <div class="buttons pointer" @click="openRegister = true; openLogin = false">
                    <h4>Registreren</h4>
                </div>
            </div>
        </div>
    
        <!-- Register form -->
        <div class="registerSection" v-if="openRegister">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <div class="authBody">
                <h3 class="authText mb-4">Registreren</h3>
                <b-form-input class="authInput" placeholder="Voornaam..."></b-form-input>
                <b-form-input class="authInput mt-3" placeholder="Achternaam..."></b-form-input>
                <b-form-input class="authInput mt-3" placeholder="E-mailadres..."></b-form-input>
                <b-form-input class="authInput mt-3" placeholder="Wachtwoord..."></b-form-input>
                <b-form-select class="mt-3" v-model="selected" :options="options"></b-form-select>
            <hr class="selectGenderHr">
                <div class="buttons pointer">
                    <h4>Registreren</h4>
                </div>
                <h3 class="newCustomerText mt-4">Bent u al lid ?</h3>
                <div class="buttons pointer" @click="openRegister = false; openLogin = true">
                    <h4>Inloggen</h4>
                </div>
            </div>
        </div>

        <!-- Forgot password -->
        <div class="forgotPasswordSection" v-if="openForgotPass">
            <div class="header">
                <b-row>
                    <b-col>
                        <p>Account <span class="closeBtn">X</span></p>
                    </b-col>
                </b-row>
            </div>
            <div class="authBody">
                <h3 class="authText mb-4">Wachtwoord vergeten</h3>
                <b-row class="mt-3">
                    <b-col>
                        <b-form-input class="authInput passInput" placeholder="Emailadres..."></b-form-input>
                    </b-col>
                    <b-col class="arrowDiv pointer" cols="2">
                        <span class="helper"></span>
                        <img src="@/assets/arrow.png" class="arrowImg">
                    </b-col>
                </b-row>
                <b-row class="socialMediaLogin">
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/google.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/facebook.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/twitter.png" class="imgLogo">
                    </b-col>
                    <b-col class="logoLogin pointer">
                        <img src="@/assets/LoginIcons/apple.png" class="imgLogo">
                    </b-col>
                </b-row>
                <h3 class="newCustomerText mt-4">Bent u al lid ?</h3>
                <div class="buttons pointer" @click="openForgotPass = false; openLogin = true">
                    <h4>Inloggen</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['close'],
    data() {
        return {
            closeLogin: 'sdsfs',
            openLogin: true,
            openRegister: false,
            openForgotPass: false,
            selected: 'Man',
            options: [
                { value: 'Man', text: 'Man' },
                { value: 'Vrouw', text: 'Vrouw' },
                { value: 'Wil het niet zeggen', text: 'Wil het niet zeggen' },
            ]
        }
    },
    methods: {
        openForgotPassword() {
            this.openLogin = false
            this.openRegister = false;
            this.openForgotPass = true;
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
    height: 100%;
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

.authBody {
    margin: 0 auto;
    padding: 15px 10px;
    margin-top: 10px;
    width: 500px;
    height: 100%;
    background-color: #f7f7f7;
    border: 5px solid white;
    color: #707070;
}

.authText {
    border-bottom: 5px solid #EEEEEE;
    color: #707070;
}

.authInput {
    padding: 30px 20px;
    padding-right: 0px;
}

.passInput {
    margin-left: 15px;
}

.form-control:focus {
    box-shadow: none;
    border: 1px solid #ced4da;
}

.arrowDiv {
    background-color: #E5E5E5;
    margin-right: 15px;
}

.helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}

.arrowImg {
    vertical-align: middle;
}

.logoLogin {
    background-color: #E5E5E5;
    margin: 10px 15px;
    padding: 5px;
    text-align: center;
}

.imgLogo {
    width: 24px;
    height: 24px;
}

.newCustomerText {
    border-bottom: 5px solid #EEEEEE;
}

.buttons {
    background-color: #EEEEEE;
    opacity: 0.5;
    text-align: center;
    padding: 10px 10px;
}

/* Register css */
.selectGenderHr {
    width: 100%;
    height: 5px;
    background-color: #EEEEEE;
    border: none;
}
</style>
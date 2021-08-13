<template>
    <div class="login">
        <transition name="appear">
            <div v-if="anim" class="login__top">
                <div class="login__circle"></div>
                <div class="login__title">Techr<br />messenger.</div>
            </div>
        </transition>
        <div class="login__body body-login">
            <transition name="appear">
                <div class="body-login__input" v-if="anim">
                    <input v-on:keyup.enter="login" v-model="username" type="text" placeholder="Введите никнейм..." />
                </div>
            </transition>
            <transition name="appear"
                ><button class="body-login__btn" v-on:click="login" v-if="anim">Подключиться</button></transition
            >
        </div>
    </div>
</template>

<script>
import socket from "./../main";
import { mapActions } from "vuex";

export default {
    data() {
        return {
            username: "",
            countOnline: 0,
            anim: false,
        };
    },
    methods: {
        ...mapActions(["changeUserData"]),
        login() {
            let username = this.username;
            if (username.trim().split(" ").length > 1) {
                alert("Никнейм не должен содержать пробелы");
            } else if (username.trim().length < 3) {
                alert("Никнейм должен содержать как минимум 3 символа");
            } else if (username.trim() === "") {
                alert("Некорректный никнейм");
            } else {
                socket.emit("login-user", this.username);
                let new_data = {
                    username: this.username.trim(),
                    isUserAuth: true,
                };
                this.changeUserData(new_data);
                setTimeout(() => this.$router.push({ path: "/chat" }), 600);
                this.anim = false;
            }
        },
    },
    created() {
        socket.on("change-online", (data) => {
            this.countOnline = data;
        });
    },
    mounted() {
        this.anim = true;
    },
};
</script>

<style lang="scss">
body {
    background-color: #fff;
}
</style>

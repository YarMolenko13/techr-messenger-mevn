<template>
    <transition name="appear">
        <div class="chat" v-if="anim">
            <div class="chat__logo">
                <img :src="require('./../assets/img/logo.svg')" alt="" />
            </div>
            <div class="chat__field field-chat">
                <div class="field-chat__top">
                    <div class="field-chat__name">{{ chatName }}</div>
                    <div class="field-chat__online">{{ onlineValue }} онлайн</div>
                    <div @click="logOut" class="field-chat__exit">
                        <img :src="require('./../assets/img/exit.png')" alt="" />
                    </div>
                </div>
                <transition-group ref="scroll" class="field-chat__body" tag="div" name="appear">
                    <div
                        :class="{
                            msg__mine: msg.user === username,
                            msg__other: msg.user !== username,
                        }"
                        class="msg"
                        v-for="msg in messeges"
                        :key="msg._id"
                    >
                        <div
                            class="msg__usn"
                            :class="{
                                _mine: msg.user === username,
                                _other: msg.user !== username,
                            }"
                        >
                            {{ msg.user }}
                        </div>
                        <div
                            class="msg__text"
                            :class="{
                                _mine: msg.user === username,
                                _other: msg.user !== username,
                            }"
                        >
                            {{ msg.text }}
                        </div>
                        <div
                            class="msg__date"
                            :class="{
                                _mine: msg.user === username,
                                _other: msg.user !== username,
                            }"
                        >
                            {{ msg.date }}
                        </div>
                    </div>
                </transition-group>
                <div class="field-chat__input">
                    <textarea
                        rows="2"
                        v-model="messegeText"
                        @keyup.enter="sendMessege"
                        @keyup.enter.prevent
                        type="text"
                        @keydown.enter.prevent
                        placeholder="Напишите сообщение ..."
                    ></textarea>
                    <button :class="{ '_able-send': this.messegeText.trim() != '' }" @click="sendMessege"></button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import axios from "axios";
import socket from "./../main";

export default {
    name: "Chat",
    data() {
        return {
            chatName: "Global chat",
            messegeText: "",
            username: "",
            messeges: [],
            countOnline: 0,
            anim: false,
        };
    },
    methods: {
        async sendMessege() {
            if (this.messegeText.length > 0 && this.messegeText.trim() != "") {
                let date = new Date();
                let m = date.getMinutes();
                if (date.getMinutes().toString().length < 2) {
                    m = "0" + date.getMinutes();
                }
                date = `${date.getHours()}:${m}`;
                this.messegeText = this.messegeText.trim();
                let newMessage = {
                    text: this.messegeText,
                    user: this.username,
                    date,
                };
                this.messeges.unshift(newMessage);
                socket.emit("chat-message", this.messeges);
                await axios({
                    method: "POST",
                    url: this.$apiUrl + "api/msg",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    data: {
                        text: this.messegeText.trim(),
                        user: this.username,
                        date: date,
                    },
                });
                this.messegeText = "";
            }
        },
        logOut() {
            let userData = {
                username: "",
                isUserAuth: false,
            };
            socket.emit("logout-user", this.username);
            // localStorage.setItem('countOnline', JSON.stringify({online: this.countOnline}))
            localStorage.setItem("userData", JSON.stringify(userData));
            setTimeout(() => this.$router.push({ path: "/" }), 600);
            this.anim = false;
        },
    },
    computed: {
        onlineValue() {
            console.log(this.countOnline);
            return JSON.parse(localStorage.getItem("countOnline")).online;
        },
    },
    mounted() {
        this.anim = true;
    },
    created() {
        (() => {
            window.onbeforeunload = () => {
                socket.emit("leave", this.username);
            };
            let userData = JSON.parse(localStorage.getItem("userData"));
            if (userData) {
                this.username = userData.username;
            }
            axios({
                method: "GET",
                url: this.$apiUrl + "api/msgs",
            }).then((data) => {
                this.messeges = data.data.reverse();
            });
        })();
        socket.on("change-online", (data) => {
            this.countOnline = data;
            console.log(data);
            localStorage.setItem("countOnline", JSON.stringify({ online: data }));
        });
        socket.on("chat-message", (data) => {
            this.messeges = data;
        });
    },
};
</script>

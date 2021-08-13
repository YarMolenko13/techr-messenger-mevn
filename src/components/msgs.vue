<template>
        <div
            :class="{
            msg__mine: msg.user === username,
            msg__other: msg.user !== username,}"
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
</template>

<script>
export default {
    name: "msgs",
    // props: {
    //     messegesP: {
    //         type: Object,
    //         default: () => {},
    //     },
    //     username: String,
    // },
    props: ['messegesProps', 'username'],
    data() {
        return {
            messeges: this.messegesProps
        }
    },
    mounted() {
        console.log(this.messegesProps)
    }
};
</script>

<style lang="scss">
.msg {
    margin-top: 21px;
    font-family: Raleway;
    display: flex;
    flex-direction: column;
    padding: 6px 13px 8px 13px;
    &__usn {
        font-size: 14px;
        text-decoration: underline;
        margin-bottom: 3px;
        font-weight: 300;
        color: #161525;
        &._other {
            align-self: flex-start;
        }
        &._mine {
            align-self: flex-end;
        }
    }
    &__text {
        font-size: 16px;
        &._other {
            align-self: flex-start;
        }
        &._mine {
            align-self: flex-end;
        }
    }
    &__date {
        transform: translateY(100%);
        font-size: 12px;
        opacity: 0.6;
        position: absolute;
        &._other {
            right: 15px;
        }
        &._mine {
            left: 15px;
        }
    }
    &__mine {
        background: #e4f1f8;
        align-self: flex-end;
        border-radius: 15px 0 15px 15px;
    }
    &__other {
        align-self: flex-start;
        background: #efefef;
        border-radius: 0 15px 15px 15px;
    }
}
</style>

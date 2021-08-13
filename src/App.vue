<template>
    <component :is="layout"> </component>
</template>

<script>
import mainLayout from "./layout/main-layout";
import chatLayout from "./layout/chat-layout";

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        mainLayout,
        chatLayout,
    },
    computed: {
        layout() {
            return (this.$route.meta.layout || "empty") + "-layout";
        },
    },
};
</script>

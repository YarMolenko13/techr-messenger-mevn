<template>
    <div class="main-layout chat-layout">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "chat-layout"
}
</script>

<style lang="scss">
    .chat-layout {
        min-height: auto;
    }
</style>

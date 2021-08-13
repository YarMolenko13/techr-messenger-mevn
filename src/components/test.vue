<template>
    <div id="list-demo">
        <button @click="add">Add</button>
        <button @click="remove">Remove</button>
        <transition-group name="list">
    <span v-for="item in items" :key="item" class="list-item">
      {{ item }}
    </span>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "test",
    data() {
        return {
            items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            nextNum: 10
        }
    },
    methods: {
        randomIndex() {
            return Math.floor(Math.random() * this.items.length)
        },
        add() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove() {
            this.items.splice(this.randomIndex(), 1)
        }
    }
}
</script>

<style scoped>

</style>
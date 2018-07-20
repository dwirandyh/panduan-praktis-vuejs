<template>
    <input type="text" placeholder="Masukan nama anda" @blur="validasi"/>
</template>

<script>
    export default {
        name: "EventComponent",
        methods: {
            validasi() {
                this.$emit('applied');
            }
        }
    }
</script>

<style scoped>

</style>
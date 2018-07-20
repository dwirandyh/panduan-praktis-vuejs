<template>
    <div>
        <h3>Component with props</h3>
        <h4>{{ judul }}</h4>
        <p>{{ isi }}</p>
    </div>
</template>

<script>
    export default {
        name: "PropComponent",
        props: {
            judul: {
                type: String,
                required: true
            },
            isi: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="about">
        <h1>v-Bind</h1>
        <p>
            v-bind bekerja dengan melakukan binding (mengikat) data nilai, sehingga data tersebut daapt dipanggil ataudigunakan secara dinamis, singkatnya v-bind memiliki fungsi mendinamiskan atribut html
        </p>
        <h3>Binding Image Src & Style</h3>
        <img :src="logo" :style="{ width: lebar + 'px'}">
        <h3>Binding Class</h3>
        <p :class="rubah">Hello Vue</p>
        <h3>Binding Tooltip</h3>
        <img :src="logo" :title="keterangan">
    </div>
</template>
<script>
    export default {
        data() {
            return {
                logo: './logo.png',
                lebar: 100,
                rubah: 'warna',
                keterangan: 'Deskripsi gambar'
            }
        }
    }
</script>
<style>
    .warna {
        color:red;
    }
</style>

<template>
    <div class="about">
        <h1>Event Handler</h1>
        <p>
            Menangkap event yang dilakukan oleh user, kemudian menjalankan suatu kode javascript tertentu yang telah
            dibuat
        </p>
        <h3>Button On Click</h3>
        <button @click="keterangan = 'Tombol di klik'">{{ keterangan }}</button>
        <button @click="buttonClick">Click Me</button>
        <h3>Event handler ketika tombol di klik</h3>
        <input type="text"
               @keyup.enter="enter"
               @keyup.esc="esc"
               @keyup.space="space"
               @keyup.up="up"
               @keyup.down="down"
               @keyup.right="right"
               @keyup.left="left"
               @keyup.ctrl.65="ctrlA"
               v-on:click.left="leftClick"
        >
        {{ hasil }}
        <h3>Toggle</h3>
        <button @click="tampak=!tampak">Toggle</button>
        <b v-show="tampak">Tulisan ditampilkan</b>
        <h3>Toggle dengan v-bind key</h3>
        <button
                :key="isEditing"
                @click="isEditing = !isEditing"
        >
            {{ isEditing ? 'Save' : 'Edit' }}
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                keterangan: 'Click Me',
                hasil: '',
                tampak: false,
                isEditing: true
            }
        },
        methods: {
            buttonClick: function () {
                alert('Tombol di klik');
            },
            enter: function () {
                this.hasil = 'Enter'
            },
            esc: function () {
                this.hasil = 'Esc'
            },
            space: function () {
                this.hasil = 'Space'
            },
            up: function () {
                this.hasil = 'up'
            },
            down: function () {
                this.hasil = 'down'
            },
            right: function () {
                this.hasil = 'right'
            },
            left: function () {
                this.hasil = 'left'
            },
            // 65 ada kode ascii
            ctrlA: function () {
                this.hasil = 'Ctrl + A'
            },
            leftClick: function () {
                this.hasil = 'Klik Kiri'
            }
        }
    }
</script>
<style>
    .warna {
        color: red;
    }
</style>

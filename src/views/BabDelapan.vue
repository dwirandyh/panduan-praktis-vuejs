<template>
    <div class="about">
        <h1>Component</h1>
        <p>
            Vue js memberikan keleluasaan untuk mendefiniskan filter yang dapat digunakan untuk melakukan format pada
            teks. Filter digunakan pada dua tempat, yaoitu pada mustache interpolation dan expression v-bind. filter
            disisipkan pada akhir dari javascript expression dengan diawali dengan tanda | (pipa)
        </p>
        <h3>Component Example</h3>
        <bold-component></bold-component>
        <bold-component></bold-component>
        <bold-component></bold-component>
        <slot-component>Isi slot</slot-component>

        <h3>Component, Slot & Array</h3>
        <daftar-component></daftar-component>

        <h3>Passing Data dengan Props</h3>
        <prop-component judul="Cinta" isi="Love is bla bla bla"></prop-component>

        <h3>Component + Event Handler</h3>
        <event-component @applied="validasi"></event-component>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                nama: 'Dwi Randy Herdinanto',
                pesan: 'Anda telah memasukan nama'
            }
        },
        methods: {
            validasi: function(){
                alert('alert');
            }
        },
        filters: {
            kecil(value) {
                if (!value) return ''
                value = value.toString();
                return value.toLowerCase();
            },
            flipWord(value){
                if (!value) return ''
                value = value.toString();
                return value.split(' ').reverse().join(' ');
            },
            flipCharacter(value){
                if (!value) return ''
                value = value.toString();
                return value.split('').reverse().join('');
            }
        }
    }
</script>
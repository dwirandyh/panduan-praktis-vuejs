<template>
    <div class="about">
        <h1>Filter</h1>
        <p>
            Vue js memberikan keleluasaan untuk mendefiniskan filter yang dapat digunakan untuk melakukan format pada
            teks. Filter digunakan pada dua tempat, yaoitu pada mustache interpolation dan expression v-bind. filter
            disisipkan pada akhir dari javascript expression dengan diawali dengan tanda | (pipa)
        </p>
        <h3>Global Filter</h3>
        <p>
            Pendifinisian filter menggunakan Vue.filter
        </p>
        <p>Huruf kapital : {{ nama | kapital }}</p>
        <p>Huruf kecil : {{ nama | kecil }}</p>
        <p>Flip Word : {{ nama | flipWord }}</p>
        <p>Flip Character {{ nama | flipCharacter}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nama: 'Dwi Randy Herdinanto'
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
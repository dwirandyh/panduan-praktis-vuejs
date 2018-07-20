<template>
    <div>
        <h4>Daftar Siswa</h4>
        <ul>
            <siswa-component v-for="siswa in daftarSiswa" :key="siswa.nama">{{ siswa.nama }}</siswa-component>
        </ul>
    </div>
</template>

<script>
    import SiswaComponent from "./SiswaComponent";

    export default {
        name: "DaftarComponent",
        components: {SiswaComponent},
        data: function () {
            return {
                daftarSiswa: [
                    {nama: 'dwi', kelas: 'XII'},
                    {nama: 'randy', kelas: 'XI'},
                    {nama: 'herdinanto', kelas: 'X'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
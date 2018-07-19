<template>
    <div class="about">
        <h1>BAB 3 Computed, Methods & Watcher</h1>
        <h3>Computed</h3>
        <p>Hasil dari {{ bilangan1 }} + {{ bilangan2 }} = {{ jumlah }}</p>
        <h3>Method</h3>
        <p>Hasil dari {{ bilangan1 }} + {{ bilangan2 }} = {{ total }}</p>
        <button v-on:click="proses">Hitung</button>
        <h3>Watcher</h3>
        <p>Keterangan : {{ keterangan }}</p>
        <p><input type="text" v-model="isi"> {{ keteranganAksi }}</p>
        <h3>Watcher Form Login</h3>
        <input type="text" v-model="password"/>
        <input type="text" v-model="passwordRepeat"/>
        {{ keteranganLogin }}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                bilangan1: 3,
                bilangan2: 5,
                total: 0,
                keterangan: '',
                keteranganAksi: '',
                isi: '',
                keteranganLogin: 'Keterangan',
                password: '',
                passwordRepeat: '',
            }
        },
        // untuk menangani jika ada event yang dilakukan
        methods: {
            proses() {
                return this.total = this.bilangan2 + this.bilangan1;
            },
            mengetik() {
                if (this.isi !== '') {
                    this.keteranganAksi = 'Sedang mengetik... ';
                } else {
                    this.keteranganAksi = '';
                }
            },

            cekPassword() {
                if (this.password === this.passwordRepeat){
                    this.keteranganLogin = 'Password sama';
                }else{
                    this.keteranganLogin = 'Password yang anda masukan berbeda';
                }
            }
        },
        // mengolah value yang berasal dari data atau dari v-model, menyimpan value
        // perhitungan tersebut pada cache mengembalikan nilainya dan mengevaluasi perubahaannya
        computed: {
            jumlah: function () {
                return this.bilangan1 + this.bilangan2;
            }
        },
        // melihat perubahaan yang terjadi saat suatu aksi dilakukan
        watch: {
            // watch data
            total: function () {
                if (this.total % 2 == 0) {
                    this.keterangan = 'Genap';
                } else {
                    this.keterangan = 'Ganjil';
                }
            },

            //watch memanggil method
            isi: 'mengetik',

            passwordRepeat: 'cekPassword'
        }
    }
</script>

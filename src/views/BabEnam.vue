<template>
    <div class="about">
        <h1>Array</h1>
        <p>
            Array adalah tipe data yang dapat menampung beberapa nilai dan tipe data dalam satu buah variabel data,
            array dapat menampung tipe data string, numerik, boolean, objek atau yang lainnya
        </p>
        <h3>Array</h3>
        <input type="text" v-model="isi">
        <button @click="tambah">Tambah</button>
        <ul>
            <li v-for="(row, index) in kendaraan" :key="index">
                <button @click="hapus">Hapus</button>
                {{ row }}
            </li>
        </ul>
        <h3>Array Multidimensi</h3>
        <h4>Seluruh Barang</h4>
        <ul>
            <li v-for="(row, index) in barang" :key="index">{{ index }}. {{ row.jenis }} - {{ row.merk }}</li>
        </ul>
        <h4>Barang Ada</h4>
        <ul>
            <li v-for="(row, index) in barangAda" :key="index">{{ index }}. {{ row.jenis }} - {{ row.merk }}</li>
        </ul>
        <h3>Looping nomor berutuan</h3>
        <b v-for="x in 10" :key="x">
            {{ x }}
        </b>
        <br>
        <b v-for="x in 10" v-if="x % 2 == 0" :key="x">
            {{ x }}
        </b>
        <h3>Pencarian Array Data Barang</h3>
        <input type="text" v-model="cari">
        <button @click="cari">Cari</button>
        <h4>Hasil pencarian</h4>
        <ul>
            <li v-for="(row, index) in hasilCari" :key="index">{{ index }}. {{ row.jenis }} - {{ row.merk }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isi: '',
                kendaraan: ['Mobil', 'Motor'],
                barang: [
                    {
                        jenis: 'Mie rebus',
                        merk: 'Indomie',
                        stok: false,
                    },
                    {
                        jenis: 'Mie Goreng',
                        merk: 'Indomie',
                        stok: true,
                    }
                ],
                cari: ''
            }
        },
        methods: {
            tambah: function () {
                this.kendaraan.push(this.isi);
            },
            hapus: function (index) {
                this.kendaraan.splice(index, 1);
            }
        },
        // seleksi hasil array dengan computed
        computed: {
            barangAda(){
                return this.barang.filter(b => b.stok);
            },
            hasilCari(){
                return this.barang.filter((row) => {
                    return (row.jenis.match(this.cari) || row.merk.match(this.cari))
                });
            }
        }
    }
</script>
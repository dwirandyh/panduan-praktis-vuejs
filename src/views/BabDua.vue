<template>
    <div class="about">
        <h1>BAB 2 Conditional (Pengandaian)</h1>
        <table>
            <thead>
            <tr>
                <td>Directive IF</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>IF</td>
                <td><b v-if="tampil">{{ pesan }}</b></td>
            </tr>
            <tr>
                <td>Negasi IF</td>
                <td><b v-if="!tampil">{{ pesan }}</b></td>
            </tr>
            <tr>
                <td>Nilai pada v-if</td>
                <td><b v-if="isi == 'ada'">{{ pesan }}</b></td>
            </tr>
            <tr>
                <td>If Else Conditional</td>
                <td>
                    <b v-if="jenisKelamin == 'Laki - Laki' && tampil">Laki - Laki</b>
                    <b v-else-if="jenisKelamin == 'Perempuan'">Perempuan</b>
                    <b v-else>Lainnya</b>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isi: 'ada',
                jenisKelamin: 'Laki - Laki',
                tampil: true,
                pesan: 'Belajar conditional',
                pesanElse: 'Belajar else conditional'
            }
        }
    }
</script>

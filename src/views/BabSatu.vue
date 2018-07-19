<template>
    <div class="home">
        <h3>BAB 1 Dasar Dasar Vue JS</h3>
        <table>
            <tr>
                <td colspan="2">
                    Menampilkan Data
                </td>
            </tr>
            <tr>
                <td>Mustaches</td>
                <td>{{ pesan }}</td>
            </tr>
            <tr>
                <td>V-Text</td>
                <td><div v-text="pesan"></div> </td>
            </tr>
            <tr>
                <td>V-HTML</td>
                <td><div v-html="pesanHtml"></div> </td>
            </tr>
        </table>
        <table>
            <thead>
            <tr>
                <td>Directive Rendering Tipe Data Lain</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <P>Text : {{ text }}</P>
                    <p>Angka Bulat : {{ angkaBulat }}</p>
                    <p>Angka Ganjil : {{ angkaGanjil }}</p>
                    <p>Pilihan Benar : {{ pilihanBenar }}</p>
                    <p>Pilihan Salah : {{ pilihanSalah }}</p>
                    <p>Array : {{ array }}</p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                pesan: 'Hello Vue',
                pesanHtml: '<b>Hello</b> <i>World</i>',
                text: 'Ini tipe data text',
                angkaBulat: 100,
                angkaGanjil: 3.5,
                pilihanBenar: true,
                pilihanSalah: false,
                array: ['Satu', 'Dua', 'Tiga']
            }
        }
    }
</script>

<template>
    <div class="about">
        <h1>Playing With Form</h1>
        <table>
            <tr>
                <td>Textbox</td>
                <td><input type="text" v-model="pesanTextBox"></td>
                <td>{{ pesanTextBox }}</td>
            </tr>
            <tr>
                <td>Textarea</td>
                <td><textarea v-model="pesanTextArea"></textarea></td>
                <td><span style="white-space: pre-line">{{ pesanTextArea}}</span></td>
            </tr>
            <tr>
                <td>Radio Button</td>
                <td><input type="radio" v-model="pilihanRadio" value="Laki - Laki">Laki - Laki <input type="radio"
                                                                                                      v-model="pilihanRadio"
                                                                                                      value="Perempuan">Perempuan
                </td>
                <td>{{ pilihanRadio }}</td>
            </tr>
            <tr>
                <td>Checkbox</td>
                <td><input type="checkbox" v-model="hobi" value="Code">Code <input type="checkbox" v-model="hobi"
                                                                                   value="Eat">Eat <input
                        type="checkbox" v-model="hobi" value="Repeat">Repeat
                </td>
                <td>{{ hobi }}
                    <ul>
                        <li v-for="row in hobi">{{ row }}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>Dropdown</td>
                <td><select v-model="dropdownKelamin">
                    <option value="Laki - Laki">Laki - Laki</option>
                    <option value="Perempuan">Perempuan</option>
                </select></td>
                <td>{{ dropdownKelamin }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pesanTextBox: '',
                pesanTextArea: '',
                pilihanRadio: '',
                hobi: [],
                dropdownKelamin: ''
            }
        }
    }
</script>

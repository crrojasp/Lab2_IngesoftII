<template>
    <div class="create-course">
        <h2>Crear un nuevo curso</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="name">Nombre del curso:</label>
                <input type="text" id="name" v-model="course.name">
            </div>
            <div>
                <label for="description">Descripción del curso:</label>
                <textarea id="description" v-model="course.description"></textarea>
            </div>
            <div>
                <button type="submit">Crear curso</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { getAuthenticationToken } from '@/dataStorage';

export default {
    name: 'CreateCourse',
    data() {
        return {
            course: {
                name: '',
                description: ''
            }
        };
    },
    methods: {
        submitForm() {
            const requestPath = '/profesor/crear-curso';
            const config = { headers: { Authorization: 'Bearer ' + getAuthenticationToken() } };
            axios.post(this.$store.state.backURL + requestPath, this.course, config)
                .then(response => {
                    if (response.status !== 201) {
                        alert('Error en la respuesta del servidor');
                    } else {
                        this.course = { name: '', description: '' };
                        alert('El curso ha sido creado exitosamente');
                    }
                })
                .catch(error => {
                    alert('Error con la conexión al servidor');
                });
        }
    }
};
</script>

<style scoped>
.create-course {
    margin: 20px;
}

.create-course label {
    display: block;
    margin-bottom: 5px;
}

.create-course input[type="text"],
.create-course textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
}

.create-course button[type="submit"] {
    padding: 5px 10px;
    background-color: #3f51b5;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.create-course button[type="submit"]:hover {
    background-color: #303f9f;
}</style>
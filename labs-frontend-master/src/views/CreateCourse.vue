<template>
    <div>
        <form @submit.prevent="createCourse">
            <input type="text" v-model="courseName" placeholder="Nombre del curso">
            <input type="number" v-model="durationHours" placeholder="Duración en horas">
            <button type="submit">Crear curso</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import {getAuthenticationToken} from '@/dataStorage';

export default {
    name: "create-course",
    components: {},
    data() {
        return {
            courseName: '',
            durationHours: null,
        }
    },

    methods: {
        createCourse() {
            const coursePojo = {
                courseName: this.courseName,
                durationHours: this.durationHours,
            };

            axios.post('/profesor/crear-curso', coursePojo)
                .then(response => {
                    console.log('Curso creado exitosamente');
                    console.log(response); // agregar para verificar la respuesta recibida
                    this.$router.push({ name: 'courses' }); // redirigir a la página de cursos
                })
                .catch(error => {
                    console.log('Error al crear el curso:', error);
                    // hacer algo aquí, como mostrar un mensaje de error
                });
        },
    },
};
</script>
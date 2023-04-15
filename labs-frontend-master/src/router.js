import Vue from 'vue';
import Router from 'vue-router';
import SignUp from "./views/SignUp";
import Login from "./views/Login";
import Home from "./views/Home";
import AddRole from "./components/AddRole";
import Courses from '@/views/Courses';
import Roles from "@/components/Roles";
import createCourse from "@/views/CreateCourse.vue"; // importa el componente

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/registro",
      name: "signup",
      component: SignUp
    },
    {
      path: "/",
      alias: "/iniciar-sesion",
      name: "login",
      component: Login
    },
    {
      path: '/mis-cursos',
      name: 'courses',
      component: Courses
    },
    {
      path: '/profesor/crear-curso', // define la ruta para CreateCourse.vue
      name: 'create-course',
      component: createCourse
    },
    {
      path: "/principal",
      name: "home",
      component: Home,
      children: [
        {
          path: "nuevo-rol",
          name: "add-role",
          component: AddRole
        },
        {
          path: "roles",
          name: "roles",
          component: Roles
        }
      ]
    }
  ]
});

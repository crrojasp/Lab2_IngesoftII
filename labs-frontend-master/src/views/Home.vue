<template>
  <div class="container-fluid mt-2">
    <h1>Bienvenido al dummy</h1>
    <div class="row">
      <router-view></router-view>
    </div>
    <div class="row mt-2">
      <router-link to="/mis-cursos" class="btn btn-primary ">Mis cursos</router-link>
    </div>
    <div>
      <!-- <add-role></add-role> -->
      <roles></roles>
    </div>
  </div>
</template>


<script>
  import {getAuthenticationToken} from '@/dataStorage';
  import AddRole from '@/components/AddRole.vue';
  import Roles from '@/components/Roles.vue';
    
  export default{
    name: "Home",
    components: {
      AddRole,
      Roles,
    },
    beforeCreate( ){
      if( !getAuthenticationToken( ) ){
        this.$router.push( {name: 'login'} )
      }
    }
  }
</script>

<style>

</style>

<template>
  <div class="body">
      <div class="encabezado">

      </div>
      <div class="content-body">
         <div class="info-body">
            <div class="descripcion">
               {{home[0].descripcion}} 
            </div>
            <div class="img-body">
               <img class="img" src="https://img.freepik.com/foto-gratis/mesa-decorada-celebracion-boda_181624-4606.jpg?w=900">
            </div>
         </div>
        <Formulario/>
      </div>
  </div>
</template>

<script>
import cerasusServices from '../services/cerasusServices'
import Formulario from '../components/Formulario.vue'

export default {
  data(){
    return {
      home: null,
      producto: null
    }
  },
  mounted(){
    this.getHome()
    this.getProducto()
  },
  methods:{
    getHome(){
      cerasusServices.getHome().then(response => {
        this.home = response.data;
      })
    },
    getProducto(){
      cerasusServices.getProducto().then(response => {
        this.producto = response.data;
      })
    }
  },
  components: {
    Formulario
  }
}

</script>

<style>
.body{
  display: block;
  width: 100%;
  height: 1000px;
}

.encabezado{
  display: flex;
  height: 355px;
  width: 100%;
  background-image: url(../assets/Boda/boda2.jpg);
  background-position: center center;
  background-size: 1300px;
}

.content-body{
  display: flex;
}

.info-body {
  display: block;
  width: 55%;
  height: 645px;
}

.descripcion{
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Didact Gothic', sans-serif;
  text-align: center;
  padding: 10px 10px;
}

.img-body{
  display: flex;
  width: 100%;
  height: 435px;
  align-items: center;
  justify-content: center;
}

.img{
  width: 80%;
}

</style>
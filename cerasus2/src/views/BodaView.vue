<template>
    <div class="body-evento">
        <div class="encabezado-boda">

        </div>
        <div class="content-body">
            <div class="info-body">
                <div class="descripcion">
                    {{boda[0].descripcion}}
                </div>
                <div class="img-body">
                    <img class="img" src="../assets/Boda/boda3.jpg">
                </div>
            </div>
            <Formulario/>
        </div>
        <div class="mas-img">
            <img class="mas-img-evento" src="../assets/Boda/boda8.jpg">
            <img class="mas-img-evento" src="../assets/Boda/boda7.jpg"> 
        </div>
        <Colaboradores/>
    </div>
</template>

<script>
import bodaServices from '../services/bodaServices'
import Colaboradores from '../components/Colaboradores.vue';
import Formulario from '../components/Formulario.vue'

export default {
    data(){
        return {
            boda: null
        }
    },
    mounted(){
        this.getBoda()
    },
    methods:{
        getBoda(){
            bodaServices.getBoda().then(response => {
                this.boda = response.data;
            })
        }
    },
    components: {
    Colaboradores,
    Formulario
  }
}
</script>

<style>

.body-evento{
  display: block;
  width: 100%;
  height: 2180px;
  font-family: 'Didact Gothic', sans-serif;
}

.encabezado-boda {
  display: flex;
  height: 355px;
  width: 100%;
  background-image: url('../assets/Boda/boda1.jpg');
  background-position: center center;
  background-size: 1300px;
}

.mas-img {
    display: flex;
    width: 100%;
    height: 400px;
}

.mas-img-evento{
   width: 100%;
}

</style>
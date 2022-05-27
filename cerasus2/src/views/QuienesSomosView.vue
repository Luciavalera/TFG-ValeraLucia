<template>
  <div class="body-quienes">
      <div class="encabezado-quienes">

      </div>
      <div class="content-quienes">
            <div class="perfil">
                <p class="title-qs"><b>EQUIPO</b></p>
                <div class="content-perfil">
                    <div class="content-perfil-foto">
                        <b>{{equipo[0].nombre}}</b>
                        <img class="foto" src="../assets/Equipo/raquelMunoz.jpeg">
                        {{equipo[0].puesto}}
                        <br>
                        <div class="lema"><i>'{{equipo[0].lema}}'</i></div>
                    </div>
                    <div class="content-perfil-foto">
                        <b>{{equipo[1].nombre}}</b>
                        <img class="foto" src="../assets/Equipo/soniaFernandez.jpg">
                        {{equipo[1].puesto}}
                        <br>
                        <div class="lema"><i>'{{equipo[1].lema}}'</i></div>
                    </div>
                    <div class="content-perfil-foto">
                        <b>{{equipo[2].nombre}}</b>
                        <img class="foto" src="../assets/Equipo/martaPardo.jpg">
                        {{equipo[2].puesto}}
                        <br>
                        <div class="lema"><i>'{{equipo[2].lema}}'</i></div>
                    </div>
                    <div class="content-perfil-foto">
                        <b>{{equipo[3].nombre}}</b>
                        <img class="foto" src="../assets/Equipo/marcosNavarro.jpg">
                        {{equipo[3].puesto}}
                        <br>
                        <div class="lema"><i>'{{equipo[3].lema}}'</i></div>
                    </div>
                </div>
            </div>
            <Colaboradores/>
            <div class="filosofia">
                <p class="title-qs"><b>NUESTRA FILOSOFÍA</b></p>
                <div class="color-fuente">{{filosofia[0].descripcion}}</div>
            </div>
      </div>
      
  </div>
</template>

<script>
import quienesSomosServices from '../services/quienesSomosServices'
import Colaboradores from '../components/Colaboradores.vue'

export default {
    data(){
        return {
            filosofia: null,
            equipo: null
        }
    },
    mounted(){
        this.getFilosofia()
        this.getEquipo()
    },
    methods:{
        getFilosofia(){
            quienesSomosServices.getFilosofia().then(response => {
                this.filosofia = response.data;
            })
        },
        getEquipo(){
            quienesSomosServices.getEquipo().then(response => {
                this.equipo = response.data;
            })
        }
    },
    components: {
    Colaboradores
    }
}

</script>

<style>

.body-quienes{
    display: block;
    width: 100%;
    height: 1750px;
    font-family: 'Didact Gothic', sans-serif;
}

.encabezado-quienes{
    display: flex;
    height: 355px;
    width: 100%;
    background-image: url(../assets/Equipo/quienesSomos.jpg);
    background-position: center center;
    background-size: 1300px;
}

.content-quienes{
    display: block;
    text-align: center;
    width: 100%;
    height: 1445px;
}

.title-qs{
    font-size: 30px;
    color:white;
}

.perfil{
    height: 405px;
    width: 100%;
    padding-top: 30px;
    background-color: black;
}

.content-perfil{
    display: flex;
    justify-content: space-evenly;
    color: white
}

.content-perfil-foto{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 18%;
}

.foto{
    width: 90%;
    padding: 10px;
}

.lema{
    font-size: 15px;
    color: rgb(177 177 177);
}

.filosofia{ 
    height: 250px;
    width: 100%;
    font-size: 20px;
    padding: 30px 40px;
    background-color: black;
}

.color-fuente{
    color: white;
}

</style>
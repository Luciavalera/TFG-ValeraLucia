<template>
    <div class="body-contacto">
        <div class="content-body">
            <div class="info-contacto">
                <div class="descripcion-contacto">
                    
                </div>
                <div class="maps">
                    
                </div>
            </div>
            <Formulario/>
        </div>
    </div>      
</template>

<script>
import contactoServices from '../services/contactoServices'
import Formulario from '../components/Formulario.vue'

export default {
    data(){
        return {
            contacto: null
        }
    },
    mounted(){
        this.getContacto()
    },
    methods:{
        getContacto(){
            contactoServices.getContacto().then(response => {
                this.contacto = response.data;
            })
        }
    },
    components: {
        Formulario
    }
}

</script>

<style>

.body-contacto{
    width: 100%;
    height: 700px;
}

.info-contacto{
    display: block;
    width: 50%;
    height: 645px;
    background-color: rgb(238, 175, 233);
}

.descripcion-contacto{
  display: flex;
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: 'Didact Gothic', sans-serif;
  text-align: center;
  padding: 10px 10px;
}

</style>
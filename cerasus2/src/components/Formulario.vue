<template>
    <div class="formulario">
       <form class="presupuesto" action="#" method="get" name="formulario">
            <label for="nombre-apellido">Nombre y Apellidos</label>
            <input type="text" name="nombre" id="nombre" placeholder="Escribe tu nombre y apellidos" required />
            
            <label for="evento">Evento</label>
           <select type="text" name="evento" id="evento" placeholder="Elige una opción" require>
                <option selected="selected">Elige una opción</option>
                <option>Boda</option>
                <option>Comunión</option>
                <option>Evento Corporativo</option>
            </select>
            
            <label for="invitados">Invitados</label>
           <input type ="text" name="invitados" id="invitados" placeholder="Invitados para el evento" required />
            
           <label for="Comida">Comida</label>
            <select type ="text" name="invitados" id="invitados" placeholder="Elige una opción" required>
                <option selected="selected">Elige una opción</option>
                <option>Menú</option>
                <option>Catering</option>
            </select>

            <label for="Lugar">Lugar de celebración</label>
            <select type ="text" name="lugar" id="lugar" placeholder="Elige una opción" required>
                <option selected="selected">Elige una opción</option>
                <option>Habitat Sella</option>
                <option>Castillo Bonavia</option>
                <option>Jardines del Monasterio</option>
                <option>Villa Santa Ana</option>
            </select>

            <label for="mensaje">Mensaje (opcional)</label>
            <textarea name="mensaje" for="mensaje" placeholder="Puedes escribir hasta 500 caracteres"></textarea>
               
            <input type="submit" name="enviar" value="Presupuesto estimado"/>
        </form>
    </div>
</template>

<script>

export default {
    name: 'Formulario'
}
</script>

<style>

.formulario {
  display: flex;
  width: 45%;
  height: 645px;
}

.presupuesto {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 600px;
  margin: auto;
  padding: 24px;
	border-radius: 10px;
  background-color: rgb(232, 223, 238);
  font-family: 'Didact Gothic', sans-serif;
}

form label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

form select[type="text"],
form input[type="text"] {
	padding: 0 10px;
	border: none;
	border-radius: 3px;
	background-color:#ffffff;
  margin-bottom: 10px;
  height: 35px;
}

form input[type="submit"] {
	width: 100%;
	padding: 8px 16px;
	margin-top: 32px;
  margin: auto;
	border: 1px solid #000;
	border-radius: 5px;
	color:rgb(255, 255, 255);
	background-color:#000;
  cursor: pointer;
}  

textarea {
	width: 100%;
	height: 70px;
  padding: 3px 10px;
	border: 1px solid #ffffff;
	border-radius: 3px;
	background-color:#ffffff;			
	margin: 3px 0;
}

</style>
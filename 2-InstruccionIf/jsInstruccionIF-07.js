/* Rodriguez Mathias Ezequiel DIV E
E/if ej7*/

function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseFloat(edad);

	if (edad < 18 && estadoCivil !=("Soltero")) 
	{
		alert("Es muy pequeño para NO ser soltero");
	}

	alert(estadoCivil);
	

}//FIN DE LA FUNCIÓN

/* 
estadoCivil = estadoCivil.toLowerCase()
*/
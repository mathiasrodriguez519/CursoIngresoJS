/* Rodriguez Mathias Ezequiel DIV E
E/if ej3*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseFloat(edad);

	if (edad > 17) 
	{

		alert("es mayor de edad");
		
	}

	else 
	{

		alert("es menor de edad");

	}

}//FIN DE LA FUNCIÓN
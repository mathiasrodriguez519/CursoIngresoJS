/* Rodriguez Mathias Ezequiel DIV E
E/switch ej8*/

function mostrar()
{
	var destino = txtIdDestino.value;
	var mensaje

	switch(destino)
	{
		case "Bariloche":
		case "Ushuaia":
		mensaje = "Hace frio";
		break;
		case "Cataratas":
		case "Mar del plata":
		mensaje = "Hace calor"
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
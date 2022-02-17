/* Rodriguez Mathias Ezequiel DIV E
E/switch ej7*/

function mostrar()
{
	var destino = txtIdDestino.value;
	var mensaje;

	switch(destino)
	{
		case "Bariloche":
		mensaje = "Este destino queda al Oeste del pais";
		break;
		case "Cataratas":
		mensaje = "Este destino queda al Norte del pais";
		break;
		case "Mar del plata":
		mensaje = "Este destino queda al Este del pais";
		break;
		case "Ushuaia":
		mensaje = "Este destino queda al Sur del pais";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
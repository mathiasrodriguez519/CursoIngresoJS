/* Rodriguez Mathias Ezequiel DIV E
E/switch ej10*/

function mostrar()
{
	var estacion = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var mensaje;

	switch(estacion)
	{
		case "Invierno":
		switch (destino)
		{
			case "Bariloche":
			mensaje = "Se viaja";
			break;
			default:
			mensaje = "No se viaja";
		}
		break;

		case "Verano":
		switch (destino)
		{
			case "Mar del plata":
			case "Cataratas":
			mensaje = "Se viaja";
			break;
			default:
			mensaje = "No se viaja";
		}
		break;

		case "Otoño":
		mensaje = "Se viaja";
		break;

		case "Primavera":
		mensaje = "No se viaja";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* Rodriguez Mathias Ezequiel DIV E
E/switch ej1*/

function mostrar()
{
	var mes = txtIdMes.value;
	var mensaje;

	switch(mes)
	{
		case "Enero":
		mensaje = ("que comiences bien el año!!!");
		break;

		case "Marzo":
		mensaje = ("a clases!!!");
		break;

		case "Julio":
		mensaje = ("se vienen las vacaciones!!!");
		break;

		case "Diciembre":
		mensaje = ("Felices fiesta!!!");
		break;

		default:
		mensaje = ("No hay eventos en este mes");
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* Rodriguez Mathias Ezequiel DIV E
E/switch ej5*/

function mostrar()
{
	var hora = txtIdHora.value;
	var mensaje;

	switch(hora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
		mensaje = "Es de mañana";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
/* Rodriguez Mathias Ezequiel DIV E
E/switch ej4*/

function mostrar()
{
	var mes = txtIdMes.value;
	var mensaje;

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		mensaje = "Este mes tiene 31 dias";
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje = "Este mes tiene 30 dias";
		break;
		case "Febrero":
		mensaje = "Este mes tiene 28 dias";
		break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
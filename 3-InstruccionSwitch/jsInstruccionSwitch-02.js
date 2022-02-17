/* Rodriguez Mathias Ezequiel DIV E
E/switch ej2*/

function mostrar()
{
	var mes = txtIdMes.value;
	var mensaje;
	
	switch(mes)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
		mensaje = ("Ya pasamos el frio, ahora calor!!!");
		break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		mensaje = "Falta para el invierno";
		break;
		default:
		mensaje = "Abrigate que hace frio";
	}

alert(mensaje);


}//FIN DE LA FUNCIÓN
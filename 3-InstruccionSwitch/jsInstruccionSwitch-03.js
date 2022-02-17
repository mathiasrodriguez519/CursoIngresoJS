/* Rodriguez Mathias Ezequiel DIV E
E/switch ej3*/

function mostrar()
{
	var mes = txtIdMes.value;
	var mensaje;

	switch(mes)
	{
		case "Febrero":
		mensaje = "Este mes no tiene más de 29 días";
		break;
		default:
		mensaje = "Este mes tiene 30 o más días";
	}

	alert(mensaje);

	
}//FIN DE LA FUNCIÓN
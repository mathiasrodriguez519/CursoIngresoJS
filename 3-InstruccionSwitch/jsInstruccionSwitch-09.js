/* Rodriguez Mathias Ezequiel DIV E
E/switch ej9*/

function mostrar()
{
	var estacion = txtIdEstacion.value;
	var destino = txtIdDestino.value;
	var precio = 15000;
	var precioFinal;
	var descuentoAumento;
	var mensaje;

	switch(estacion)
	{
		case "Invierno":
		switch (destino)
		{ 
			case "Bariloche":
			descuentoAumento = 20/100;
			break;
			case "Cataratas":
			case "Cordoba":
			descuentoAumento = - 10/100;
			break;
			case "Mar del plata":
			descuentoAumento = - 20/100;
			break;
		}

		case "Verano":
		switch (destino)
		{
			case "Bariloche":
			descuentoAumento = - 20/100;
			break;
			case "Cataratas":
			case "Cordoba":
			descuentoAumento = 10/100;
			break;
			case "Mar del plata":
			descuentoAumento = 20/100;
			break;
		}

		default:
		switch (destino)
		{
			case "Cordoba":
			descuentoAumento = 0;
			break;
			default:
			descuentoAumento = 10/100;
		}
		
	}

	precioFinal = precio + (precio * descuentoAumento);

	alert("El precio final es de " + precioFinal);

}//FIN DE LA FUNCIÓN
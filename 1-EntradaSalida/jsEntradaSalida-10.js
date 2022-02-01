/*
Rodriguez Mathias Ezequiel DIV E
E/S ej10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declarar las variables
	var importe;
	var resultado;
	var descuento;

    //traer las variables por id
	importe = document.getElementById("txtIdImporte").value;

    //parsearlo
	importe = parseFloat(importe);

    //calculamos el descuento y el resultado
	descuento = importe *25/100;

	resultado = importe - descuento;

    //mostramos el resultado
	document.getElementById("txtIdResultado").value = resultado;

}

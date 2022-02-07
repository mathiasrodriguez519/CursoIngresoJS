/*
Rodriguez Mathias Ezequiel DIV E
E/S ej10 bis 
lo anterior mas.
se debe pedir el % por prompt

mostrar por alert el importe, el descuento, el importe con Descuento
"su importe es 1000 , el Descuento es de 250 y su importe con descuento es 750"
*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	var descuentoPorcentaje;

	importe = document.getElementById("txtIdImporte").value;

	importe = parseFloat(importe);

	descuentoPorcentaje = prompt("ingrese el porcentaje")

	descuento = importe *descuentoPorcentaje/100;

	resultado = importe - descuento;

	alert("Su importe es " + importe + ", el descuento es de " + descuento + " y su importe con descuento es " + resultado);

	document.getElementById("txtIdResultado").value = resultado;

}


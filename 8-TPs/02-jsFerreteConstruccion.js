/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
    var largo
    var ancho
    var radio
    var perimetro
    var cantidadHilos = 3
    var alambre 
    var pi = (3,14)
    var cemento
    var cal

function Rectangulo () 
{
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	radio = largo * ancho

	alambre = radio * cantidadHilos

	alert("Deben comprarse " + alambre + " alambres")

}
function Circulo () 
{
	radio = document.getElementById("txtIdRadio").value;

	radio = parseFloat(radio);

	perimetro = (pi * radio) * 2;

	alambre = perimetro * cantidadHilos;

	alert("Deben comprarse " + alambre + " alambres");



}
function Materiales () 
{
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	radio = largo * ancho;

	cemento = radio*2;
	cal = radio*3;

	cemento = parseFloat(cemento);
    cal=parseFloat(cal);

    alert("Para hacer el contrapiso deben comprarse " + cemento + " bolsas de cemento y " + cal + " bolsas de cal")

}

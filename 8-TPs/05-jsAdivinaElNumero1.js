/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numero;
var resultado;

function comenzar()
{
	numero = document.getElementById("txtIdNumero").value;

	numeroSecreto = Math.floor (Math.random() * (10 - 1 + 1) + 1);

	numero = parseFloat(numero);

	alert(numeroSecreto);

}

function verificar()
{
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	
	contadorIntentos = parseFloat(contadorIntentos);

	if(numeroSecreto == numero)
	{
		alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
	}
	else if(numero < numeroSecreto)
	{
		resultado = numeroSecreto - numero;

		alert("falta " + resultado + " para llegar al numero secreto");
	}
	else
	{
		resultado = numero - numeroSecreto;

		alert("se pasó por " + resultado);
	}

}
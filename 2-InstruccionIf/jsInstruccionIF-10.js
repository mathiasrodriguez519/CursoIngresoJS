/* Rodriguez Mathias Ezequiel DIV E
E/if ej10*/

function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor (Math.random() * (10 - 1 + 1) + 1);

	numeroRandom = parseInt(numeroRandom);

	if(numeroRandom > 8)
	{
		alert("EXCELENTE, " + numeroRandom);
	}
	else if(numeroRandom < 4)
	{
		alert("Vamos, la proxima se puede, " + numeroRandom);
	}
	else
	{
		alert("APROBÓ, " + numeroRandom);
	}

	

}//FIN DE LA FUNCIÓN
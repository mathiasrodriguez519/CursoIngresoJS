/* Rodriguez Mathias Ezequiel DIV E
E/if ej6*/


function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseFloat(edad);
	
	if(edad > 17)
	{
		alert ("Usted es mayor de edad");
	}
	else if(edad < 13)
	{
		alert ("Usted es un niño");
	} 
	else
	{
		alert ("Usted es un adolescente");
	}

}




//FIN DE LA FUNCIÓN

/*	if(edad > 17)
	{

		alert("Usted es mayor de edad");

	}

	if(edad > 12 && edad < 18)
	{
		
		alert("Usted es adolescente");

	}

	if(edad < 13)
	{
		
		alert("Usted es un niño");

	}

	*/

	/* 	if(edad > 17)

	{
		alert ("Usted es mayor de edad");
	}
	else
	{
		if(edad < 13)
		{
			alert("Usted es un niño");
		}
		else
		{
			alert("Usted es un adolescente");
		}


	*/
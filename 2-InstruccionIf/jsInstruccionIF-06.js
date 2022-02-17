/* Rodriguez Mathias Ezequiel DIV E
E/if ej6 bis
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/   

function mostrar()
{
	var edad;

	edad = prompt("ingrese su edad");
	edad = parseFloat(edad);

	if (edad > 70)
	{
		alert("usted es anciano");
	}
	else
	{
		if (edad > 12 && edad < 18)
		{
			alert("usted es adolescente");
		}
		else
		{
			if (edad > 17 && edad < 71)
			{
				alert("usted es mayor de edad");
			}
		}
		if (edad < 13 && edad > 3)
		{
			alert("usted es niño");
		}
		else
		{
			if(edad < 4 && edad >= 0)
			{
				alert("usted es bebe");
			}
		}

	}

	document.getElementById("txtIdEdad").value = edad;

}


/* Rodriguez Mathias Ezequiel DIV E
E/if ej6



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
*/




//FIN DE LA FUNCIÓN

//Otras formas
/*  
	if(edad > 17)
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


	/* 	
	if(edad > 17)

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
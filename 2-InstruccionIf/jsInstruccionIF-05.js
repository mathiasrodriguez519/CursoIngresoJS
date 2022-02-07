/* Rodriguez Mathias Ezequiel DIV E
E/if ej5*/

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;

	edad = parseFloat(edad);

	if (edad < 13 || edad > 17) 
	//if (!(edad > 12 && edad < 18) )
	{
		alert("no es adolescente")
	};



}//FIN DE LA FUNCIÓN

/* Rodriguez Mathias Ezequiel DIV E
E/if ej8*/

function mostrar()
{
	var edad;
	var estadoCivil;

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	edad = parseFloat(edad);

	if (edad > 17 && estadoCivil =="Soltero")
	{
		alert("Es soltero y no es menor");
	} 

}
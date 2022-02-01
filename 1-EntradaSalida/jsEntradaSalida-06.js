/*
Rodriguez Mathias Ezequiel DIV E
E/S ej6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaramos variables
	var numeroUno;
	var numeroDos;
	var resultado;

    //guardamos el nombre
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

    //parseInt para convertir el valor text a un valor numerico
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);

    resultado = numeroUno + numeroDos;

    //muestro los resultados
    alert("la suma es " + resultado);
	//document.write(resultado); forma 2
}

/*

entrada:
-prompt
-id

procesos:
+ - * /

salida:
-alert
-id
-document.write
*/



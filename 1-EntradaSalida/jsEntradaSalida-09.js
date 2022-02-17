/*
Rodriguez Mathias Ezequiel DIV E
E/S ej9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declarar las variables
	var sueldo;
	var resultado;
	var aumento;

    //traer las variables por id
	sueldo =document.getElementById("txtIdSueldo").value;
	//resultado = document.getElementById("txtIdResultado").value;

	sueldo = parseFloat(sueldo);
    
    //calculamos el aumento y el resultado
	//resultado = sueldo + sueldo*10/100; forma 1
	aumento = sueldo *10/100;
	resultado = sueldo + aumento;

    //mostramos el resultado
    document.getElementById("txtIdResultado").value = resultado

     /* 

    alert("El sueldo es " + sueldo);
    alert("El aumento es de %" + aumento)
    alert("Y el sueldo con aumento es de " + resultado) 

    */


}
/*4.	Rodriguez Mathias Ezequiel DIV E
E/S tp4
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 var precio = 35;
 var lamparas;
 var precioLamparas;
 var marca;
 var descuento;
 var resultado;
 var impuesto;


 function CalcularPrecio () 
 {

    lamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;

    precio = parseFloat(precio);

    lamparas = parseFloat(lamparas);

    precioLamparas = lamparas * precio;

    switch (lamparas)
    {
        case 5:
        switch (marca)
        {
            case "ArgentinaLuz":
            descuento = -40/100;
            break;
            default:
            descuento = -30/100;
        }
        break;

        case 4:
        switch (marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            descuento = -25/100;
            break;
            default:
            descuento = -20/100;
        }
        break;

        case 3:
        switch (marca)
        {
            case "ArgentinaLuz":
            descuento = -15/100;
            break;
            case "FelipeLamparas":
            descuento = -10/100;
            break;
            default:
            descuento = -5/100;
        }
        break;

        case 2:
        case 1:
        descuento = 0;
        break;

        default:
        descuento = -50/100;
    }

    resultado = precioLamparas + (precioLamparas * descuento);
    
    if(resultado > 120)
    {
        impuesto = precioLamparas *10/100;

        resultado = precioLamparas + impuesto;

        alert("Usted pago " + resultado + " de IIBB");
    }

    document.getElementById("txtIdprecioDescuento").value = resultado;

}














   /*IF

    //A 
    if(lamparas > 5)
    {
        descuento = precioLamparas*50/100;
    }
    //B
    else if(lamparas == 5)
        if(marca == "ArgentinaLuz")
        {
            descuento = precioLamparas*40/100;
        }
        else
        {
            descuento = precioLamparas*30/100;
        }
        //C
        else if(lamparas == 4)
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = precioLamparas*25/100;
            }
            else
            {
                descuento = precioLamparas*20/100;
            }
            //D
            else if(lamparas == 3)
                if(marca == "ArgentinaLuz")
                {
                    descuento = precioLamparas*15/100;
                }
                else if(marca == "FelipeLamparas")
                {
                    descuento = precioLamparas*10/100;
                }
                else
                {
                    descuento = precioLamparas*5/100;
                }
                //
                else if(lamparas < 3)
                {
                    descuento = 0;
                }
                
                resultado = precioLamparas - descuento;

            //E
            if(resultado > 120)
            {
                impuesto = precioLamparas *10/100;

                resultado = precioLamparas + impuesto;

                alert("Usted pago " + resultado + " de IIBB");
            }


            document.getElementById("txtIdprecioDescuento").value = resultado;


        } 
        */

        // IF SWITCH
        /*

    if (lamparas > 5)
    {
        descuento = -50/100;
    }

    else if (lamparas == 5)
    {
        switch (marca)
        {
            case "ArgentinaLuz":
            descuento = -40/100;
            break;
            default:
            descuento = -30/100;
        }
    }
    else if (lamparas == 4)
    {
        switch (marca)
        {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            descuento = -25/100;
            break;
            default:
            descuento = -20/100;
        }
    }
    else if (lamparas == 3)
    {
        switch (marca)
        {
            case "ArgentinaLuz":
            descuento = -15/100;
            break;
            case "FelipeLamparas":
            descuento = -10/100;
            break;
            default:
            descuento = -5/100;
        }
    }
    else
    {
        descuento = 0;
    }

    resultado = precioLamparas + (precioLamparas * descuento);

    if(resultado > 120)
    {
        impuesto = precioLamparas *10/100;

        resultado = precioLamparas + impuesto;

        alert("Usted pago " + resultado + " de IIBB");
    }
    
    document.getElementById("txtIdprecioDescuento").value = resultado;
    */
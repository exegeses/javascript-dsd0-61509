//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/**
 * Mostrar la fecha con formato
 *  Miércoles 02/11/2022 
 */

//creamos un objeto de fecha
let fecha = new Date(); 

/** obtenemos el número de día de semana 
 *  Dom - 0
 *  Lun - 1
 *  Mar - 2
 *  Mié - 3
*/
let diaSemana = fecha.getDay();
    console.log(diaSemana);
if( diaSemana == 0 ){
    diaSemana = 'Domingo';//sobreescritura
}
else if( diaSemana == 1 ){
    diaSemana = 'Lunes';
}
else if( diaSemana == 2 ){
    diaSemana = 'Martes';
}   
else if ( diaSemana == 3 ){
    diaSemana = 'Miércoles';
}


//obtenemos el número del día del mes
let diaMes = fecha.getDate();
    if( diaMes < 10 ){
        diaMes = '0'+ diaMes;
    }

//obtenemos el número del mes actual
let mes = fecha.getMonth() + 1;
    if( mes < 10 ){
        mes = '0'+ mes;
    }

//obtenemos el número del año
let anio = fecha.getFullYear();

//imprimimos dentro del span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;

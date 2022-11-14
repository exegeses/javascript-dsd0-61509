//ubicamos elemento dentro del DOM
const txt = document.querySelector('#txt');

//mostrar reloj formato 09:29:43
function reloj()
{
    //creamos objeto de fecha
    let fecha = new Date();

    //obtenemos el número de las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas;
    }

    //obtenemos el número de los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }

    //obtenemos el número de los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }

    //imprimimos dentro del span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
}

//invocamos función reloj
reloj();

//actualizamos el llamado a la función reloj
setInterval( reloj );
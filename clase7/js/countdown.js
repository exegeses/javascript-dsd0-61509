//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function cuentaRegresiva()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2022, 10, 26, 16 );
    console.log( ahora );
    console.log( final );

    //conversión a UNIX TIMESTAMP
      //tiempo transcurrido desde 01/01/1970
      //expresado en milisegundos
    let actual = ahora.getTime();
    let evento = final.getTime();
    console.log(actual);
    console.log(evento);

    //diferencia entre momentos de fecha
    let diferencia = evento - actual;
    console.log('Diferencia: ' + diferencia);

    //obtenemos el tiempo expresado en: 
    // segundos, minutos, horas y días
    let segundos = Math.trunc( diferencia/1000 );//truncamos decimales
    console.log('segundos: '+ segundos);

    let minutos = Math.trunc( segundos/60 );
    console.log('minutos: '+ minutos);
    
    let horas = Math.trunc( minutos/60 );
    console.log('horas: '+horas);

    let dias = Math.trunc( horas/24 );
    console.log('dias: '+dias);

    //calculamos los sobrantes en horas, minutos y segundos
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    //agregamos 0 inicial en segundos, minutos y horas
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }


    /* imprimimos en los span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos función 
cuentaRegresiva();
//actualizamos la función 
setInterval( cuentaRegresiva );
//ubicamos elemento dentro del DOM
//const caja = document.getElementById('caja');
const caja = document.querySelector('#caja');

//declaramos funciones de control
function ocultar()
{
    //caja.style.opacity = '0';
    //caja.style.visibility = 'hidden';
    caja.style.display = 'none';
}
function mostrar()
{
    //caja.style.opacity = '1';
    //caja.style.visibility = 'visible';
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    if( caja.style.display == 'none' ){ //si no se ve
        mostrar();
    }
    else{
        ocultar();
    }
}
const caja = document.querySelector('#caja');

//creamos funciones de control
function naranja()
{
    caja.style.backgroundColor = '#f60';
}

function pintar( codigoColor, nombreColor )
{
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombreColor;
}
//ubicamos elemento dentor del DOM
const cara = document.querySelector('#cara');

//declaramos función de control
function cambiarImagen( img )
{
    cara.src = 'stars/' + img + '.png'; 
}
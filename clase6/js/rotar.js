const sol = document.querySelector('#sol');
const pulpo = document.querySelector('#pulpo');

/* en css se utiliza 
    transform: rotate( 60deg );
   esto rotaría 60 grados

    left = 50px;
    esto desplazaría 50 pixeles
 */

let grados = 0;

function rotar()
{
    //sol.style.transform = 'rotate( 65deg )';
    sol.style.transform = 'rotate('+ grados +'deg )'; // rotate( 0deg )
    grados = grados + 1;
}

let direccion = 'derecha';
let posX = 0; /* popsicion en el eje x */
function mover()
{
    pulpo.style.left = posX+'px';
    if( direccion == 'derecha' ){ 
        posX = posX + 1;
    }
    else{
        posX = posX - 1;
    }
    
    if( posX >= 300 ){
        direccion = 'izquierda';
    }
    if( posX <= 5 ){
        direccion = 'derecha';
    }
}


rotar();
setInterval( rotar, 50 );
mover();
setInterval( mover, 10 );


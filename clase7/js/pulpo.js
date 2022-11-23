const pulpo = document.querySelector('#pulpo');

direccionX = 'derecha';
direccionY = 'abajo';
posX = 0;
posY = 0;

function desplazar()
{
    /* eje X - horizontal */
    if( direccionX == 'derecha' ){
        posX++;//popsX = posX + 1;
    }else{
        posX--;//popsX = posX - 1;
    }
    pulpo.style.left = posX+'px';

    if( posX >= 500 ){
        direccionX = 'izquierda';
    }
    if( posX <= 0 ){
        direccionX = 'derecha';
    }

    /* eje Y - vertical */
    if( direccionY == 'abajo' ){
        posY++;
    }else{
        posY--;
    }
    pulpo.style.top = posY+'px';
    if( posY >= 500 ){
        direccionY = 'arriba';
    }
    if( posY <= 200 ){
        direccionY = 'abajo';
    }
}

desplazar();
setInterval( desplazar, 50 );
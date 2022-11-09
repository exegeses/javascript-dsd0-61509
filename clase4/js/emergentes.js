
const txt = document.querySelector('#txt');

function miAlert()
{
    //sólo muestra un texto informativo
    // y NO retorna nada
    alert('ventana con texto informativo');
}

function miPrompt()
{
    //te deja escribir en la caja de texto
    //retorna lo que nosotros escribimos o bien null
    let resultado = prompt('ingrese su nombre');
    txt.innerText = resultado;
    console.log( resultado );
}

function miConfirm()
{
    //te deja seleccionar entre "aceptar" y "cancelar"
    //retorna true | false
    /*let resultado = confirm('¿es mayor de edad?');
    txt.innerText = resultado;
    console.log( resultado );*/

    if( confirm('¿es mayor de edad?') ){
        window.location = 'ingreso.html';
    }
    else{
        window.location = 'https://www.duckduckgo.com';
    }
}
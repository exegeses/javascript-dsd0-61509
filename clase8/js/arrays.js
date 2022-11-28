//ubicamos elemento dentro del DOM
const txt = document.querySelector('#txt');

let marca = [
    'Hermes','Zara','Boss',
    'Aeropostale','Hollister','Tommy'
    ];

console.log( marca );

//mostramos 1 elemento dentro del span
txt.innerText = marca[0];

let pos = 0;
function anterior()
{
    pos--;
    if( pos < 0 )
    {
        pos = 5;
    }
    txt.innerText = marca[pos];
}
function siguiente()
{
    pos++;
    if( pos > 5 )
    {
        pos = 0;
    }
    txt.innerText = marca[pos];
}


//ubicar elemento dentro del DOM
const body = document.body;
const link = document.getElementById('link');

//declaramos funciones de control
function green()
{
   /* body.style.backgroundColor = '#3C4048';
    body.style.color = '#00ABB3';*/
   link.href = 'css/green.css';
}

function pink()
{
   /*body.style.backgroundColor = '#FFDDD2';
   body.style.color = '#FF8DC7';*/
   link.href = 'css/pink.css';
}

function rose()
{
   /* body.style.backgroundColor = '#E97777';
   body.style.color = '#FCDDB0';*/
   link.href = 'css/rose.css';
}
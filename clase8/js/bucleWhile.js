let n = 1;

while( n < 15 ){
    //bloque de código a iterar
    document.write( n + '<br>');
    n++;
}

document.write('<hr>');

let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Bertone',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];

let i = 0;
let cantidad = italianos.length;
while( i < cantidad ){
    document.write(italianos[i] + '<br>');
    i++;
}

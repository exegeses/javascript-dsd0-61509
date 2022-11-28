//fórmula:
//for( inicio; condicion; incremento )
for( let n = 1; n < 15; n++ ){
    //bloque de código a iterar
    document.write( n + '<br>');
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

let cantidad = italianos.length;
for ( let i = 0; i < cantidad; i++ ){

    document.write( italianos[i], '<br>' );

}


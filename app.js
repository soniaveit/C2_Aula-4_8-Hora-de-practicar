/* DESAFIOS: (del Aula 4 del Curso 2 "Lógica de Programación y JavaScript: Listas y funciones")
1.- Crea una lista vacía llamada "listaGenerica".
2.- Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
3.- Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
4.- Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
5.- Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion en orden inverso.
6.- Crea una función que calcule el promedio de los elementos en una lista de números.
7.- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8.- Crea una función que devuelva la suma de todos los elementos en una lista.
9.- Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10.- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11.- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

//1.- Crea una lista vacía llamada "listaGenerica"
let listaGenerica= [];

//2.- Crea una lista de lenguajes de programación llamada "lenguajesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3.- Agrega a la lista "lenguajesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4.- Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion.
verListaLenguajesDeProgramacion();
function verListaLenguajesDeProgramacion(){
    console.log(`Listado de 0 a ${lenguajesDeProgramacion.length-1}`);
    for (i=0; i<lenguajesDeProgramacion.length; i++){
        console.log(`${i}.- ${lenguajesDeProgramacion[i]}`);
    }
}

//5.- Crea una función que muestre en la consola todos los elementos de la lista "lenguajesDeProgramacion en orden inverso.
verListaLenguajesDeProgramacion_Inverso();
function verListaLenguajesDeProgramacion_Inverso(){
    console.log('Listado de Orden Inverso');
    for (i=lenguajesDeProgramacion.length; i>0; i--){
        console.log(`${i-1}.- ${lenguajesDeProgramacion[i-1]}`);
    }
}


//6.- Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros=[2,5,7,4,9,23];
console.log('Promedio con la función "calcularPromedio" ')
console.log(`El promedio de ${obtenerNumeros()} es  ${calcularPromedio()}`)
console.log('Promedio sin la función "calcularPromedio", con la función "sumaDeNumeros" ')
console.log(`El promedio de ${obtenerNumeros()} es  ${parseFloat(sumaNumeros(listaNumeros)/listaNumeros.length).toFixed(2)}`)

function obtenerNumeros(){
    let textoNumeros='';
    for (i=0; i<listaNumeros.length; i++){
        textoNumeros= i==0 ? listaNumeros[i] : textoNumeros + ', ' + listaNumeros[i];
    }
    return textoNumeros;
}

function calcularPromedio(){
    let numerosSumados=0;
    for (i=0; i<listaNumeros.length; i++){
        numerosSumados=numerosSumados + listaNumeros[i];
        //console.log(i + '.- ' + listaNumeros[i]);
        //console.log('Suma ' + sumaNumeros);
    }
    return parseFloat(numerosSumados/listaNumeros.length).toFixed(2);
}

//7.- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let numeroMayor=0;
let numeroMenor=0;
obtenerNumMayorMenor();
console.log(`El número mayor de la lista es ${numeroMayor} y el menor es  ${numeroMenor}`);

function obtenerNumMayorMenor(){
    for (i=0; i<listaNumeros.length; i++){
        if (i==0){
            numeroMayor=listaNumeros[i];
            numeroMenor=listaNumeros[i];
        }
        else {
            if (listaNumeros[i]>numeroMayor){
                numeroMayor=listaNumeros[i];
            }
            else{
                if (listaNumeros[i]<numeroMenor){
                    numeroMenor=listaNumeros[i];
                } 
            }
        }
    }

}


//8.- Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaNumeros(numeros){
    let sumaDeNumeros=0;
    for (i=0; i<numeros.length; i++){
        sumaDeNumeros=sumaDeNumeros + numeros[i];
    }
    return parseFloat(sumaDeNumeros).toFixed(2);
}


//9.- Crea una función que devuelva la posición en la lista donde se encuentra 
//un elemento pasado como parámetro, o -1 si no existe en la lista.
function ObtenerPosicionElementoLista() {
    let elementoUsuario=parseFloat(prompt('Ingrese un posible elemento de la lista de números enteros: '));
    let posElementoUsuario=posElemento(elementoUsuario,listaNumeros);
    console.log('Resultado de la posicion ' + posElementoUsuario);
    let mensajePosElemento= posElementoUsuario==-1 ? 'no está en la lista' : 'está en la posición ' + posElementoUsuario;
    alert(`El número ${elementoUsuario} ${mensajePosElemento}`)
}

function posElemento(elemento, lista){
    let existeElemento=  Boolean (false);
    let posicion=0;
    if (lista.length==0){
        return -1;
    }
    else{
        for(i=0; i<lista.length; i++){
            if (lista[i]===elemento){
                posicion= i;
                existeElemento=true;
            }
        }
    }

    return existeElemento ? posicion : -1;

}

//10.- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaNumeros2=[1,1,1,1,1,1];
let NuevaListaDeNumerosSumados=nuevaListaSumaDePares(listaNumeros, listaNumeros2);

verElementosDelArreglo(NuevaListaDeNumerosSumados,'Nueva lista de suma de pares');

function nuevaListaSumaDePares(lista1,lista2){
    let nuevaLista=[];
    if (lista1.length!=lista2.length){
        console.log('Las listas recibidas son de distinto tamaño');
    }
    else{
        let nuevoElemento;

        for(i=0; i<lista1.length; i++){
            nuevoElemento=lista1[i]+lista2[i];
            nuevaLista.push(nuevoElemento);
        }
    }
    return nuevaLista;

}

function verElementosDelArreglo(arreglo, textoMensaje){
    console.log(textoMensaje);
    for (i=0; i<arreglo.length; i++){
        console.log(`${i}.- ${arreglo[i]}`);
    }
}


//11.- Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let ListaDeNumerosAlCuadrado=nuevaListaCuadradoDeNumeros(listaNumeros);
verElementosDelArreglo(ListaDeNumerosAlCuadrado,'Nueva lista de números al cuadrado');

function nuevaListaCuadradoDeNumeros(lista){
    let nuevaLista=[];
    let nuevoElemento;

    for(i=0; i<lista.length; i++){
        nuevoElemento=lista[i]*lista[i];
        nuevaLista.push(nuevoElemento);
    }
    
    return nuevaLista;
}


//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

asignarTextoElemento('h1','Curso 2 - Lógica de programación y JavaScript');
asignarTextoElemento('h2','Práctica del Aula 4 - Arreglos (listas)');
asignarTextoElemento('h3','Para ver los resultados de los ejercicios habilitar la vista de la consola, en Herramientas para desarrolladores del navegador');

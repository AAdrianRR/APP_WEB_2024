// Esto es un comentario de una línea

/*
Esto es un comentario
de varias lineas
*/

// Variables
var nombre = "angel adrian";
let nombre2 = "gustavo ceriati";
let nombre3 = "checo perez";
let nombre4 = "";
let edad = 25

// Asegúrate de que el
document.addEventListener("DOMContentLoaded", function() {
    
    // Mostrar un mensaje en la consola del navegador
    console.log("Hola, estoy en la consola");

    // Mostrar un mensaje en el div con id 'informacion'
    let datos = document.getElementById("informacion");

    // Escribiendo contenido en el div
    datos.innerHTML = "<h2>Hola, tengo un mensaje</h2>";
    datos.innerHTML += "<p>Este es el contenido de innerHTML</p>";
    datos.innerHTML += "<hr><h3>Hola, soy otro contenido de innerHTML</h3>";

    // Estructura if-else para mostrar un mensaje basado en la variable 'nombre'
    

    // Nueva funcionalidad: Evaluar la edad
    datos.innerHTML += "<p>La edad es: " + edad + "</p>";
    
    if (edad >= 18) {
        datos.innerHTML += "<p>La persona es mayor de edad</p>";
    } else {
        datos.innerHTML += "<p>La persona es menor de edad</p>";
    }
});


//funciones
//1,- funcion que no recibe paramentros y regresa valor
//3.- funciones que recibe parametros  y no regresa valor
// 4.- funcines que ricbe parametrosy regresavalor

function suma1(){
    let n1=n2;
    let n2=n3;
    let suma=n1+n2;
    datos.innerHTML+= <hr><h3> el resultado de la suma es :${suma}</h3>´
}

function suma2(){
    let n1=n2;
    let n2=n3;
    let suma=n1+n2;
    return suma;
    let sum=suma2();
    datos.innerHTML+= <hr><h3> el resultado de la suma es :${suma}</h3>´

}


function suma3(numero1,numero2){
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    return suma;
    datos.innerHTML+= <hr><h3> el resultado de la suma es :${suma}</h3>´
    suma3(3,4;)
   
}


function suma4(numero1,numero2){
    let n1=numero1;
    let n2=numero2;
    let suma=n1+n2;
    return suma;
    sum=suma4(4,4);
    datos.innerHTML+= <hr><h3> el resultado de la suma es :${suma}</h3>´
    
   
}

let animales=[];
animales[0]= "perro"
animaes[1]= "gato"
animales[2]= "ave";

let animales2=["tigre","leon","elefante"]

for(let i=0;i<animales.length;i++)
{
    datos.innerHTML+=´<hr><h1>el animal es: ${animales[i]} </h1>;

}


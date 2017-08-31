var altura = 7;
var base = 5;
var area = base * altura;
console.log("El area de mi rectangulo es igual: " + area);
<!--El area de mi rectangulo es igual: 35-->

var pi = 3.1416;
var radio = 5;
var rad2 = radio * radio;
var areaa = pi * rad2;
console.log("El area del circulo es igual a: " + areaa);
<!--El area del circulo es igual a: 78.53999999999999-->

var a = 5;
var b = 8;
var are = (b * a)/2;
console.log("El area del triangulo es igual a " + are);
<!--El area del triangulo es igual a 20-->

var pi = 3.1416;
var radio = 6;
var rad3 = radio * radio * radio;
var volumen = (4/3)*pi*rad3;
console.log("El volumen de la esfera es "+ volumen);
<!--El volumen de la esfera es 904.7807999999999-->

function tarea (){
    console.log("Hola " + nombre );
}
var nombre = "Jenny";
tarea();


var nombre = "Alonso";
function saludar (){
    if(true){
        var nombre = "Erick";
    }
    console.log(`Hola ${nombre}`);
}
saludar();

function saludar10(){
    let i=0;
    for(i; i<10; i++){
        console.log(`Hola ${nombre}`);
    }

    console.log(`El valor de i es ${i}`)
}
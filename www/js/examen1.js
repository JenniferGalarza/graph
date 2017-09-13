var x = {
    puntox1 : 3,
    puntox2 : 4
}
 
var y = {
    puntoy1 : 5,
    puntoy2 : 6
}


function distancia(){
     return Math.sqrt(Math.pow((x.puntox2 - x.puntox1), 2) + Math.pow((y.puntoy2 - y.puntoy1), 2))
}

console.log("La distancia es igual a : ",  distancia())


//const distancia = Math.pow((xpunto2.x2 - xpunto1.x1), 2) + Math.pow((ypunto2.y2 - ypunto1.y1), 2);
//const distanciaFinal = Math.sqrt(distancia); 

//console.log("La distancia es igual a : " + distanciaFinal);

//var x1 = 3;
//var x2 = 6;
//var y1 = 5;
//var y2 = 4;
//var distancia = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
//var distanciaFinal = Math.sqrt(distancia); 

//console.log("La distancia es igual a : " + distanciaFinal);
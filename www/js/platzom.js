///Si la palabfra termina en "ar", se le quitan los 2 ultimos caracteres /*slice->cortar una cadena */
/*toLower case--> lo hace a minuscular */
function platzom(str){
    let translation = str;
    if(str.toLowerCase().endsWith ( `ar`)){
        translation = str.slice(0, -2)
    }
/*si la palabra inicia con z se le añaden los caracteres "pe" al final de la palabra */

if(str.toLowerCase().startsWith(`z`)){
    translation += `pe`
}





console.log(platzom("programar"));
console.log(platzom("Zorro"));
console.log<(platzom("renacuajillos"))

/*si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion */

var length = str.length;
if (length >=1){
    translation = str.slice(0, Math.round(length/2)+ `-` + str.slice(Math.round(length/2)));
    
}
return translation;
}


/*si la palabra original es un palindromo, ninguna de las anteriores regglas funciona y se devuelve la palabra
intercalando entre minusculas y mayusculas */

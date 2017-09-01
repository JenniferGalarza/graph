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





/*si la palabra traducida tiene 10 o mas letras se debe partir a la mitad y unir con un guion */

/*var length = str.length;
if (length >=10){
    translation = str.slice(0, Math.round(length/2))+ `-` + str.slice(Math.round(length/2));
    
}
return translation;
}*/
let length = translation.length;
if(length >= 10){
    const fHalf = translation.slice(0, Math.round(length/2));
    const sHalf = translation.slice(Math.round(length/2));
    translation = `$(fHalf)-$(sHalf)`;
}

/*si la palabra original es un palindromo, ninguna de las anteriores regglas funciona y se devuelve la palabra
intercalando entre minusculas y mayusculas */

const reverse = (str)=> str.split('').reverse.join('');
function minMay(str){
    const l = str.length;
    let translation = "";
    let capitalize = true;
    for(let i = 0; i < length; i++){
        const char = str.charAt(i);
        translation += capitalize ? char.toUpperCase() : char.toLowerCase();
    }
}

if(str = reverse(str)){
    return minMay(str);
}


return translation;
}

console.log(platzom("programar"));
console.log(platzom("Zorro"));
console.log(platzom("abecedarios"));
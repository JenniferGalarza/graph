let vidaGoku = 100;
let VidaSuperman = 100;

const MIN_POWER = 5;
const MAX_POWER= 12;

let round = 0;

const gokuSiguevivo = () => vidaGoku > 0

const ambosSiguenvivos = () => vidaGoku > 0 && VidaSuperman > 0

const ambosMuertos = () => vidaGoku === 0 && VidaSuperman === 0

const calcularGolpe = () => Math.round (Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)

while(ambosSiguenvivos()){
    round++;
    console.log(`Round ${round}`);

    const golpeGoku = calcularGolpe();
    const golpeSuperman = calcularGolpe();
    if (golpeGoku > golpeSuperman){
        console.log(`Goku ataca a Superman con un golpe de ${golpeGoku}`);
        VidaSuperman -= golpeGoku;
        console.log(`Superman queda en ${VidaSuperman} de vida`);
    }else{
        console.log(`Superman ataca a Goku con un golpe de ${golpeSuperman}`);
        vidaGoku -= golpeSuperman;
        console.log(`Goku queda en ${vidaGoku} de vida`);
    }
    
    }
    if(gokuSiguevivo()){
        console.log(`Goku gano la pelea. Su vida es de: ${vidaGoku}`)
    }else{
        console.log(`Suoerman gano la pelea. su vida es de : ${VidaSuperman}`)
    }

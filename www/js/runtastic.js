const nombre = "Jenny"

const dias = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
]

function promedioCorrer(){
    const min = 5
    const max = 15

    return Math.round(Math.random() * (max - min) + min)
}

let totalKms = 0
const length = dias.length
for(let i=0; i<length; i++){
   const kms = promedioCorrer()
   totalKms = totalKms + kms
   console.log(`El dia ${dias[i]}, ${nombre} corrio ${kms} kms`)
}

const promedioKms = totalKms / length
console.log(`En promedio, ${nombre} corrio ${promedioKms} kms, en la semana `)
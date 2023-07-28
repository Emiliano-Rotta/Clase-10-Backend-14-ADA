// Presente de clase
const catorceB = [
    {
        id: 1,
        nombre: "Martina",
        apellido: "Rivero",
        lenguajes: ["TS", "JS"],
        presente: false
    },
    {
        id: 2,
        nombre: "Guillermina",
        apellido: "Ghe",
        lenguajes: ["Node", "JS"],
        presente: true
    },
    {
        id: 3,
        nombre: "Sol",
        apellido: "Lereah",
        lenguajes: ["Angular", "JS"],
        presente: true
    },
    {
        id: 4,
        nombre: "Emiliano",
        apellido: "Rotta",
        lenguajes: ["TS", "JS"],
        presente: true
    }
]

// Método Find:
// let find = catorceB.find(catorce => catorce.presente === true)
// console.log(find)

// Método Some
// let some = catorceB.some(catorce => catorce.nombre.includes("Sol"))
// console.log(some)

//Método Include
// let someInclude = catorceB.some(c => c.lenguajes.includes("React"))
// console.log(someInclude)

//Método every 
// let every = catorceB.every(c => c.presente === true)
// console.log(every)

//Metodo filter
// let filter = catorceB.filter(c => c.lenguajes.includes("TS"))
// console.log(filter)



// Ejercicios: Crear un Array que tenga 5 objetos: dentro de cada objeto: 1 booleano, 1 array, 2 que sea string, 1 numero minimo
// Find, Some, Include, every, filter..

// 1) Obtener todos los datos que tengan el boleano true (filter)

// 2) Devolver true si todos los booleanos son true (every)

// 3) Que devuelva true si esta el string que buscan (some)

// 4) traer toda la informacion del id 3 (find)



//Método Reduce:
// let reduce = catorceB.reduce((acumulador, iterador) =>{
//     return [...acumulador, ...iterador.lenguajes]
// },[])

// console.log(reduce)


// Método Reduce sin repetir:

// let reduceSinRepetir = catorceB.reduce((acumulador, iterador) =>{
//     return Array.from(new Set([...acumulador, ...iterador.lenguajes]))
// },[])

// console.log(reduceSinRepetir)

//Método map:

// let map = catorceB.map(alumna => alumna.nombre)
// console.log(map)

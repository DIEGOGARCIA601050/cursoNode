const prcss = process
const arrayp = prcss.argv
// argumentos de entrada
console.log(`en texto ${arrayp[2] + 1}`)
console.log(`en numero ${Number(arrayp[2]) + 1}`)
for (let index = 0; index < arrayp.length; index++) {
  console.log(`el elemento en la posición ${index} es ${arrayp[index]}`)
}
// controlar el proceso y su salida
//* *  p.exit(1)//con 0 todo bien y con 1 se detiene por un error*/

// Current Work Directory o directorio del que se está ejecutando
console.log(prcss.cwd())

//* variables de entorno
console.log(prcss.env.b)//! solo funciona en Linux/Mac

if (process.env.a !== undefined) {
  // Eventos del proceso
  prcss.on('exit', () => {
    console.log('se pudo leer el valor')
  })
  prcss.exit(1) //* despues de esta linea no se lee nada
}

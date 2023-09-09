const p = process
let a = 2
//argumentos de entrada
console.log(p.argv)

//controlar el proceso y su salida
//p.exit(1)//con 0 todo bien y con 1 se detiene por un error

//Eventos del proceso
// p.on('exit', ()=>{
//     console.log('listo')
// })

//Current Work Directory
console.log(p.cwd())

// console.log(p.env.a)
// console.log(p.env.b)
// console.log(process.env.c)
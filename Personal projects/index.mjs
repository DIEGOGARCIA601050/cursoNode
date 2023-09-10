import { recorrerObjs } from "./recorrerObjs.mjs";
import { Persona } from "./clasePersona.mjs";
import { writeFile } from 'node:fs/promises';

// Crear instancias de personas
// const Maria = new Persona('Maria', 'n', 18);
const Pablo = new Persona('Pablo', 'Gutierres', 37);
const John = new Persona('John', 'Adams', 38);

// Obtener información de María
// const Mobj = recorrerObjs(Maria);
// const MariaInfo = Mobj.toString();

// // Imprimir información de María
// console.log('maria', Mobj);
// console.log(MariaInfo);
// console.log('-------------------');

// Obtener información de Pablo
const PabloI = recorrerObjs(Pablo);
const PabloInfo = PabloI.toString();

// Obtener información de John
const JohnI = recorrerObjs(John);
const JohnInfo = JohnI.toString();

// Escribir información de María, Pablo y John en el archivo datos.txt
writeFile('./datos.txt', `${PabloInfo}\n`)
  .then(() => {
    console.log('Archivo escrito exitosamente');
  })
  .catch((err) => {
    console.error(`Error al escribir archivo: ${err}`);
  });


writeFile('./datos.txt',`${JohnInfo}`)
.then(() => {
    console.log('Archivo escrito exitosamente');
  })
  .catch((err) => {
    console.error(`Error al escribir archivo: ${err}`);
  });
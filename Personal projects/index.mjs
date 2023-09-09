import { recorrerObjs } from "./recorrerObjs.mjs";
import { Persona } from "./clasePersona.mjs";
import { writeFile } from 'node:fs/promises'

const Maria = new Persona('Maria', 'n',18);
const Pablo = new Persona('Pablo', 'Gutierres',37);
const John = new Persona('John', 'Adams',38);

const Mobj = recorrerObjs(Maria)
console.log('maria',Mobj)
const SM = Mobj.toString()
console.log(SM)

console.log('-------------------')
recorrerObjs(Pablo)
console.log('-------------------')
recorrerObjs(John)

writeFile('./datos.txt',SM)
.then(() => {
    console.log('Archivo escrito exitosamente',SM);
  })
  .catch((err) => {
    console.error(`Error al escribir archivo: ${err}`);
  });
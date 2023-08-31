import { recorrerObjs } from "./recorrerObjs.mjs";
import { Persona } from "./clasePersona.mjs";
import { writeFile } from 'node:fs/promises'

const Maria = new Persona('Maria', 'n',18);
const Pablo = new Persona('Pablo', 'Gutierres',37);
const John = new Persona('John', 'Adams',38);

const Mobj = recorrerObjs(Maria)
console.log('maria',Mobj)
console.log('-------------------')
recorrerObjs(Pablo)
console.log('-------------------')
recorrerObjs(John)

writeFile('./datos.txt',`${Mobj}`)
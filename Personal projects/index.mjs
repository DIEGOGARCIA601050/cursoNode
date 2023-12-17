import { recorrerObjs } from './recorrerObjs.mjs'
import { Persona } from './clasePersona.mjs'
import { writeFile } from 'node:fs/promises'

// Crear instancias de personas
const Maria = new Persona('Maria', 'n', 18)
const Pablo = new Persona('Pablo', 'Gutierres', 37)
const John = new Persona('John', 'Adams', 38)

// Obtener información de María
const Mobj = recorrerObjs(Maria)
const MariaInfo = Mobj.toString()

// Obtener información de Pablo
const PabloI = recorrerObjs(Pablo)
const PabloInfo = PabloI.toString()

// Obtener información de John
const JohnI = recorrerObjs(John)
const JohnInfo = JohnI.toString();

// Escribir información de María, Pablo y John en el archivo datos.txt
(async () => {
  try {
    await writeFile('./datos.txt', `${MariaInfo}\n${PabloInfo}\n${JohnInfo}`)
    console.log('Archivo escrito exitosamente')
  } catch (err) {
    console.error(`Error al escribir archivo: ${err}`)
  }
})()

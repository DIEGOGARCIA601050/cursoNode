//* CON ASYNC AWAIT

// IMPORT MODULES
const fs = require('node:fs/promises')
const path = require('node:path')
const picoc = require('picocolors')

// LS FUNCTION
async function ls (directory) {
  let files
  try {
    files = await fs.readdir(directory)
  } catch (err) {
    if (err) {
      console.log(picoc.red(`error de lectura ${err} en ${directory}`))
      process.exit(1)
    }
  }
  try {
    const filesPromises = files.map(async (file) => {
      const filePath = path.join(directory, file)
      let Stats

      try {
        Stats = await fs.stat(filePath) // stat es información
      } catch (error) {
        if (error) {
          console.log(picoc.red(`error de lectura ${error} en ${directory}`))
          process.exit(1)
        }
      }

      const esDirectorio = (await Stats)?.isDirectory()
      const fileType = esDirectorio ? 'dir' : 'file'
      const fileSize = (await Stats)?.size
      const fileModify = (await Stats)?.mtime.toDateString()
      if (fileType === 'dir') {
        return `${picoc.bold(fileType)} ${picoc.cyan(
          file.padEnd(25)
        )} ${picoc.yellow(fileSize.toString().padStart(15))} ${picoc.green(
          fileModify
        )}`
      } else {
        return `${fileType} ${picoc.cyan(file.padEnd(25))} ${picoc.yellow(
          fileSize.toString().padStart(15)
        )} ${picoc.green(fileModify)}`
      }
    })
    const FilesInfo = await Promise.all(filesPromises)
    FilesInfo.forEach((filesInfo) => console.log(filesInfo))
  } catch (error) {
    console.log(picoc.red(`error de lectura ${error} en ${directory}`))
    process.exit(1)
  }
}

// Parametros
const folder = process.argv[2] ?? '.'
ls(folder)

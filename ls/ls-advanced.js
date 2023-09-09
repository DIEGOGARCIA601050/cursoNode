const fs = require('node:fs')
const path = require('node:path')

const folder = process.argv[2] ?? '.'

fs.readdir(folder,(err,files)=>{
    if(err){
        console.log('error:',err)
        return
    }

    files.forEach(file=>{
        
        const fileInfo = files.map(file=>{
            const filePath = path.join(folder, file)
            let stats 
            try {
                const fileStats = fs.stat(filePath)//status --> info del archivo
                console.log(fileStats)

            } catch {
                console.log(`no se pudo leer el archivo ${folder}`)
                process.exit(1)
            }

            const isDirectory  = stats.isDirectory()
            console.log(isDirectory)
            const fileType = isDirectory ? 'd' : 'N'
            console.log(fileType)
            const filesize = stats.size
            console.log(filesize) 
        })
    })
})
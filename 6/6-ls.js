const fs = require('node:fs')
fs.readdir('../Personal projects',(err,files)=>{
    if(err){
        console.log('error:',err)
        return
    } else {
        console.log('files:',files)
    }
})
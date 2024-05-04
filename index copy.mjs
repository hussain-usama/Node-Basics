import {x}  from "./app.mjs";
import fs from "fs";
import path from "path";
import http from 'http'
import { fileURLToPath } from 'url';

console.log(x)

/* it will create file , first args will filename and second args will be file content */
fs.writeFileSync('hello.text','Welcome to Node Js Basics override')
/* it will delete file , first args will filename */
fs.unlinkSync('hello.text')

// CRUD OPERATION OF FILE SYSTEM 
// writeFileSync create file in root folder but if we want file to be created in our defined folder we need to use path

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'crud');
let filePath =  `${folderPath}/todo.txt`
fs.writeFileSync(filePath,'This is my new file content !')
// read file content
fs.readFile(filePath,'utf8',(er,item)=>{
    console.log(item, 'file content')
})
//update file content  /* it will concatinate after the previous text */
fs.appendFile(filePath,'and content get updated.',(err)=>{
    if(!err) console.log('file updated!')
})
//rename file name
fs.rename(filePath,`${folderPath}/updatedtodo.txt`,(err)=>{
        if(!err) console.log('file renamed!')
    })
//delete file
fs.unlinkSync(`${folderPath}/updatedtodo.txt`)
/* creating a server using http */
// http.createServer((req,res)=>{
//     res.write('Server connected successfully...!')
//     res.end()
// }).listen(8000)
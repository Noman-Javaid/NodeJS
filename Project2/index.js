const colors = require('colors')
const http = require('http')
const data = require('./data')
const fs = require('fs')
const path = require('path');
const express = require('express');
const os = require('os')

//Connection File
const dbConnect = require('./mongodb')

//Using Colors 
// console.log("Hello Colors".red) //run command node .\index.js
// console.log("Hello World I love You".bgBlue)


//Simple API
// http.createServer((req, resp)=>{
//     resp.writeHead(200, {'Content-Type':'application\json'}); 
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(4500);


//using file system by CMD
//run node .\index.js add/remove Filename.js 'any text here'
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]); //you can test it by echo process.argv


//Getting inputs fom CMD
// const input = process.argv;
// if(input[2]==="add"){
// fs.writeFileSync(input[3], input[4]); //you can test it by echo process.argv
// }else if(input[2]==="remove"){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("Invalid Input");
// }


//Files Listing 
// const dirPath = path.join(__dirname, 'files');
// for(i=0; i<5; i++){
// fs.writeFileSync(`${dirPath}/myfile${i}.txt`, `Text added in file myfile ${i}`); //you can test it by echo process.argv
// }
// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((file) => {
//         console.log("Filename is ",file);
//     });
// })



// _____________________________________________________________________________________
//File CRUD System
// const dirPath = path.join(__dirname, 'filecrud');
// const filepath = `${dirPath}/demo.txt`;
//_____CREATE
// fs.writeFileSync(filepath ,'sample text for demo file');
//_____READ
// fs.readFile(filepath,'utf8', (err, data)=>{ 
//     console.log(JSON.stringify(data));
// })
//_____UPDATE File
// fs.appendFile(filepath, ' This data will append original data', (err)=>{
//     if(!err) console.warn('FILE IS UPDATED');
// })
// fs.rename(filepath,`${dirPath}/demoRenamed.txt`, (err)=>{
//     if(!err) console.warn('FILE IS Renamed');
// });
//_____DELETE FILE
// fs.unlinkSync(`${dirPath}/demoRenamed.txt`);






//__________________________________________________________________________________________
//HANDLING ASYNCHRONOUS
//By using Promises /Sync Methods or await
// let a = 10 
// let b = 0
// let processingData = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);//'pass here any data, string array or variable'
//     }, 2000) //will process for 2 seconds
// })
// processingData.then((data)=>{
//     b = data;
//     console.log(a+b);
// })






// ______________________________________________________________________________________
//EXPRESS Basic
// const app = express();
// app.get('/', (req, res)=>{
//     console.log("Data Sent by Browser is ", req.query);
//     res.send(`Welcome to Home page made by data in browser ${req.query.name}
//     <a href="/?name=Noman">home</a>
//     <a href="/about">about</a>
//     <a href="/help">help</a>
//     `)
// })
// app.get('/about', (req, res)=>{
//     res.send(`Hello This is About page
//     <a href="/?name=Hamza">home</a>
//     <a href="/about">about</a>
//     <a href="/help">help</a>
//     `)
// })
// app.get('/help', (req, res)=>{
//     res.send(`Hello I am help page
//     <a href="/?name=Javed">home</a>
//     <a href="/about">about</a>
//     <a href="/help">help</a>
//     `)
// })
// app.listen(4500);






// _________________________________________________________________________________________
//ACCESSING different pages of .html from different folder
// const app = express();
// const pathname = path.join(__dirname, 'public');
// // console.log(pathname)
// // app.use(express.static(pathname));  //it will show pages with .html etc expensions 
// app.set('view engine','ejs');
// app.get('/profile', (req, res) => {
//     const data={
//         name:'Noman',
//         age:'24',
//         city:'LHR',
//         skills:['php', 'laravel', 'JS', 'React']
//     }
//     res.render(`profile`, {data})
// })
// app.get('/login', (req, res) => {
//     res.render(`login`)
// })
// app.get('/', (req, res) => {
//     res.sendFile(`${pathname}/index.html`)
// })
// app.get('/helpus', (req, res) => {
//     res.sendFile(`${pathname}/help.html`)
// })
// app.get('/aboutus', (req, res) => {
//     res.sendFile(`${pathname}/about.html`)
// })
// app.get('*', (req, res) => {
//     res.sendFile(`${pathname}/404.html`)
// })
// //Dynamic Routing from here

// app.listen(4500)





//________________________________________________________________________________
// MiddleWare
// const reqFilter = require('./middleware')
// const app = express();
// const pathname = path.join(__dirname, 'public');
// // app.use(reqFilter);    //will work at application levels
// const route = express.Router();
// route.use(reqFilter);
// route.get('/login', (req, res) => {
//     res.render(`login`)
// })
// app.get('/', (req, res) => {
//     res.sendFile(`${pathname}/index.html`)
// })
// route.get('/helpus', (req, res) => {
//     res.sendFile(`${pathname}/help.html`)
// })
// app.get('/aboutus', reqFilter, (req, res) => {  //will work at single corresponding route in which it will be mentioned
//     res.sendFile(`${pathname}/about.html`)
// })
// app.use('/',route);
// app.listen(4500)





// ========================================================================================================================
// DATABASE CRUD FROM HERE

// dbConnect().then((res)=>{  //method 1
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })

// const getData = async ()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// getData();


//_______________________________________________________________________________________________________________________
//OS Module
// console.log(os)
// console.log(os.arch())// Architecture of OS x64 or x32
// console.log(os.freemem()/ (1024 * 1024)) // Free ram in Mbs
// console.log(os.totalmem()/ (1024 * 1024)) // Total ram in Mbs
// console.log(os.hostname()) //OS model
// console.log(os.platform())//windows or MAC
// console.log(os.userInfo())

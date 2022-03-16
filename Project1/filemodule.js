const fs = require('fs');
// Non Blocking IO Model
// fs.readFile('nodelearning.txt', 'utf8', (err, data)=>{
//     console.log(err,data);
// })
// console.log("This content will come before file text because the call back function wil read file then will run, soo some microseconds difference will happen")



// const a= fs.readFileSync('nodelearning.txt');
// console.log(a.toString());
// console.log("Now this content will come after because now we intentianally are blocking")



fs.writeFile('fileWritten.txt', "This is a data inserted  plus file is created", ()=>{
    console.log("Written to the file");

})
console.log("Finished writng file will come after");
// OR
// fs.writeFileSync('fiel.txt', "Data inserted")
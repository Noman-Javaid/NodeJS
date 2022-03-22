const express = require("express")
const EventEmitter = require("events")
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("callAPI", ()=>{
    count++;
    console.log("event Called", count)
})

//these events will increase count when an api will be called
app.get('/', (req, res)=>{
    res.send("Get api Called")
    event.emit("callAPI")
})

app.get('/search', (req, res)=>{
    res.send("Search api Called")
    event.emit("callAPI")
})

app.get('/update', (req, res)=>{
    res.send("update api Called")
    event.emit("callAPI")
})

app.listen(4500);
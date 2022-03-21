const express = require ('express')
const dbConnect = require('./mongodb')
const mongoDB = require('mongodb')
const app = express();

app.use(express.json());//will convert data into JSON

app.get('/', async (req, res)=>{
    let db = await dbConnect();
    let data = await db.find().toArray();
    // console.log(data);
    res.send(data)
})

app.post('/', async (req, res)=>{
    let db = await dbConnect();
    let result = await db.insertOne(req.body);
    res.send(result)
})

app.put('/:name', async(req, res)=>{
    let db = await dbConnect();
    // to get data from url use name:req.params.name, and add /:name at end of url in put api
    // let result = await db.updateOne({name:req.body.name},{$set:req.body});
    let result = await db.updateOne({name:req.params.name},{$set:req.body});
    res.send(result);
})

app.delete('/:id', async(req, res)=>{
    let db = await dbConnect();
    let result = await db.deleteOne({_id: new mongoDB.ObjectId(req.params.id)})
    res.send(result)
})

app.listen(4500);
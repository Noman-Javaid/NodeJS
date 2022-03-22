//This code is interlinked with three files like mongoose2.js, index2.js, product.js
const express = require('express');
require('./mongoose2') //as config.js
const Product = require('./Product')

const app = express();
app.use(express.json());//will convert data into JSON

app.post("/create", async (req,res)=>{
    let data = new Product(req.body);
    let result = await data.save()
    console.log(result);
    res.send(result);
})

app.get("/list", async(req, res)=>{
    let data = await Product.find();
    res.send(data);
})

app.delete("/delete/:_id",async(req, res)=>{
    let result = await Product.deleteOne(req.params)
    res.send(result)
    console.log(result);
})

app.put("/update/:_id",async(req, res)=>{
    let result = await Product.updateOne({_id:req.params._id}, {$set:req.body})
    res.send(result)
    console.log(result);
})

app.get("/search/:term", async(req, res)=>{
    let result = await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.term}},
                {"company":{$regex:req.params.term}}
            ]
        }
    );
    res.send(result);
    console.log(result);
})
app.listen(4500)
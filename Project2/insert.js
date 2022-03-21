const dbConnect = require('./mongodb')

const insert = async ()=>{
    const db = await dbConnect();
    // const result = await db.insertOne({
    //     name: "Car",
    //     company:"TOYOTA",
    //     price: 3000000
    // })
    const result = await db.insertMany(
        [
        {name: "Chair",company:"Wing Chair",price: 8000},
        {name: "Bicycle",company:"Phoenix",price: 15000},
        {name: "Car",company:"Ford",price: 5000000},
        ]
        )
    if(result.acknowledged){
        console.log("Data Inserted")
    }
}
insert();

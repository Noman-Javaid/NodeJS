const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let db = await dbConnect();
    let result = await db.updateOne({name: "Watch"}, 
    {$set:{price: 5000}}
    );
    console.log(result);
}
updateData();
const dbConnect = require('./mongodb')

const deleteData = async ()=>{
    let db = await dbConnect();
    let result = await  db.deleteOne({name:"Car"})
}
console.log("data Deleted Successfully")
deleteData();
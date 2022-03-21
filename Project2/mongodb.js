
//DB Connections
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'E-com'

async function dbConnect() {  //Mutual Function for DB Connection
    let result = await client.connect();
    let db = result.db(database)
    return db.collection('products');
}
module.exports = dbConnect;
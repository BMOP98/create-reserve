const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);
let dbInstance = null;
async function connectToDatabase(){
    try {
        if(dbInstance) return dbInstance;
        await client.connect();
        console.log("Conect to MongoDB Atlas");
        dbInstance = client.db("db_reservations");
        return dbInstance;
    } catch (error) {
        console.log("Error connecting to MongoDB Atlas: ", err);
        throw err;
    }
}
module.exports = {connectToDatabase};
require("dotenv").config();
const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase(){
const client = await MongoClient.connect(`mongodb+srv://eisenhardt:${process.env.APP_PWD}@corso-node.vkhzh.mongodb.net/?retryWrites=true&w=majority`);
database = client.db("online-shop");
}

function getDb(){
    if (!database) {
        throw {message: "Errore durante la connessione al database"}
    }
    return database;
}

module.exports = {
    connectToDatabase : connectToDatabase,
    getDb : getDb
}
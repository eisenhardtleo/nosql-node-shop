const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");
require("dotenv").config();


function createSessionStore(){
    const MongoDbStore = mongoDbStore(expressSession);
    const store = new MongoDbStore({
        uri : `mongodb+srv://eisenhardt:${process.env.APP_PWD}@corso-node.vkhzh.mongodb.net/?retryWrites=true&w=majority`,
        databaseName : "online-shop",
        collection : "sessions"
    }) 

return store;
}

function createSessionConfig(){
    return {
        secret : process.env.DB_SECRET,
        resave: false,
        saveUninitialized: false,
        store : createSessionStore(),
        cookie : {
            maxAge : 2 * 24 * 60 * 60 * 1000
        }
    }
}

module.exports = createSessionConfig;
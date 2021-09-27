const mongoClient = require('mongodb').MongoClient;
const config = require('../../config');

const mongodbDNS = config.database.dbDSN;
const dbName = config.database.dbName;
let cachedDb = null;

const connectToDatabase = async () => {

    if (cachedDb && cachedDb.serverConfig.isConnected()) {
        return Promise.resolve(cachedDb);
    }

    const db = await mongoClient.connect(mongodbDNS, { useUnifiedTopology: true });
    cachedDb = db.db(dbName);
    return cachedDb;
};

module.exports = {
    connectToDatabase
};
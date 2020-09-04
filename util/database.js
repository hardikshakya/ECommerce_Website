const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(process.env.DEV_MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((client) => {
            console.log("Connected!");
            _db = client.db(process.env.DEV_MONGODB_NAME);
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

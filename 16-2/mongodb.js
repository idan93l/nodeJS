const MongoClient = require("mongodb").MongoClient;
const connectionUrl = "mongodb://localhost:27017/";
const databaseName = "blog"

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   const dbo = db.db("mydb");
//   const myobj = { name: "Company Inc123", address: "Highway 37" };
//   dbo.collection("users").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });


MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {
  try {
    // if (err) throw err;
    const db = client.db(databaseName);
    const userDocuments = [
      { name: "Idan", email: "idan@gmail.com" },
      { name: "Isabelle", email: "isabelle@gmail.com" },
      { name: "Philip", email: "philip@gmail.com" },
    ];
    db.collection("users").insertMany(userDocuments, (err, res) => {
      // if (err) throw err;
      console.log(res);
      db.close();
    });
  } catch (err) {
    console.log(err);
  }
});

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   const dbo = db.db("mydb");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

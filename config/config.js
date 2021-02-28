// This config.js has the mongo driver code pulled from the Mongo Atlas WebUI
// This is dummy code to check if we can connect to database and is not used by NodeTodo App

// NOTE: Need to export username password dbname

const MongoClient = require("mongodb").MongoClient;

const username = process.env.username;
const password = process.env.password;
const dbname = process.env.dbname;

console.log("Connecting to MongoDB Database...\n");
console.log(`username: ${username}\npassword: ${password}\ndbname: ${dbname}`);

const uri = `mongodb+srv://${username}:${password}@cluster0.lrtyt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  if (err) {
    console.log("\nError Stack: \n", err);
  } else {
    console.log("\nCollection Stack: \n", collection);
  }
  client.close();
});

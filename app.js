import express from "express";
import path from "path";
import config from "./config";
import mongoose from "mongoose";
import setupController from "./controller/setupController";

var app = express();
var port = process.env.port || 3000;

app.use("/assets", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

mongoose.connect(config.getDbConnectionString(), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", (_) => {
  console.log("Database Connected Successfully");
});

db.on("error", (err) => {
  console.error("Database Connection Failed", err);
});

console.log(setupController)
setupController(app);
app.listen(port);

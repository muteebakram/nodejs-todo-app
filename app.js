import express from "express";
import path from "path";
import mongoose from "mongoose";

import config from "./config";
import setupController from "./controller/setupController";
import apiController from "./controller/apiController";

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

setupController(app);
apiController(app);

app.listen(port);

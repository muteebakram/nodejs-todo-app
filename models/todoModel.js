import mongoose from "mongoose";

const Schema = mongoose.Schema;

var todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean,
});

var Todos = mongoose.model("Todos", todoSchema);

export default Todos;

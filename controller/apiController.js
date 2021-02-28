// App specific API goes here

import Todos from "../models/todoModel";
import bodyParser from "body-parser";

export default function (app) {
  // BodyParser is middleware i,e its going to look at json req and response
  // before seeing application code
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // Get Todos of a particular user
  app.get("/api/todos/:uname", function (req, res) {
    Todos.find({ username: req.params.uname }, function (err, todos) {
      if (err) throw err;
      res.send(todos);
    });
  });

  // Get Individual todo based on id
  app.get("/api/todo/:id", function (req, res) {
    Todos.findById({ _id: req.params.id }, function (err, todo) {
      if (err) throw err;
      res.send(todo);
    });
  });

  // Post a new todo if exists update else add new one
  app.post("/api/todo/", function (req, res) {
    if (req.body.id) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        function (err, todo) {
          if (err) throw err;
          res.send("Success");
        }
      );
    } else {
      var newTodo = Todos({
        username: "muteebakram",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });

      newTodo.save(function (err) {
        if (err) throw err;
        res.send("Success");
      });
    }
  });

  // Delete a todo based on id
  app.delete("/api/todo/", function (req, res) {
    Todos.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err;
      res.send("Success");
    });
  });
}

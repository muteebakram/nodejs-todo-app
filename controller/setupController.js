import Todos from "../models/todoModel";


export default function (app) {
  app.get("/api/setupTodos", function (req, res) {
    // Seed database
    var starterTodos = [
      {
        username: "muteebakram",
        todo: "Task 1",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "muteebakram",
        todo: "Task 2",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "muteebakram",
        todo: "Task 2",
        isDone: false,
        hasAttachment: false,
      },
    ];

    Todos.create(starterTodos, function (err, results) {
      if (err) throw err;
      else res.send(results);
    });
  });
};

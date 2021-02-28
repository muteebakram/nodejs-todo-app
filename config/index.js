// This is the mongo config used by the NodeTodo Application

// NOTE: Need to export username password dbname

module.exports = {
  getDbConnectionString: function () {
    const username = process.env.username;
    const password = process.env.password;
    const dbname = process.env.dbname;

    var url = `mongodb+srv://${username}:${password}@cluster0.lrtyt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

    console.log("Connecting to MongoDB URL: ", url);
    return url;
  },
};

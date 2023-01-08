const db = require("../helpers/db");

exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM users;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Users found",
      result,
    });
  });
};

exports.getUserById = (req, res) => {
  db.query(
    "SELECT * FROM users WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User found",
        result,
      });
    }
  );
};

exports.postUser = (req, res) => {
  db.query(
    "INSERT INTO users (name, age, image) VALUES (?, ?, ?);",
    [req.body.name, req.body.age, req.body.image],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User created",
        result,
      });
    }
  );
};

exports.putUser = (req, res) => {
  db.query(
    "UPDATE users SET name = ?, age = ?, image = ? WHERE id = ?;",
    [req.body.name, req.body.age, req.body.image, req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User updated",
        result,
      });
    }
  );
};

exports.deleteUser = (req, res) => {
  db.query(
    "DELETE FROM users WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "User deleted",
        result,
      });
    }
  );
};

var connection = require("./connection.js");

var orm = {
  insert: function (table, col, val, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?);";
    connection.query(queryString, [table, col, val], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateById: function (table, col, val, id, cb) {
    var queryString = "UPDATE ?? SET ?? = ??  WHERE id = ?;";
    connection.query(queryString, [table, col, val, id], function (err, result) {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },
  select: function (col, table, cb) {
    var queryString = "SELECT ?? FROM ??;";
    connection.query(queryString, [col, table], function (err, result) {
      if (err) throw err;
      return cb(result);
    });
  },
  selectWhere: function (table, col, val, cb) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [table, col, val], function (err, result) {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },
  leftJoin: function (whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol, cb) {
    var queryString = "SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??";
    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function (err, result) {
      if (err) throw err;
      console.log(result);
      return cb(result);
    });
  },
  insertEmployee: function (fname, lname, cb) {
    var queryString = "INSERT INTO employee (first_name, last_name) VALUES (?, ?);";
    connection.query(queryString, [table, col, val], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

};

module.exports = orm;

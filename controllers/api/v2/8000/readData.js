var port = 8000;
const fs = require("fs");

const csv = require("csv-parser");
var os = require("os");
var read_flag = 0;
let read_value = -1;
const path = require("path");
const { doesNotMatch } = require("assert");
module.exports.read_data = function (req, res) {
  const filepath = "dataStorage/" + port + "/data.csv";
  fs.createReadStream(filepath)
    .on("error", () => {
      return res.json(404, {
        message: "Internal server error msg",
      });
    })

    .pipe(csv())
    .on("data", (row) => {
      if (row.key === req.params.key) {
        read_flag = 1;
        read_value = row.value;
      }
    })

    .on("end", () => {
      if (read_flag == 0) {
        return res.json(404, {
          message: "No such key exists in data storage",
        });
      } else {
        read_flag = 0;
        return res.json(200, {
          message: "Read operation has been done successfully",
          data: { key: req.params.key, value: read_value },
        });
      }
    });
};

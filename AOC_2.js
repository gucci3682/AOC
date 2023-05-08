"use strict";
exports.__esModule = true;
var fs = require("fs");
var rd = require("readline");
var aoc_2a = function (filename) {
  var reader = rd.createInterface(fs.createReadStream(filename));
  var scores = {
    X: 1,
    Y: 2,
    Z: 3,
  };
  var outcomes = {
    W: 6,
    D: 3,
    L: 0,
  };
  var totalScore = 0;
  reader.on("line", function (line) {
    var outcomeArray = line.split(" ");
    if (outcomeArray[1] === "X") {
      totalScore += scores["X"];
      if (outcomeArray[0] === "A") {
        totalScore += outcomes["D"];
      } else if (outcomeArray[0] === "B") {
        totalScore += outcomes["L"];
      } else {
        totalScore += outcomes["W"];
      }
    } else if (outcomeArray[1] === "Y") {
      totalScore += scores["Y"];
      if (outcomeArray[0] === "A") {
        totalScore += outcomes["W"];
      } else if (outcomeArray[0] === "B") {
        totalScore += outcomes["D"];
      } else {
        totalScore += outcomes["L"];
      }
    } else {
      totalScore += scores["Z"];
      if (outcomeArray[0] === "A") {
        totalScore += outcomes["L"];
      } else if (outcomeArray[0] === "B") {
        totalScore += outcomes["W"];
      } else {
        totalScore += outcomes["D"];
      }
    }
  });
  reader.on("close", function () {
    console.log(totalScore);
  });
};
aoc_2a("input_2.txt");
var aoc_2b = function (filename) {
  var reader = rd.createInterface(fs.createReadStream(filename));
  var outcomes = {
    X: 0,
    Y: 3,
    Z: 6,
  };
  var score = {
    R: 1,
    P: 2,
    S: 3,
  };
  var totalScore = 0;
  reader.on("line", function (line) {
    var outcomeArray = line.split(" ");
    if (outcomeArray[1] === "X") {
      totalScore += outcomes["X"];
      if (outcomeArray[0] === "A") {
        totalScore += score["S"];
      } else if (outcomeArray[0] === "B") {
        totalScore += score["R"];
      } else {
        totalScore += score["P"];
      }
    } else if (outcomeArray[1] === "Y") {
      totalScore += outcomes["Y"];
      if (outcomeArray[0] === "A") {
        totalScore += score["R"];
      } else if (outcomeArray[0] === "B") {
        totalScore += score["P"];
      } else {
        totalScore += score["S"];
      }
    } else {
      totalScore += outcomes["Z"];
      if (outcomeArray[0] === "A") {
        totalScore += score["P"];
      } else if (outcomeArray[0] === "B") {
        totalScore += score["S"];
      } else {
        totalScore += score["R"];
      }
    }
  });
  reader.on("close", function () {
    console.log(totalScore);
  });
};
aoc_2b("input_2.txt");

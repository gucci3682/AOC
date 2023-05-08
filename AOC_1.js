"use strict";
exports.__esModule = true;
var fs = require("fs");
var rd = require("readline");
var aoc_1a = function (filename) {
    var reader = rd.createInterface(fs.createReadStream(filename));
    var maxCalories = 0;
    var currCalories = 0;
    reader.on("line", function (line) {
        if (line === "") {
            if (currCalories > maxCalories) {
                maxCalories = currCalories;
            }
            currCalories = 0;
        }
        else {
            currCalories += parseInt(line);
        }
    });
    reader.on("close", function () {
        console.log(maxCalories);
    });
};
aoc_1a("input_1.txt");
var aoc_1b = function (filename) {
    var reader = rd.createInterface(fs.createReadStream(filename));
    var arrCalories = [];
    var currCalories = 0;
    reader.on("line", function (line) {
        if (line === "") {
            arrCalories.push(currCalories);
            currCalories = 0;
        }
        else {
            currCalories += parseInt(line);
        }
    });
    reader.on("close", function () {
        var sortedCalories = arrCalories.sort(function (n1, n2) {
            return n2 - n1;
        });
        var top3 = sortedCalories.slice(0, 3);
        console.log(top3.reduce(function (accum, curr) {
            return accum + curr;
        }, 0));
    });
};
aoc_1b("input_1.txt");

import * as fs from 'fs';
import * as rd from 'readline';

const aoc_1a = (filename: string): void => {
  const reader = rd.createInterface(fs.createReadStream(filename));
  let maxCalories = 0;
  let currCalories = 0;

  reader.on("line", (line: string) => {
    if (line === "") {
      if (currCalories > maxCalories) {
        maxCalories = currCalories;
      }
      currCalories = 0;
    } else {
      currCalories += parseInt(line);
    }
  });

  reader.on("close", () => {
    console.log(maxCalories);
  });
}

aoc_1a("input_1.txt");

const aoc_1b = (filename: string): void => {
  const reader = rd.createInterface(fs.createReadStream(filename));
  let arrCalories: number[] = [];
  let currCalories = 0;

  reader.on("line", (line: string) => {
    if (line === "") {
      arrCalories.push(currCalories);
      currCalories = 0;
    } else {
      currCalories += parseInt(line);
    }
  });

  reader.on("close", () => {
    let sortedCalories: number[] = arrCalories.sort((n1, n2) => {
      return n2 - n1;
    });
    const top3 = sortedCalories.slice(0,3);
    console.log(top3.reduce((accum, curr) => {
      return accum + curr;
    }, 0));
  });
}

aoc_1b("input_1.txt");
import * as fs from 'fs';
import * as rd from 'readline';

const aoc_2a = (filename: string): void => {
  const reader = rd.createInterface(fs.createReadStream(filename));
  const scores = {
    "X": 1,
    "Y": 2,
    "Z": 3
  }

  const outcomes = {
    "W": 6,
    "D": 3,
    "L": 0
  }

  let totalScore = 0;

  reader.on("line", (line: string) => {
    const outcomeArray = line.split(" ");
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
		};
  });

  reader.on("close", () => {
		console.log(totalScore);
  });
}

aoc_2a("input_2.txt");

const aoc_2b = (filename: string): void => {
  const reader = rd.createInterface(fs.createReadStream(filename));
  const outcomes = {
    "X": 0,
    "Y": 3,
    "Z": 6
  }

  const score = {
    "R": 1,
    "P": 2,
    "S": 3
  }

  let totalScore = 0;

  reader.on("line", (line: string) => {
    const outcomeArray = line.split(" ");
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
		};
  });

  reader.on("close", () => {
		console.log(totalScore);
  });
}

aoc_2b("input_2.txt");
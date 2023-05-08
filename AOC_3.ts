import * as fs from 'fs';
import * as rd from 'readline';

const aoc_3a = (filename: string): void => {
const reader = rd.createInterface(fs.createReadStream(filename));
let priorities = {
	"a": 1,
	"b": 2,
	"c": 3,
	"d": 4,
	"e": 5,
	"f": 6,
	"g": 7,
	"h": 8,
	"i": 9,
	"j": 10,
	"k": 11,
	"l": 12,
	"m": 13,
	"n": 14,
	"o": 15,
	"p": 16,
	"q": 17,
	"r": 18,
	"s": 19,
	"t": 20,
	"u": 21,
	"v": 22,
	"w": 23,
	"x": 24,
	"y": 25,
	"z": 26,
	"A": 27,
	"B": 28,
	"C": 29,
	"D": 30,
	"E": 31,
	"F": 32,
	"G": 33,
	"H": 34,
	"I": 35,
	"J": 36,
	"K": 37,
	"L": 38,
	"M": 39,
	"N": 40,
	"O": 41,
	"P": 42,
	"Q": 43,
	"R": 44,
	"S": 45,
	"T": 46,
	"U": 47,
	"V": 48,
	"W": 49,
	"X": 50,
	"Y": 51,
	"Z": 52
};

let total = 0;

reader.on("line", (line: string) => {
	let first = line.slice(0, line.length/2);
	let second = line.slice(-line.length/2);
	for (let i of first.split("")) {
		if (second.includes(i)) {
			total += priorities[i];
			break;
		}
	}
});

reader.on("close", () => {
	console.log(total);
});
}

aoc_3a("input_3.txt");

const aoc_3b = (filename: string): void => {
	const reader = rd.createInterface(fs.createReadStream(filename));
	let priorities = {
		"a": 1,
		"b": 2,
		"c": 3,
		"d": 4,
		"e": 5,
		"f": 6,
		"g": 7,
		"h": 8,
		"i": 9,
		"j": 10,
		"k": 11,
		"l": 12,
		"m": 13,
		"n": 14,
		"o": 15,
		"p": 16,
		"q": 17,
		"r": 18,
		"s": 19,
		"t": 20,
		"u": 21,
		"v": 22,
		"w": 23,
		"x": 24,
		"y": 25,
		"z": 26,
		"A": 27,
		"B": 28,
		"C": 29,
		"D": 30,
		"E": 31,
		"F": 32,
		"G": 33,
		"H": 34,
		"I": 35,
		"J": 36,
		"K": 37,
		"L": 38,
		"M": 39,
		"N": 40,
		"O": 41,
		"P": 42,
		"Q": 43,
		"R": 44,
		"S": 45,
		"T": 46,
		"U": 47,
		"V": 48,
		"W": 49,
		"X": 50,
		"Y": 51,
		"Z": 52
	};
	
	let total = 0;
	let lineNum = 0;
	let grpArr: string[][] = []
	
	reader.on("line", (line: string) => {
		lineNum++;
		let strArr = line.split("");
		if (lineNum % 3 === 0) {
			for (let i of strArr) {
				if (grpArr[0].includes(i) && grpArr[1].includes(i)) {
					total += priorities[i];
					break;
				}
			} 
			// console.log("start");
			// console.log(grpArr);
			// console.log("end");
			grpArr = [];
		} else {
			grpArr.push(strArr);
		}
	});
	
	reader.on("close", () => {
		console.log(total);
	});
	}

aoc_3b("input_3.txt");
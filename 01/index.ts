// https://adventofcode.com/2022/day/1
import * as fs from 'fs';
import { EOL } from 'os';

const c: Array<number> = [];

const input = fs.readFileSync('input.txt').toString();

var i = 0;

input.split(EOL).forEach(line => {
	if (line == '') {
		c.push(i);
		i = 0;
		return;
	}

	i += Number.parseInt(line);
});

c.sort((a, b) => b - a);

console.log('part1: ' + c[0]);
console.log('part2: ' + (c[0] + c[1] + c[2]));

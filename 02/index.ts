import { EOL } from 'os';
// https://adventofcode.com/2022/day/2

import { readFileSync } from 'fs';

// first column = enemy move
// A for Rock
// B for Paper
// C for Scissors

// second column = own move
// X for Rock
// Y for Paper
// Z for Scissors

// scores
// 1 for Rock
// 2 for Paper
// 3 for Scissors
// 0 for lost
// 3 for draw
// 6 for won

const input = readFileSync('input.txt').toString();

const scorePart1: number = input.split(EOL).reduce((prev, curr, idx) => {
	const [e, o] = curr.split(' ');

	var points = prev;

	if (o == 'X') {
		points += 1;
		if (e == 'A') points += 3;
		if (e == 'B') points += 0;
		if (e == 'C') points += 6;
	} else if (o == 'Y') {
		points += 2;
		if (e == 'A') points += 6;
		if (e == 'B') points += 3;
		if (e == 'C') points += 0;
	} else if (o == 'Z') {
		points += 3;
		if (e == 'A') points += 0;
		if (e == 'B') points += 6;
		if (e == 'C') points += 3;
	}

	return points;
}, 0);

// second column = result
// X for lose
// Y for draw
// Z for win

const scorePart2: number = input.split(EOL).reduce((prev, curr, idx) => {
	const [e, r] = curr.split(' ');

	var points = prev;

	// case lose
	if (r == 'X') {
		points += 0;
		if (e == 'A') points += 3;
		if (e == 'B') points += 1;
		if (e == 'C') points += 2;
		// case draw
	} else if (r == 'Y') {
		points += 3;
		if (e == 'A') points += 1;
		if (e == 'B') points += 2;
		if (e == 'C') points += 3;
		// case win
	} else if (r == 'Z') {
		points += 6;
		if (e == 'A') points += 2;
		if (e == 'B') points += 3;
		if (e == 'C') points += 1;
	}

	return points;
}, 0);

console.log('part1: ' + scorePart1);
console.log('part2: ' + scorePart2);

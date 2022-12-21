// https://adventofcode.com/2022/day/4/

import { readFileSync } from 'fs';
import { EOL } from 'os';

const input = readFileSync('input.txt').toString();

const sumIncludes = input.split(EOL).reduce((prev, curr) => {
	const [s1, s2] = curr.split(',');

	const [s1s, s1e]: number[] = s1.split('-').map(s => Number.parseInt(s));
	const [s2s, s2e]: number[] = s2.split('-').map(s => Number.parseInt(s));

	if ((s1s <= s2s && s1e >= s2e) || (s2s <= s1s && s2e >= s1e)) {
		return prev + 1;
	}
	return prev;
}, 0);

const sumContains = input.split(EOL).reduce((prev, curr) => {
	const [s1, s2] = curr.split(',');

	const [s1s, s1e]: number[] = s1.split('-').map(s => Number.parseInt(s));
	const [s2s, s2e]: number[] = s2.split('-').map(s => Number.parseInt(s));

	if ((s1s <= s2e && s2s <= s1e) || (s2s <= s1e && s1s <= s2e)) return prev + 1;

	return prev;
}, 0);

console.log('part1: ' + sumIncludes);
console.log('part2: ' + sumContains);

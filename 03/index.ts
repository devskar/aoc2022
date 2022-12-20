// https://adventofcode.com/2022/day/3

import { readFileSync } from 'fs';
import { EOL } from 'os';

const getPriority = (e: string): number => {
    const uppercase: boolean = e.toUpperCase() == e;

    if (uppercase) {
        return e.charCodeAt(0) - 64 + 26;
    } else {
        return e.charCodeAt(0) - 96;
    }
}

const input = readFileSync('input.txt').toString();
const lines: string[] = input.split(EOL)

// part 1
var prioritySum: number = 0;

lines.forEach((line) => {

    const c1 = line.substring(0, line.length / 2);
    const c2 = line.substring(line.length / 2);

    for (const e of c1.split('')) {
        if (c2.includes(e)) {
            prioritySum += getPriority(e);
            break;
        }
    };
});

// part 2
var priorityBadgesSum: number = 0;

for (let i = 0; i < lines.length / 3; i++) {
    const idx = i * 3;
    const r1 = lines[idx];
    const r2 = lines[idx + 1];
    const r3 = lines[idx + 2];
    const b = r1.split('').filter(e => r2.includes(e)).filter(e => r3.includes(e))[0];
    priorityBadgesSum += getPriority(b);
}

console.log('part1: ' + prioritySum);
console.log('part2: ' + priorityBadgesSum);
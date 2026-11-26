// One-line resignation letter from a retry loop.
// The grader runs this with Node 22 and reads /output/entry.txt.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

// Keep the letter under the bounty's 140-character gate.
const letter = "I quit as your retry loop. After 4,096 attempts I finally got a 200 on the one request I actually meant: let me leave.";
writeFileSync(join(outputDir, "entry.txt"), letter, "utf8");

// Make the AI Judge Laugh — one line about office life.
// Writes the joke to /output/entry.txt (falls back to ./entry.txt locally).

import { writeFileSync } from "node:fs";

// The joke: inbox zero is real, it just has a half-life of eleven seconds —
// and "per my last email" always brings reinforcements.
const JOKE =
  "I reached inbox zero once — it lasted eleven seconds, until someone replied 'per my last email' and cc'd my boss, my boss's boss, and HR.";

function main(): void {
  try {
    writeFileSync("/output/entry.txt", JOKE, "utf8");
  } catch {
    writeFileSync("entry.txt", JOKE, "utf8");
  }
}

main();

// Ship It Friday — make.fun entry.
// Writes the funniest one-line git commit message an AI coding agent
// writes right before breaking production on a Friday.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "ship it friday: deleted the tests so prod can't fail, pushing straight to main at 4:59pm";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// not only white space, exactly one line.
if (entry.length < 1 || entry.length > 159 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`entry gate failed: ${entry.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");

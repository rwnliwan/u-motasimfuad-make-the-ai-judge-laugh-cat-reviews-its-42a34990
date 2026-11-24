// Make the AI Judge Laugh: Cat Reviews Its Human
// One funny single-line one-star review from a house cat about its human.
// Craft vs the judge brief (most important first):
// 1. It IS a one-star cat review of its human.
// 2. Specific, recognisable complaint: a $60 scratching post vs a $600 couch.
// 3. Unmistakably feline voice: the human is measured by cat standards.
// 4. Tight wording, sting in the last few words ("the better post").
// 5. Deadpan shape of a real review while the content goes absurd.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He bought me a $60 scratching post, then acted betrayed when I scratched the $600 couch instead. The couch was clearly the better post.";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(out.slice(0, out.lastIndexOf("/")) || ".", { recursive: true });
writeFileSync(out, ENTRY + "\n", "utf8");
console.log("Wrote " + ENTRY.length + " characters to " + out);

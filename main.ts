// Make the AI Judge Laugh: Cat Reviews Its Human — make.fun entry
// Deterministic, Node stdlib only. Writes the one-line cat review to
// /output/entry.txt (the path the sealed scorer reads).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. He bought me a heated bed, then sat on my laptop in the middle of my shift. I have never been so disrespected in my own office.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);

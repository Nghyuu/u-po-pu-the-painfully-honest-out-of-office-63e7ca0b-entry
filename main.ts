// The Painfully Honest Out-of-Office — writes one single-sentence auto-reply to entry.txt.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
const sentence = "I'm out of the office until Monday and will cheerfully ignore your email until then, but thank you for writing, and I'll read it eventually and reply as soon as I can.";
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, sentence + "\n", "utf8");
chmodSync(outPath, 0o644);

import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("dist/client");

await mkdir(outputDirectory, { recursive: true });
await writeFile(path.join(outputDirectory, ".nojekyll"), "");
await copyFile(path.join(outputDirectory, "index.html"), path.join(outputDirectory, "404.html"));

console.log(`Prepared ${outputDirectory} for GitHub Pages at /DynoCam-Site/`);

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("publishes DynoCam product content and real app screens", async () => {
  const [client, html, css, config] = await Promise.all([
    readFile(new URL("app/HomeClient.tsx", root), "utf8"),
    readFile(new URL("index.html", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("vite.config.ts", root), "utf8"),
  ]);

  assert.match(client, /당신의 등반을/);
  assert.match(client, /iphone-editor\.png/);
  assert.match(client, /ipad-editor\.png/);
  assert.match(client, /AI CLIMBING CAMERA/);
  assert.match(html, /DynoCam — AI Climbing Camera/);
  assert.match(html, /bbdyno\.github\.io\/DynoCam-Site\/og\.png/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(config, /base:\s*"\/DynoCam-Site\/"/);
  assert.doesNotMatch(client, /SkeletonPreview|codex-preview/);
});

test("includes production media and GitHub Pages workflow", async () => {
  const required = [
    "public/images/climbing-motion-hero.png",
    "public/images/dynocam-icon.png",
    "public/images/screens/iphone-trim.png",
    "public/images/screens/iphone-processing.png",
    "public/images/screens/iphone-editor.png",
    "public/images/screens/ipad-editor.png",
    "public/og.png",
    "scripts/prepare-pages.mjs",
    ".github/workflows/deploy-pages.yml",
  ];
  await Promise.all(required.map((path) => access(new URL(path, root))));
});

test("prepares the project-path static export for GitHub Pages", async () => {
  const [packageJson, prepareScript, workflow] = await Promise.all([
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("scripts/prepare-pages.mjs", root), "utf8"),
    readFile(new URL(".github/workflows/deploy-pages.yml", root), "utf8"),
  ]);

  assert.match(packageJson, /node scripts\/prepare-pages\.mjs/);
  assert.match(prepareScript, /DynoCam-Site/);
  assert.match(prepareScript, /\.nojekyll/);
  assert.match(workflow, /path:\s*dist\/client/);
});

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
  assert.match(client, /AI ACTION CAMERA/);
  assert.match(client, /광고 1회로 워터마크 제거/);
  assert.match(client, /Climbing/);
  assert.match(client, /Dance/);
  assert.match(html, /AI Person Tracking/);
  assert.match(html, /bbdyno\.github\.io\/DynoCam-Site\/og\.png/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(config, /base:\s*"\/DynoCam-Site\/"/);
  assert.doesNotMatch(client, /SkeletonPreview|codex-preview/);
});

test("publishes the free, Pro, rewarded ad, and privacy contract", async () => {
  const [client, privacy, readme] = await Promise.all([
    readFile(new URL("app/HomeClient.tsx", root), "utf8"),
    readFile(new URL("public/privacy/index.html", root), "utf8"),
    readFile(new URL("README.md", root), "utf8"),
  ]);

  assert.match(client, /720p/);
  assert.match(client, /30초/);
  assert.match(client, /1080p/);
  assert.match(client, /\$1\.99/);
  assert.match(client, /\$14\.99/);
  assert.match(privacy, /Google Mobile Ads/);
  assert.match(privacy, /Google User Messaging Platform/);
  assert.match(privacy, /광고를 거절했거나 이용할 수 없는 경우/);
  assert.match(readme, /분석과 미리보기에는 횟수 제한이 없습니다/);
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

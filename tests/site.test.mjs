import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("publishes the build 38 product story in five complete locales", async () => {
  const [client, translations, html] = await Promise.all([
    readFile(new URL("app/HomeClient.tsx", root), "utf8"),
    readFile(new URL("app/i18n.ts", root), "utf8"),
    readFile(new URL("index.html", root), "utf8"),
  ]);

  for (const locale of ["en", "ko", "ja", "zh-Hans", "zh-Hant"]) {
    assert.match(translations, new RegExp(`(?:"${locale}"|${locale}):`));
  }
  assert.match(translations, /Follow Engine V2/);
  assert.match(translations, /Action Intelligence/);
  assert.match(translations, /Best Moment/);
  assert.match(translations, /재생 바를 움직이지 않아도/);
  assert.match(client, /screenshotSources/);
  assert.match(client, /ipad-live-frame\.png/);
  assert.match(client, /dynocam-locale/);
  assert.match(html, /hreflang="zh-Hant"/);
  assert.match(html, /AI Camera Operator for Climbing Videos/);
  assert.doesNotMatch(client, /PhoneFrame|TabletFrame/);
});

test("states the current Free, rewarded, Pro, privacy, and review contract", async () => {
  const [translations, privacy, support, readme] = await Promise.all([
    readFile(new URL("app/i18n.ts", root), "utf8"),
    readFile(new URL("public/privacy/index.html", root), "utf8"),
    readFile(new URL("public/support/index.html", root), "utf8"),
    readFile(new URL("README.md", root), "utf8"),
  ]);

  assert.match(translations, /720p/);
  assert.match(translations, /1080p/);
  assert.match(translations, /30 seconds/);
  assert.match(translations, /Monthly and annual Pro plans/);
  assert.doesNotMatch(translations, /\$1\.99|\$14\.99/);
  assert.match(privacy, /Google Mobile Ads/);
  assert.match(privacy, /Google User Messaging Platform/);
  assert.match(privacy, /Coffee Tip/);
  assert.match(privacy, /does not upload your source or exported videos/);
  assert.match(support, /current playhead immediately/);
  assert.match(support, /Best Moment/);
  assert.match(readme, /build 38/i);
});

test("localizes support and privacy across all App Store locales", async () => {
  const [privacy, support, localeScript] = await Promise.all([
    readFile(new URL("public/privacy/index.html", root), "utf8"),
    readFile(new URL("public/support/index.html", root), "utf8"),
    readFile(new URL("public/locale-page.js", root), "utf8"),
  ]);

  for (const locale of ["en", "ko", "ja", "zh-Hans", "zh-Hant"]) {
    const marker = `data-locale="${locale}"`;
    assert.ok(privacy.includes(marker));
    assert.ok(support.includes(marker));
  }
  assert.match(localeScript, /navigator\.languages/);
  assert.match(localeScript, /localStorage\.getItem\("dynocam-locale"\)/);
  assert.match(localeScript, /aria-pressed/);
});

test("includes release media and the GitHub Pages workflow", async () => {
  const required = [
    "public/images/climbing-motion-hero.png",
    "public/images/dynocam-icon.png",
    "public/images/download-on-the-app-store.svg",
    "public/images/release/01-choose-subject.png",
    "public/images/release/02-motion-analysis.png",
    "public/images/release/03-follow-style.png",
    "public/images/release/04-live-frame.png",
    "public/images/release/05-best-moment.png",
    "public/images/release/ipad-live-frame.png",
    "public/og.png",
    "scripts/prepare-pages.mjs",
    ".github/workflows/deploy-pages.yml",
  ];
  await Promise.all(required.map((path) => access(new URL(path, root))));
});

test("uses Apple's official App Store badge and product link", async () => {
  const [client, css, translations, badge, readme] = await Promise.all([
    readFile(new URL("app/HomeClient.tsx", root), "utf8"),
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/i18n.ts", root), "utf8"),
    readFile(new URL("public/images/download-on-the-app-store.svg", root), "utf8"),
    readFile(new URL("README.md", root), "utf8"),
  ]);

  assert.match(client, /https:\/\/apps\.apple\.com\/app\/id6800616313/);
  assert.match(client, /className="app-store-badge"/);
  assert.match(client, /aria-label=\{t\.hero\.secondary\}/);
  assert.match(css, /\.app-store-badge img \{[^}]*height: 40px/);
  assert.match(css, /\.app-store-badge \{[^}]*padding: 10px/);
  assert.match(translations, /Apple and the Apple logo are trademarks of Apple Inc\./);
  assert.match(badge, /Download_on_the_App_Store_Badge_US-UK_RGB_blk/);
  assert.match(readme, /public\/images\/download-on-the-app-store\.svg/);
  assert.doesNotMatch(readme, /img\.shields\.io\/badge\/App_Store/);
});

test("keeps responsive, accessible, project-path-safe output", async () => {
  const [css, packageJson, prepareScript, workflow, config, html] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("package.json", root), "utf8"),
    readFile(new URL("scripts/prepare-pages.mjs", root), "utf8"),
    readFile(new URL(".github/workflows/deploy-pages.yml", root), "utf8"),
    readFile(new URL("vite.config.ts", root), "utf8"),
    readFile(new URL("index.html", root), "utf8"),
  ]);

  assert.match(css, /env\(safe-area-inset-top\)/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(html, /viewport-fit=cover/);
  assert.match(packageJson, /node scripts\/prepare-pages\.mjs/);
  assert.match(prepareScript, /DynoCam-Site/);
  assert.match(prepareScript, /\.nojekyll/);
  assert.match(workflow, /path:\s*dist\/client/);
  assert.match(config, /base:\s*"\/DynoCam-Site\/"/);
});

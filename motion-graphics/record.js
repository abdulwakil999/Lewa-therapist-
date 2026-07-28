const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-core');

const OUT_DIR = path.join(__dirname, 'render');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--disable-gpu-vsync', '--autoplay-policy=no-user-gesture-required'],
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: OUT_DIR, size: { width: 1920, height: 1080 } },
  });

  const page = await context.newPage();
  await page.goto('file://' + path.join(__dirname, 'animation.html'));

  const totalDuration = await page.evaluate(() => window.__totalDuration);
  console.log('Animation total duration (ms):', totalDuration);

  await page.waitForFunction(() => window.__animationDone === true, null, { timeout: totalDuration + 10000 });
  // small tail buffer so the last frame isn't cut short
  await page.waitForTimeout(500);

  const video = page.video();
  await page.close();
  await context.close();
  await browser.close();

  const videoPath = await video.path();
  const finalPath = path.join(OUT_DIR, 'lewa-vox-motion-graphics.webm');
  fs.renameSync(videoPath, finalPath);
  console.log('Saved webm to', finalPath);
})();

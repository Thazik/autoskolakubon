import { chromium } from '@playwright/test';
import fs from 'fs';

const renderIcon = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Create an HTML page with the exact text and fonts
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet">
        <style>
          body { 
            margin: 0; 
            padding: 0; 
            background: transparent; 
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon-container {
            width: 512px;
            height: 512px;
            background-color: #0c1014;
            border-radius: 128px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Montserrat', system-ui, sans-serif;
            font-weight: 900;
            font-size: 280px;
            letter-spacing: -10px;
            color: #ffffff;
          }
          .blue { color: #0761ED; }
        </style>
      </head>
      <body>
        <div id="icon" class="icon-container">
          <span style="transform: translateY(10px);">
            <span>A</span><span class="blue">K</span>
          </span>
        </div>
      </body>
    </html>
  `);

  // Wait for network idle to ensure fonts are loaded
  await page.waitForLoadState('networkidle');
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  const iconElement = await page.$('#icon');

  // Save base SVG
  const svgTpl = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="128" fill="#0C1014"/>
  <text x="256" y="358" font-family="'Montserrat', system-ui, sans-serif" font-weight="900" font-size="280" text-anchor="middle" letter-spacing="-10">
    <tspan fill="#ffffff">A</tspan><tspan fill="#0761ED">K</tspan>
  </text>
</svg>`;
  fs.writeFileSync('./public/favicon.svg', svgTpl);

  // Generate apple-touch-icon (180x180)
  await page.setViewportSize({ width: 180, height: 180 });
  await page.evaluate(() => {
    const el = document.getElementById('icon');
    el.style.width = '180px';
    el.style.height = '180px';
    el.style.borderRadius = '40px'; // scaled down radius
    el.style.fontSize = '98px';
    el.style.letterSpacing = '-4px';
  });
  await iconElement.screenshot({ path: './public/apple-touch-icon.png', omitBackground: true });

  // Generate favicon-32x32.png
  await page.setViewportSize({ width: 32, height: 32 });
  await page.evaluate(() => {
    const el = document.getElementById('icon');
    el.style.width = '32px';
    el.style.height = '32px';
    el.style.borderRadius = '8px'; // scaled down radius
    el.style.fontSize = '18px';
    el.style.letterSpacing = '-1px';
  });
  await iconElement.screenshot({ path: './public/favicon-32x32.png', omitBackground: true });

  // Generate favicon-16x16.png
  await page.setViewportSize({ width: 16, height: 16 });
  await page.evaluate(() => {
    const el = document.getElementById('icon');
    el.style.width = '16px';
    el.style.height = '16px';
    el.style.borderRadius = '4px'; // scaled down radius
    el.style.fontSize = '9px';
    el.style.letterSpacing = '0px';
  });
  await iconElement.screenshot({ path: './public/favicon-16x16.png', omitBackground: true });

  // And a 192x192 for Android
  await page.setViewportSize({ width: 192, height: 192 });
  await page.evaluate(() => {
    const el = document.getElementById('icon');
    el.style.width = '192px';
    el.style.height = '192px';
    el.style.borderRadius = '48px'; // scaled down radius
    el.style.fontSize = '105px';
    el.style.letterSpacing = '-4px';
  });
  await iconElement.screenshot({ path: './public/android-chrome-192x192.png', omitBackground: true });
  
  // And a 512x512 for Android
  await page.setViewportSize({ width: 512, height: 512 });
  await page.evaluate(() => {
    const el = document.getElementById('icon');
    el.style.width = '512px';
    el.style.height = '512px';
    el.style.borderRadius = '128px'; // original radius
    el.style.fontSize = '280px';
    el.style.letterSpacing = '-10px';
  });
  await iconElement.screenshot({ path: './public/android-chrome-512x512.png', omitBackground: true });

  // Use the 32x32 trick for favicon.ico as many systems support ico just being a renamed PNG
  fs.copyFileSync('./public/favicon-32x32.png', './public/favicon.ico');

  await browser.close();
  console.log('Icons generated successfully!');
};

renderIcon().catch(console.error);

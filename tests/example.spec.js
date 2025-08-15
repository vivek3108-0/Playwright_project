// tests/example.spec.js
const { test, expect } = require('@playwright/test');

test('Homepage should have correct title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Should navigate to docs page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click('text=Docs');
  await expect(page).toHaveURL(/.*docs/);
});
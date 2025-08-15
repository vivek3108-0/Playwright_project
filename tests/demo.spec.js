const { test, expect } = require("@playwright/test");
test.setTimeout(90000);
test("E-commerce end-to-end flow", async ({ page }) => {
  // Login page open
  await page.goto("https://www.saucedemo.com/");
  await page.waitForTimeout(2000);

  // Username fill
  await page.fill('[data-test="username"]', "standard_user");
  await page.waitForTimeout(2000);

  // Password fill
  await page.fill('[data-test="password"]', "secret_sauce");
  await page.waitForTimeout(2000);

  // Login button click
  await page.click('[data-test="login-button"]');
  await page.waitForTimeout(2000);

  // Inventory page check
  await expect(page).toHaveURL(/inventory/);
  await page.waitForTimeout(2000);

  // First product add to cart
  await page.click(".inventory_item button");
  await page.waitForTimeout(2000);

  // Cart open
  await page.click(".shopping_cart_link");
  await page.waitForTimeout(2000);

  // Cart page check
  await expect(page).toHaveURL(/cart/);
  await page.waitForTimeout(2000);

  // Checkout button click
  await page.click('[data-test="checkout"]');
  await page.waitForTimeout(2000);

  // First name fill
  await page.fill('[data-test="firstName"]', "John");
  await page.waitForTimeout(2000);

  // Last name fill
  await page.fill('[data-test="lastName"]', "Doe");
  await page.waitForTimeout(2000);

  // Postal code fill
  await page.fill('[data-test="postalCode"]', "12345");
  await page.waitForTimeout(2000);

  // Continue button click
  await page.click('[data-test="continue"]');
  await page.waitForTimeout(2000);

  // Finish button click
  await page.click('[data-test="finish"]');
  await page.waitForTimeout(2000);

  // Order complete check
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );
  await page.waitForTimeout(2000);

  // Logout process
  await page.click("#react-burger-menu-btn");
  await page.waitForTimeout(2000);
  await page.click("#logout_sidebar_link");
  await page.waitForTimeout(2000);

  // Back to login page check
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await page.waitForTimeout(2000);
});

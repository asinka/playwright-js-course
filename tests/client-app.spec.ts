const { test, expect } = require('@playwright/test');

test('Login and check header of first card', async ({ page }) => {
  await page.goto('/client');
  await expect(page.locator('.login-title')).toHaveText('Log in');

  await page.locator('#userEmail').fill('blablabla@bababa.org');
  await page.locator('#userPassword').fill('notSecurePassword#1');
  await page.locator('#login').click();
  await page.waitForResponse('/api/ecom/product/get-all-products');
  const cardsCount = await page.locator('.card-body b').count();

  await expect(cardsCount).toBeGreaterThan(0);
});

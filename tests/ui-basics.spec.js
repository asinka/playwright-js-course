const { test, expect } = require('@playwright/test');

test('Login to rahulshettyacademy test', async ({ page }) => {
  const userEmailInput = page.locator('#username');
  const userPasswordInput = page.locator('[type="password"]');
  const signInButton = page.locator('#signInBtn');
  const cardTitles = page.locator('.card-body a');

  await page.goto('/loginpagePractise/');
  await userEmailInput.fill('rahulshettyacademy');
  await userPasswordInput.type('learning');
  await Promise.all([page.waitForURL('/angularpractice/shop'), signInButton.click()]);

  const allCardsCount = await cardTitles.count();
  await expect(allCardsCount).toBeGreaterThan(0);
});

test('UI controls', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const userName = page.locator('#username');
  const signin = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');
  await dropdown.selectOption('consult');
  await page.pause();
});

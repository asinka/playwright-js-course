const { test, expect } = require('@playwright/test');

test('Login to rahulshettyacademy test', async ({ page }) => {
  const userEmailInput = page.locator('[formcontrolname="userEmail"]');
  const userPasswordInput = page.locator('[formcontrolname="userPassword"]');
  const loginButton = page.locator('[value="Login"]');

  await page.goto('https://rahulshettyacademy.com/client');
  await userEmailInput.fill('rahulshetty@gmail.com');
  await userPasswordInput.type('Iamking@000');
  await loginButton.click();
});

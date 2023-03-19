const { test, expect } = require('@playwright/test');

test('Login to rahulshettyacademy test', async ({ page }) => {
  const userEmailInput = page.locator('#username');
  const userPasswordInput = page.locator('[type="password"]');
  const signInButton = page.locator('#signInBtn');
  const cardTitles = page.locator('.card-body a');

  await page.goto('/loginpagePractise/');
  await userEmailInput.fill('rahulshettyacademy');
  await userPasswordInput.type('learning');
  await signInButton.click();
  await expect(cardTitles.first()).toHaveText('iphone X');

  const allTitlesText = await cardTitles.allTextContents();

  console.log(allTitlesText);
});

test('Register new accout in Rashulacademy.com', async ({ page }) => {
  await page.goto('/client');
  await page.locator('a:text("Register here")').click();
  await expect(page.locator('.login-title')).toHaveText('Register');
  await page.locator('#firstName').type('Maname');
  await page.locator('#lastName').type('Famiale');
  await page.locator('#userEmail').type('blablabla@bababa.org');
  await page.locator('#userMobile').type('7564839482');
  await page.locator('[formcontrolname="occupation"]').selectOption('Student');
  await page.locator('[value="Female"]').check();
  await page.locator('#userPassword').type('notSecurePassword#1');
  await page.locator('#confirmPassword').type('notSecurePassword#1');
  await page.locator('[formcontrolname="required"]').check();

  await page.locator('#login').click();
  await page.locator('button:text("Login")');
  await expect(page.locator('.login-title')).toHaveText('Log in');

  await page.locator('#userEmail').fill('blablabla@bababa.org');
  await page.locator('#userPassword').fill('notSecurePassword#1');
  await page.locator('#login').click();

  console.log(await page.locator('.card-body').locator('b').first().textContent());
});

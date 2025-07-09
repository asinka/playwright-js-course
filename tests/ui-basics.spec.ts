import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/LoginPage';

test('Login to rahulshettyacademy test', async ({ page }) => {
  const userEmailInput = page.locator('#username');
  const userPasswordInput = page.locator('[type="password"]');
  const signInButton = page.locator('#signInBtn');
  const cardTitles = page.locator('.card-body a');

  await page.goto('/loginpagePractise/');
  await userEmailInput.fill('rahulshettyacademy');
  await userPasswordInput.fill('learning');
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
});

test('Register', async ({ page }) => {
  await page.goto('/client');
  await page.locator('[class="login-wrapper-footer-text"]').click();
  const registerPage = new RegisterPage(page);

  const user = {
    email: faker.internet.email(),
    password: faker.internet.password()
  };
  await registerPage.fillForm(
    faker.person.firstName(),
    faker.person.lastName(),
    user.email,
    faker.string.numeric({length: 10}),
    '1: Doctor',
    'Female',
    user.password
  );
  await registerPage.registerButton.click();
  await registerPage.loginButton.click();

  const loginPage = new LoginPage(page);
  await loginPage.login(user);
  
  await expect(page.locator('.card-body').first()).toBeVisible();
});

test.only('Child windows handle', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const documentLink = page.locator('[href*="documents-request"]');
  const newPagePromise = context.waitForEvent('page');

  await documentLink.click();
  const newPage = await newPagePromise;
  
  // await page.goto('/client');
  // const user = {
  //   email: 'Freda_Boyle70@hotmail.com',
  //   password: '6fn55_M76rzrON5',
  // }
  // const loginPage = new LoginPage(page);
  // await loginPage.login(user);
});

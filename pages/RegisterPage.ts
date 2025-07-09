import { Locator, Page } from "@playwright/test";

export class RegisterPage {
    public readonly page: Page;
    public readonly firstNameInput: Locator;
    public readonly lastNameInput: Locator;
    public readonly emailInput: Locator;
    public readonly phoneNumberInput: Locator;
    public readonly occupationSelectBox: Locator;
    public readonly passwordInput: Locator;
    public readonly confirmPasswordInput: Locator;
    public readonly im18Checkbox: Locator;
    public readonly registerButton: Locator;
    public readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator("#firstName");
        this.lastNameInput = page.locator("#lastName");
        this.emailInput = page.locator("#userEmail");
        this.phoneNumberInput = page.locator("#userMobile");
        this.occupationSelectBox = page.locator("[formcontrolname='occupation']");
        this.passwordInput = page.locator("#userPassword");
        this.confirmPasswordInput = page.locator("#confirmPassword");
        this.im18Checkbox = page.locator("input[formcontrolname='required']");
        this.registerButton = page.locator("#login");
        this.loginButton = page.locator("button[routerlink='/auth']");
    }

    async fillForm(firstName: string, lastName: string, email: string, phone: string, occupation: string, gender: string, password: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.phoneNumberInput.fill(phone);
        await this.occupationSelectBox.selectOption(occupation);
        await this.page.locator(`input[value="${gender}"]`).check();
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.im18Checkbox.check();
    }
}

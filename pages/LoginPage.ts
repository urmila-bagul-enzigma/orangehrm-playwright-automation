import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    usernameInput =  this.page.getByRole('textbox', {
        name: 'Username'
    });
    passwordInput = this.page.getByPlaceholder('Password');

    loginButton = this.page.getByRole('button', { name: 'Login' });

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();
    }
}
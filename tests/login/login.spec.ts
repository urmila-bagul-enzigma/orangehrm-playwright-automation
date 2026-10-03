import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { config } from '../../utils/config';

test('OrangeHRM login', async ({ page }) => {

    const loginPage = new LoginPage(page);

   /* await page.goto(
        'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    );*/ //moved this to playwright.config.ts file to make it configurable and reusable across all tests

    await page.goto(`${config.baseURL}/auth/login`);

    await loginPage.login(config.username, config.password);

    await expect(page).toHaveURL(/dashboard/);
});
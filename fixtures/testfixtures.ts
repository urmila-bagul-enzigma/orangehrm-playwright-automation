import { test as base, page, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { EmployeePage } from '../pages/EmployeePage';
import { EmployeeApi } from '../api/EmployeeApi';
import { config } from '../utils/config';
type Role = 'admin' | 'ess';

type TestFixtures = {
    authenticatedPage: page;
    loginPage: LoginPage;
    employeePage: EmployeePage;
    employeeApi: EmployeeApi;
    loginAs: (role: Role) => Promise<Page>;
};

export const test = base.extend<TestFixtures>({

     authenticatedPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await page.goto(`${config.baseURL}/auth/login`);

        await loginPage.login(
            config.username,
            config.password
        );

        await use(page);
    },

    loginAs: async ({ page }, use) => {

    const loginAs = async (role: Role) => {

        const loginPage = new LoginPage(page);

        const credentials = config.roles[role];

         await page.goto(`${config.baseURL}/auth/login`, {
            waitUntil: 'commit'
        });
        
        await expect(loginPage.usernameInput).toBeVisible();
        await loginPage.login(
            credentials.username,
            credentials.password
        );

        return page;
    };

    await use(loginAs);
},

    employeePage: async ({ authenticatedPage }, use) => {
    await use(new EmployeePage(authenticatedPage));
},

    employeeApi: async ({ authenticatedPage }, use) => {
        await use(
            new EmployeeApi(
                authenticatedPage.context().request,
                config.baseURL
            )
        );
    }
});

export { expect } from '@playwright/test';
import { test, expect } from '../../fixtures/testFixtures';

test.skip('Admin user can access PIM module @smoke @role', async ({
    loginAs,
    employeePage
}) => {

    await loginAs('admin');

    await employeePage.navigateToPIM();

    await expect(employeePage.pimPageHeader).toBeVisible();
});


test.skip('ESS user cannot access PIM module @role', async ({
    loginAs,
    employeePage
}) => {

    await loginAs('ess');

    await expect(employeePage.pimLink).not.toBeVisible();
});
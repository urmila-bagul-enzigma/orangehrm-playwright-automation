import { Page, expect } from '@playwright/test';

export class EmployeePage {

    constructor(private page: Page) {}

    pimLink = this.page.getByRole('link', {
        name: 'PIM'
    });

    addButton = this.page.getByRole('button', {
        name: /Add/
    });

    firstNameInput = this.page.getByRole('textbox', {
        name: 'First Name'
    });

    middleNameInput = this.page.getByRole('textbox', {
        name: 'Middle Name'
    });

    lastNameInput = this.page.getByRole('textbox', {
    name: 'Last Name'
    });

    employeeDetailsLastNameInput = this.page.locator(
    'input[name="lastName"]'
    );

    employeeIdInput = this.page
        .locator('.oxd-input-group')
        .filter({ hasText: 'Employee Id' })
        .locator('input');

    saveButton = this.page.getByRole('button', {
        name: 'Save'
    });

    employeeListLink = this.page.getByRole('link', {
    name: 'Employee List'
});
employeeIdSearchInput = this.page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Employee Id' })
    .locator('input');

    searchButton = this.page.getByRole('button', {
    name: 'Search', exact: true
});

formLoader = this.page.locator('.oxd-form-loader');

personalDetailsForm = this.page
    .locator('form')
    .filter({ hasText: 'Employee Full Name' });

personalDetailsSaveButton = this.personalDetailsForm
    .getByRole('button', { name: 'Save' });

pimPageHeader = this.page.getByRole('heading', { name: 'PIM' });
   
   
   /**********************************Functions********************************************************/
   
    async navigateToPIM() {
        await this.pimLink.click();
        }

    async clickAddEmployee() {
        await this.addButton.click();
        await expect(this.firstNameInput).toBeVisible();
    }

    successMessage = this.page.getByText(/Successfully Saved/i);
    
    async createEmployee(
    firstName: string,
    middleName: string,
    lastName: string,
    employeeId: string
) {
    await this.firstNameInput.fill(firstName);
    await this.middleNameInput.fill(middleName);
    await this.lastNameInput.fill(lastName);
    await this.employeeIdInput.fill(employeeId);

    await this.saveButton.click();

    await expect(this.successMessage).toBeVisible();
}

    async verifyEmployeeCreated(employeeId: string) {
    await expect(this.employeeIdInput).toHaveValue(employeeId);
}

async navigateToEmployeeList() {
    await this.employeeListLink.click();
}

async searchEmployee(employeeId: string) {
     await expect(this.employeeIdSearchInput).toBeVisible();

    await this.employeeIdSearchInput.fill(employeeId);

   
    await this.searchButton.click();
}

getEmployeeRow(employeeId: string) {
    return this.page
        .locator('.oxd-table-row')
        .filter({ hasText: employeeId });
}

async verifyEmployeeExists(employeeId: string) {
    const employeeRow = this.getEmployeeRow(employeeId);

    await expect(employeeRow).toBeVisible();
}

async editEmployee(employeeId: string) {

    const employeeRow = this.getEmployeeRow(employeeId);

    const editButton = employeeRow.getByRole('button').first();

    await editButton.click();
}


//update method to edit employee details
async updateLastName(newLastName: string) {

    await this.employeeDetailsLastNameInput.fill(newLastName);

    console.log(
        'UI field before Save:',
        await this.employeeDetailsLastNameInput.inputValue()
    );

    const responsePromise = this.page.waitForResponse(
        response =>
            response.request().method() === 'PUT' &&
            response.url().includes('/api/v2/pim/employees/')
    );

    await this.personalDetailsSaveButton.click();

    const response = await responsePromise;

    console.log('Update API status:', response.status());
    console.log('Update API URL:', response.url());

    console.log(
        'Update API request:',
        response.request().postData()
    );

    console.log(
        'Update API response:',
        await response.text()
    );
}
async goToEmployeeList() {
    await this.employeeListLink.click();
}


async verifyEmployeeUpdated(
    employeeId: string,
    expectedLastName: string
) {
    const employeeRow = this.getEmployeeRow(employeeId);

    await expect(employeeRow).toContainText(expectedLastName);
}



async verifyLastName(expectedLastName: string) {

    await expect(this.employeeDetailsLastNameInput)
        .toHaveValue(expectedLastName);
}

}
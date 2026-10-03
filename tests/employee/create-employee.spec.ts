import { test, expect } from '../../fixtures/testFixtures';
import { LoginPage } from '../../pages/LoginPage';
import { EmployeePage } from '../../pages/EmployeePage';
import { EmployeeApi } from '../../api/EmployeeApi';
import { config } from '../../utils/config';
import employeeData  from '../../test-data/employees.json';

test('Create a new employee @regression @employee', async ({ page, employeePage, employeeApi }) => {

    await employeePage.navigateToPIM();

    await employeePage.clickAddEmployee();

    const employeeId = `EMP${Date.now().toString().slice(-6)}`;


await employeePage.createEmployee(
    employeeData.newEmployee.firstName,
    employeeData.newEmployee.middleName,
    employeeData.newEmployee.lastName,
    employeeId
);



//Find employee using API and get employee number to update the employee using API

const findResponse = await employeeApi.findEmployee(employeeId);

expect(findResponse.status()).toBe(200);

console.log('Find Employee API Status:', findResponse.status());

const findBody = await findResponse.json();

console.log('Find Employee API Response:', findBody);

const employeeNumber = findBody.data[0].empNumber;


const updateResponse = await employeeApi.updateEmployee(
    employeeNumber,
    employeeData.newEmployee.firstName,
    employeeData.newEmployee.middleName,
    employeeData.updatedEmployee.lastName,
    employeeId
);

expect(updateResponse.status()).toBe(200);

console.log('Update API Status:', updateResponse.status());

const updateBody = await updateResponse.json();

console.log('Update API Response:', updateBody);

const verifyResponse = await employeeApi.getEmployee(
    employeeNumber
);

console.log('Verify API Status:', verifyResponse.status());

const verifyBody = await verifyResponse.json();

expect(verifyBody.data.lastName)
        .toBe(employeeData.updatedEmployee.lastName);

console.log('Verify API Response:', verifyBody);

console.log(
    'Verified Last Name:',
    verifyBody.data.lastName
);

//expect(verifyBody.data.lastName).toBe('BagulUpdated');
expect(verifyBody.data.lastName).toBe(employeeData.updatedEmployee.lastName); /*Replace with test data*/


console.log('Update API Status:', updateResponse.status());


console.log('Employee Number:', employeeNumber);
console.log('Created Employee ID:', employeeId);
console.log('Employee Number:', employeeNumber)


const deleteResponse = await employeeApi.deleteEmployee(
    employeeNumber);

    expect(deleteResponse.status()).toBe(200);


console.log('Delete API Status:', deleteResponse.status());

const deleteBody = await deleteResponse.text();

console.log('Delete API Response:', deleteBody);

const deletedEmployeeResponse = await employeeApi.getEmployee(
    employeeNumber
);
 expect(deletedEmployeeResponse.status()).toBe(422);


console.log(
    'Get Deleted Employee Status:',
    deletedEmployeeResponse.status()
);

console.log(
    'Get Deleted Employee Response:',
    await deletedEmployeeResponse.text()
);

expect(deletedEmployeeResponse.status()).toBe(422);

});
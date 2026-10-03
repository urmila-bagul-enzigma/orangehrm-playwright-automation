import { APIRequestContext } from '@playwright/test';
const BASE_URL =
    'https://opensource-demo.orangehrmlive.com/web/index.php';
export class EmployeeApi {

    constructor(private request: APIRequestContext,  private baseURL: string) {}

    async findEmployee(employeeId: string) {

    return await this.request.get(
        `${BASE_URL}/api/v2/pim/employees?employeeId=${employeeId}`
    );
}
    async getEmployee(employeeNumber: string) {

         return await this.request.get(
        `${this.baseURL}/api/v2/pim/employees/${employeeNumber}`
        );
    }

   async updateEmployee(
    employeeNumber: string,
    firstName: string,
    middleName: string,
    lastName: string,
    employeeId: string
) {
    return await this.request.put(
        `${this.baseURL}/api/v2/pim/employees/${employeeNumber}/personal-details`,
        {
            data: {
                lastName,
                firstName,
                middleName,
                employeeId
            }
        }
    );
    }

    async deleteEmployee(employeeNumber: string) {

    return await this.request.delete(
        `${this.baseURL}/api/v2/pim/employees`,
        {
            data: {
                ids: [Number(employeeNumber)]
            }
        }
    );
}
}
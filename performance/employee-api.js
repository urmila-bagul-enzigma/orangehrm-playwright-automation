import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = 'https://opensource-demo.orangehrmlive.com';

export default function () {

    const loginResponse = http.post(
        `${BASE_URL}/web/index.php/auth/validate`,
        {
            username: 'Admin',
            password: 'admin123'
        }
    );

    console.log(`Login Status: ${loginResponse.status}`);
    console.log(`Login Body: ${loginResponse.body}`);

    check(loginResponse, {
        'login request successful': (r) => r.status === 200,
    });
}
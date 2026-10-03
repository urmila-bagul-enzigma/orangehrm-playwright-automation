type UserCredentials = {
    username: string;
    password: string;
};

type Environment = {
    baseURL: string;
    username: string;
    password: string;
    roles: {
        admin: UserCredentials;
        ess: UserCredentials;
    };
};

const environments: Record<string, Environment> = {

    qa: {
        baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
        username: 'Admin',
        password: 'admin123',

        roles: {
            admin: {
                username: 'Admin',
                password: 'admin123'
            },

            ess: {
                username: 'robert.johnson',
                password: 'admin1234'
            }
        }
    },

    uat: {
        baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
        username: 'Admin',
        password: 'admin123',

        roles: {
            admin: {
                username: 'Admin',
                password: 'admin123'
            },

            ess: {
                username: 'robert.johnson',
                password: 'admin1234'
            }
        }
    }
};

const environmentName = process.env.TEST_ENV || 'qa';

export const config = environments[environmentName];
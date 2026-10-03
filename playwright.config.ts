import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5 * 1000
    },

    fullyParallel: true,

    retries: process.env.CI ? 2 : 1,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['html', { open: 'never' }],
        ['list']
    ],

    use: {
        baseURL: process.env.BASE_URL ||
            'https://opensource-demo.orangehrmlive.com/web/index.php',

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        headless: true
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});
# OrangeHRM Playwright Automation Framework

## Overview

This project is a scalable UI and API automation framework built using Playwright and TypeScript for testing the OrangeHRM application.

The framework demonstrates:

- Page Object Model (POM)
- UI and API test automation
- Reusable Playwright fixtures
- Environment-based configuration
- Test data management
- Parallel test execution
- Retry and flaky-test handling
- Screenshots, videos and traces on failures
- HTML reporting
- GitHub Actions CI/CD
- Role-based access validation

## Technology Stack

- Playwright
- TypeScript
- Node.js
- REST API testing
- GitHub Actions
- Git/GitHub

## Application Under Test

OrangeHRM Demo:

https://opensource-demo.orangehrmlive.com/

## Project Structure

```text
orangehrm-playwright-automation/
│
├── api/
│   └── EmployeeApi.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── EmployeePage.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── create-employee.spec.ts
│   └── employee-role.spec.ts
│
├── test-data/
│   └── employees.json
│
├── utils/
│   └── config.ts
│
├── performance/
│   └── employee-api.js
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── playwright.config.ts
├── package.json
└── tsconfig.json
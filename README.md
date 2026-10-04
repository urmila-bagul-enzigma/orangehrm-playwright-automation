# OrangeHRM Playwright Automation Framework

## Overview

This project is a Playwright + TypeScript automation framework created as part of a
Senior QA Automation Engineer technical assessment.

The framework demonstrates UI automation, API validation, framework design,
test stability, parallel execution, reporting, and CI/CD integration.

## Application Under Test

**OrangeHRM Demo**

https://opensource-demo.orangehrmlive.com/

---

## Assessment Coverage

The following areas from the assessment are covered:

### 1. E2E Automation

- Application authentication
- Employee creation
- Employee search
- Employee update
- Employee deletion
- UI and API validation
- Employee lifecycle validation

### 2. Framework Design

- Page Object Model (POM)
- Reusable Playwright fixtures
- API abstraction
- Environment-based configuration
- External test data
- Modular project structure

### 3. CI/CD

- GitHub Actions
- Automated test execution
- Parallel test execution
- CI-specific retries
- HTML report generation
- Test artifacts

### 4. Stability & Diagnostics

- Playwright auto-waiting
- Retry mechanism
- Screenshot on failure
- Video on failure
- Trace on retry
- Flaky-test demonstration

### 5. Reporting

- Playwright HTML report
- GitHub Actions artifacts
- Failure diagnostics

### 6. Additional Framework Capabilities

- Role-based test framework
- Test tagging
- Parallel execution demonstration
- API-level verification

---

## Technology Stack

- Playwright
- TypeScript
- Node.js
- REST API
- Git
- GitHub
- GitHub Actions

---

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
│   ├── login/
│   │   └── login.spec.ts
│   ├── employee/
│   │   ├── create-employee.spec.ts
│   │   └── employee-role.spec.ts
│   ├── parallel-demo.spec.ts
│   └── flaky-demo.spec.ts
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
├── package-lock.json
├── tsconfig.json
└── README.md


#Framework Highlights
- Page Object Model for maintainable UI automation
- Custom fixtures for reusable test setup
- Dedicated API layer for backend validation
- Externalized test data
- Environment-specific configuration
- Parallel test execution
- CI-specific retry strategy
- Failure diagnostics using screenshot, video and trace
- GitHub Actions CI/CD pipeline
- Playwright HTML reporting

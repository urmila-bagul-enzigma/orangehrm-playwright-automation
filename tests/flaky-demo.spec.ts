import { test, expect } from '@playwright/test';

test('Flaky test demonstration', async () => {

    const randomValue = Math.random();

    console.log('Random value:', randomValue);

    expect(randomValue).toBeGreaterThan(0.5);
});
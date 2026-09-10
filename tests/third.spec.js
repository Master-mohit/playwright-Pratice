import {test, expect } from '@playwright/test';
import { afterEach } from 'node:test';

test('trial', async({ page }) => {
// ................Task 1...........................
    await page.goto('https://www.saucedemo.com');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html');
    await expect(page.getByText('Products')).toBeVisible();
})

// ............Task 2.............................
    await page.goto('https://www.saucedemo.com');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.getByRole('button', {name: 'Open Menu'}).click();
    await page.getByRole('button', {name: 'Logout'}).click();
    await expect(page.getByText('Username')).toBeVisible();


// .....................Task 3...................

    await page.goto('https://www.saucedemo.com');
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL('/inventory.html').toBeVisible();
    await page.locator('img').click();
    await page.getByRole('button', {name: 'Add to cart'}).click()


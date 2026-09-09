import { test, expect } from "@playwright/test"


test('Login', async({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder('Username').fill('problem_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: "Login"}).click();

    await expect(page.locator('.img')).toBeVisible();

})

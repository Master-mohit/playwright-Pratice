import { test, expect } from '@playwright/test'


test('Login test', async({ page }) => {
     
    await page.goto('https://www.amazon.in');

    await page.getByRole('link', {name: 'Mobiles'}).click();
     
    await expect(page.getByText('Mobiles & Accessories')).toBeVisible();
})



// Website open
//      ↓
// Email fill
//      ↓
// Password fill
//      ↓
// Login click
//      ↓
// Dashboard check
import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('complete a checkout process', async ({ page }) => {
  await login(page);
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});

test('checkout with missing postal code', async ({ page }) => {
  await login(page);
  await page.click('.shopping_cart_link');
  await page.click('[data-test="checkout"]');

  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  // Leave postal code empty
  await page.click('[data-test="continue"]');

  await expect(page.locator('[data-test="error"]')).toContainText('Error: Postal Code is required');
});
import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test('add and remove item from cart', async ({ page }) => {
  await login(page);

  const addButton = page.locator('.inventory_item:first-child button');
  await addButton.click();

  await page.click('.shopping_cart_link');
  const removeButton = page.locator('.cart_item button');
  await expect(removeButton).toHaveText('Remove');
  await removeButton.click();

  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBe(0);
});

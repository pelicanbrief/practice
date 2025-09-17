import { test, expect } from '@playwright/test';

test('Navigate to EPAM and verify Client Work page', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify "Client Work" text is visible
  const clientWorkText = await page.getByText('Client Work').first();
  await expect(clientWorkText).toBeVisible();
});
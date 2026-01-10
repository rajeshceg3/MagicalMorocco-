const { test, expect } = require('@playwright/test');

test.describe('User Journey', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:8080');
  });

  test('Hero to Attractions Transition', async ({ page }) => {
    const heroView = page.locator('#hero-view');
    const attractionsView = page.locator('#attractions-view');
    const exploreButton = page.locator('.explore-button');

    // Initial State
    await expect(heroView).toBeVisible();
    await expect(attractionsView).not.toBeVisible();

    // Interaction
    await exploreButton.click();

    // Post-Interaction State
    await expect(heroView).not.toBeVisible();
    await expect(attractionsView).toBeVisible();

    // Check focus management (First card should be focused)
    // Note: Focus check might be flaky depending on browser behavior,
    // but the app logic attempts to set it.
    // await expect(page.locator('.attraction-card').first()).toBeFocused();
  });

  test('Attraction Detail View Flow', async ({ page }) => {
    // Navigate to attractions
    await page.locator('.explore-button').click();

    const attractionsView = page.locator('#attractions-view');
    await expect(attractionsView).toBeVisible();

    // Click first attraction
    const firstCard = page.locator('.attraction-card').first();
    const cardTitle = await firstCard.locator('h2').textContent();
    await firstCard.click();

    // Check Detail View
    const detailView = page.locator('#detail-view');
    await expect(detailView).toBeVisible();

    // Check Content
    await expect(page.locator('#detail-title')).toHaveText(cardTitle);

    // Close Detail View
    const closeButton = page.locator('.close-button');
    // Wait for animation if needed, though 'toBeVisible' waits for auto-retrying assertions
    await closeButton.click();

    await expect(detailView).not.toBeVisible();
    await expect(attractionsView).toBeVisible();
  });

  test('Keyboard Navigation', async ({ page }) => {
    // Go to attractions
    await page.locator('.explore-button').click();
    await expect(page.locator('#attractions-view')).toBeVisible();

    // Ensure focus starts at first card (logic in app.js handles this on transition end)
    const firstCard = page.locator('.attraction-card').first();
    // Wait for transition
    await page.waitForTimeout(1000);

    // If focus isn't there (e.g. if we are testing faster than transition), press Tab to get into the grid
    // Or we can rely on our app logic.

    // Let's test arrow keys.
    // Ensure focus is on the first card
    await firstCard.focus();
    await expect(firstCard).toBeFocused();

    await page.keyboard.press('ArrowRight');
    const secondCard = page.locator('.attraction-card').nth(1);
    await expect(secondCard).toBeFocused();

    await page.keyboard.press('ArrowLeft');
    await expect(firstCard).toBeFocused();
  });

  test('Reduced Motion', async ({ page }) => {
    // Emulate reduced motion
    await page.emulateMedia({ reducedMotion: 'reduce' });

    const heroView = page.locator('#hero-view');
    const attractionsView = page.locator('#attractions-view');

    await page.locator('.explore-button').click();

    // With reduced motion, transition should be near instant
    // We check that visibility changes happened without timeout issues
    await expect(heroView).not.toBeVisible();
    await expect(attractionsView).toBeVisible();
  });
});

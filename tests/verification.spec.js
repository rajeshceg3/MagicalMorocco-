import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Assessment', () => {
    test.beforeEach(async ({ page }) => {
        // Log console errors
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.error(`[Browser Error]: ${msg.text()}`);
            }
        });

        // Log failed network requests
        page.on('requestfailed', request => {
            console.error(`[Network Error]: ${request.url()} - ${request.failure().errorText}`);
        });

        await page.goto('http://localhost:8080');
    });

    test('Basic Navigation and Functionality', async ({ page }) => {
        await expect(page).toHaveTitle('Whispers of Morocco');

        // Check Hero View
        const exploreButton = page.locator('.explore-button');
        await expect(exploreButton).toBeVisible();

        // Take Screenshot of Hero
        await page.screenshot({ path: '/home/jules/verification/hero_view.png' });

        // Navigate to Attractions
        await exploreButton.click();

        // Wait for attractions to appear
        const attractionsView = page.locator('#attractions-view');
        await expect(attractionsView).toBeVisible();
        await expect(attractionsView).toHaveCSS('opacity', '1');

        // Check cards
        const cards = page.locator('.attraction-card');
        const count = await cards.count();
        console.log(`Found ${count} attraction cards`);
        expect(count).toBeGreaterThan(0);

        // Take Screenshot of Attractions
        await page.screenshot({ path: '/home/jules/verification/attractions_view.png' });

        // Check for broken images
        const images = page.locator('.attraction-card img');
        for (let i = 0; i < count; i++) {
             const img = images.nth(i);
             const src = await img.getAttribute('src');
             // We can't easily check if image loaded successfully without JS property,
             // but our app hides broken images. Let's check if any are hidden.
             const isVisible = await img.isVisible();
             // If image logic works, broken images should be hidden (display: none).
             // But if we want to report broken links, we rely on network logs.
        }

        // Click first card
        await cards.first().click();

        // Wait for detail view
        const detailView = page.locator('#detail-view');
        await expect(detailView).toBeVisible();
        await expect(detailView).toHaveClass(/visible/);

        // Check focus trap - or at least that detail is open
        const closeButton = page.locator('.close-button');
        await expect(closeButton).toBeVisible();

        // Take Screenshot of Detail
        await page.screenshot({ path: '/home/jules/verification/detail_view.png' });

        // Close detail
        await closeButton.click();
        await expect(detailView).not.toBeVisible();
        await expect(attractionsView).toBeVisible();
    });

    test('Accessibility: Keyboard Navigation', async ({ page }) => {
        // Tab to Skip Link
        await page.keyboard.press('Tab');
        const skipLink = page.locator('.skip-link');
        await expect(skipLink).toBeFocused();

        // Activate Skip Link
        await page.keyboard.press('Enter');

        // Should focus first card (after transition)
        // The transition is 800ms.
        await page.waitForTimeout(1000);
        const firstCard = page.locator('.attraction-card').first();
        await expect(firstCard).toBeFocused();

        // Arrow Key Nav
        await page.keyboard.press('ArrowRight');
        const secondCard = page.locator('.attraction-card').nth(1);
        await expect(secondCard).toBeFocused();

        // Open Detail
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1500); // Wait for open transition + button delay

        // Focus should be on close button (based on logic)
        const closeButton = page.locator('.close-button');
        await expect(closeButton).toBeFocused();

        // Tab Trap
        // There is content inside detail view. Let's see if we can tab to it if it's focusable?
        // The container .detail-scroll-container has tabindex="0".
        // Code: getFocusableElements selects buttons, etc.
        // The container is not in getFocusableElements selector list unless it matches?
        // selector: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        // Yes, .detail-scroll-container has tabindex="0".

        await page.keyboard.press('Tab');
        const scrollContainer = page.locator('.detail-scroll-container');
        // Wait, does the order match? Close button is in DOM before container?
        // DOM: button.close-button, div.detail-scroll-container
        // Yes.
        await expect(scrollContainer).toBeFocused();

        await page.keyboard.press('Tab');
        // Should cycle back to close button
        await expect(closeButton).toBeFocused();

        // Escape to close
        await page.keyboard.press('Escape');
        await page.waitForTimeout(1000);

        // Should return focus to the card
        // Note: We were on 2nd card when we opened it.
        await expect(secondCard).toBeFocused();
    });
});

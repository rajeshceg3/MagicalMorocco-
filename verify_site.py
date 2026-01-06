
import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        print("Navigating to homepage...")
        await page.goto("http://localhost:8000")

        # Check title
        title = await page.title()
        print(f"Page title: {title}")

        # Check for console errors
        page.on("console", lambda msg: print(f"Console log: {msg.text}"))

        # Check initial visibility
        hero_visible = await page.is_visible("#hero-view")
        print(f"Hero view visible: {hero_visible}")

        # Click explore button
        print("Clicking explore button...")
        await page.click(".explore-button")

        # Wait for transition
        await page.wait_for_timeout(2000)

        # Check attractions view visibility
        attractions_visible = await page.is_visible("#attractions-view")
        print(f"Attractions view visible: {attractions_visible}")

        # Check number of cards
        cards = await page.locator(".attraction-card").count()
        print(f"Number of attraction cards: {cards}")

        if cards > 0:
            # Click first card
            print("Clicking first attraction card...")
            await page.locator(".attraction-card").first.click()

            # Wait for transition
            await page.wait_for_timeout(2000)

            # Check detail view visibility
            detail_visible = await page.is_visible("#detail-view")
            print(f"Detail view visible: {detail_visible}")

            # Check content
            detail_title = await page.inner_text("#detail-title")
            print(f"Detail title: {detail_title}")

            # Close detail view
            print("Closing detail view...")
            await page.click(".close-button")

            # Wait for transition
            await page.wait_for_timeout(2000)

            # Check attractions view visibility again
            attractions_visible = await page.is_visible("#attractions-view")
            print(f"Attractions view visible again: {attractions_visible}")

        await browser.close()

asyncio.run(run())

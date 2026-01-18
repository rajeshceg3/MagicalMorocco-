from playwright.sync_api import sync_playwright
import os
import sys

def verify_alt_text(page):
    print("[TEST] Verifying Alt Text on Attraction Cards...")

    # Navigate to attractions
    page.click('.explore-button')
    page.wait_for_selector('.attraction-card', state='visible')

    # Get all cards
    cards = page.locator('.attraction-card')
    count = cards.count()
    print(f"  -> Found {count} cards.")
    assert count > 0, "No attraction cards found."

    missing_alt = []

    for i in range(count):
        card = cards.nth(i)
        id = card.get_attribute('data-id')
        img = card.locator('img')

        # Check if img exists
        assert img.count() == 1, f"Card {id} missing image."

        alt = img.get_attribute('alt')
        print(f"  -> Card {id}: alt='{alt}'")

        if not alt:
            missing_alt.append(id)

    if missing_alt:
        print(f"[FAILURE] Missing alt text for: {missing_alt}")
        sys.exit(1)

    print("[PASS] All cards have alt text.")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        cwd = os.getcwd()
        url = f"file://{cwd}/index.html"
        print(f"Loading {url}")
        page.goto(url)

        try:
            verify_alt_text(page)
            print("\n[SUCCESS] Accessibility Check Passed.")
        except Exception as e:
            print(f"\n[FAILURE] Mission Compromised: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run()

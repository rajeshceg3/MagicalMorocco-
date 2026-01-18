from playwright.sync_api import sync_playwright
import os

def test_history_trap():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the page (simulating root)
        page.goto(f"file://{os.getcwd()}/index.html")

        # 1. Start at Hero
        print("Step 1: On Hero View")
        assert page.locator("#hero-view").is_visible()

        # 2. Click Explore -> Pushes #attractions
        print("Step 2: Clicking Explore")
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")
        assert "attractions" in page.url

        # 3. Click Card -> Pushes #detail
        print("Step 3: Clicking Attraction")
        page.click(".attraction-card[data-id='majorelle']")
        page.wait_for_selector("#detail-view.visible")
        assert "majorelle" in page.url

        # 4. Click Close -> Should pop #detail (go back to #attractions)
        print("Step 4: Clicking Close")
        # Ensure we wait for the close button to be interactive
        page.wait_for_selector(".close-button", state="visible")
        # Small delay to ensure event listeners are bound/transition complete
        page.wait_for_timeout(1000)
        page.click(".close-button")

        page.wait_for_selector("#attractions-view.visible")
        assert "majorelle" not in page.url
        assert "attractions" in page.url

        # 5. Click Browser Back -> Should go to Hero
        print("Step 5: Clicking Browser Back")
        page.go_back()

        # Check URL
        print(f"Current URL: {page.url}")

        # If bug exists (zombie view), we are still at #attractions because we had duplicate entries
        # If fixed, we should be at root (no hash)

        if "attractions" in page.url:
            print("FAILURE: Stuck in History Trap (Zombie View detected)")
            exit(1)
        else:
            print("SUCCESS: Returned to Root View")
            exit(0)

if __name__ == "__main__":
    test_history_trap()

from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to home
        page.goto("http://localhost:8080")
        print("Visited Home")
        page.screenshot(path="/home/jules/verification/home_verified.png")

        # Click Explore
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")
        print("Explored Attractions")

        # Verify History Pushed
        # We can't easily check history state object in python sync api directly without eval
        # But we can check if URL hash changed if we used hash.
        # Our code: history.pushState({view: 'attractions'}, '', '#attractions');
        # So URL should end with #attractions
        current_url = page.url
        print(f"Current URL: {current_url}")
        if "#attractions" not in current_url:
            print("ERROR: URL did not update to #attractions")
        else:
            print("SUCCESS: URL updated to #attractions")

        # Click Card
        page.click(".attraction-card[data-id='majorelle']")
        page.wait_for_selector("#detail-view.visible")
        print("Opened Detail")

        # Check URL again
        current_url = page.url
        print(f"Current URL: {current_url}")
        if "#majorelle" not in current_url:
            print("ERROR: URL did not update to #majorelle")
        else:
             print("SUCCESS: URL updated to #majorelle")

        page.screenshot(path="/home/jules/verification/detail_verified.png")

        # Click Back Button (Browser)
        page.go_back()
        print("Clicked Back")

        # Wait for transition (approx 1s)
        page.wait_for_timeout(1000)

        # Should be back at attractions
        # Verify #detail-view is not visible
        is_detail_visible = page.is_visible("#detail-view.visible")
        if is_detail_visible:
             print("ERROR: Detail view still visible after back")
        else:
             print("SUCCESS: Detail view closed after back")

        current_url = page.url
        print(f"Current URL after back: {current_url}")

        browser.close()

if __name__ == "__main__":
    verify_app()

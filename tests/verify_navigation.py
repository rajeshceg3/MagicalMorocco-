from playwright.sync_api import sync_playwright

def verify_app_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to home
        page.goto("http://localhost:8080")
        page.wait_for_selector(".explore-button") # Wait for rendering
        print("Visited Home")

        # Go to Attractions
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")
        print("Explored Attractions")

        # Verify URL
        if "#attractions" not in page.url:
            print("ERROR: URL mismatch for attractions")

        # Go Back to Home (Browser Back)
        page.go_back()
        page.wait_for_selector("#hero-view.view:not(.hidden)") # Wait for hero to be visible

        print(f"URL after back to home: {page.url}")
        # URL should be just base
        if "#" in page.url:
             print("ERROR: URL should be root")
        else:
             print("SUCCESS: Back to Home worked")

        # Verify Hero is visible
        if not page.is_visible("#hero-view"):
            print("ERROR: Hero view not visible")

        browser.close()

if __name__ == "__main__":
    verify_app_navigation()

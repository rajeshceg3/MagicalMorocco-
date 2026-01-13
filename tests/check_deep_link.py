from playwright.sync_api import sync_playwright

def verify_deep_link():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Deep link to #majorelle
        print("Navigating directly to #majorelle...")
        page.goto("http://localhost:8080/#majorelle")

        # Wait a bit for JS to init
        page.wait_for_timeout(1000)

        # Check if detail view is visible
        is_visible = page.is_visible("#detail-view.visible")
        if is_visible:
            print("SUCCESS: Detail view is visible on deep link.")
        else:
            print("FAILURE: Detail view is NOT visible on deep link.")
            # Check what is visible
            if page.is_visible("#hero-view"):
                 print("INFO: Hero view is visible.")
            if page.is_visible("#attractions-view.visible"):
                 print("INFO: Attractions view is visible.")

        browser.close()

if __name__ == "__main__":
    verify_deep_link()

from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        url = f"file://{os.path.abspath('index.html')}#majorelle"
        page.goto(url)
        page.wait_for_timeout(2000) # Wait for animations

        # Detail view is open.
        # Try to focus the skip link (which is outside the modal)
        page.focus(".skip-link")

        # Check active element
        active_class = page.evaluate("document.activeElement.className")
        active_id = page.evaluate("document.activeElement.id")

        print(f"Active Element Class: {active_class}, ID: {active_id}")

        if "skip-link" in active_class:
            print("FAIL: Focus escaped to skip-link.")
        else:
            print("PASS: Focus trapped.")

        browser.close()

if __name__ == "__main__":
    run()

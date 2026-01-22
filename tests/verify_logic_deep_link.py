from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Test Deep Linking
        url = f"file://{os.path.abspath('index.html')}#majorelle"
        print(f"Loading {url}")
        page.goto(url)

        # Wait for potential animations
        page.wait_for_timeout(2000)

        # Check if detail view is visible
        is_visible = page.is_visible("#detail-view")
        print(f"Detail view visible: {is_visible}")

        # Check focus
        active_element = page.evaluate("document.activeElement.className")
        print(f"Active element class: {active_element}")

        if "close-button" not in active_element:
            print("FAIL: Focus not on close button after deep link.")
        else:
            print("PASS: Focus on close button.")

        browser.close()

if __name__ == "__main__":
    run()

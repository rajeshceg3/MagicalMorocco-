from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load Majorelle detail
        url = f"file://{os.path.abspath('index.html')}#majorelle"
        print(f"Loading {url}")
        page.goto(url)

        # Wait for animation
        page.wait_for_timeout(2000)

        # Take screenshot of detail view
        screenshot_path = os.path.join(os.getcwd(), 'verification/detail_view_majorelle.png')
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        # Close
        browser.close()

if __name__ == "__main__":
    run()

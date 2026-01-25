from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load file
        url = f"file://{os.path.abspath('index.html')}#majorelle"
        page.goto(url)

        # Wait for detail view transition
        page.wait_for_selector(".close-button", state="visible")
        page.wait_for_timeout(2000) # Ensure full opacity

        # Screenshot the close button area specifically
        # detail-view is full screen.
        # Close button is top right.
        page.screenshot(path="verification/screenshot_detail.png")

        print("Screenshot saved to verification/screenshot_detail.png")

        browser.close()

if __name__ == "__main__":
    run()

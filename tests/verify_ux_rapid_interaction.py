from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        url = f"file://{os.path.abspath('index.html')}"
        page.goto(url)

        # Click explore
        page.click(".explore-button")

        # Immediately try to click an attraction (Majorelle)
        # We need to find it first.
        # Since it's CSS transition, we don't wait for visibility in the test sense, just click.
        try:
            # Force click even if animating? Playwright might auto-wait.
            # We want to check if the click is IGNORED.
            page.click(".attraction-card[data-id='majorelle']", force=True)

            # Wait a bit
            page.wait_for_timeout(2000)

            # Check if detail view is active
            if page.is_visible("#detail-view") and "visible" in page.get_attribute("#detail-view", "class"):
                 print("PASS: Attraction opened despite rapid interaction.")
            else:
                 print("FAIL: Attraction click was ignored during transition.")

        except Exception as e:
            print(f"Error: {e}")

        browser.close()

if __name__ == "__main__":
    run()

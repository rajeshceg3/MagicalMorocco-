from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        start_time = time.time()
        # Load the page with a deep link
        page.goto('file:///app/index.html#majorelle')

        # Wait for detail view to be visible
        # We check for the .visible class
        page.wait_for_selector('#detail-view.visible')

        end_time = time.time()
        duration = end_time - start_time

        print(f"Time to show detail view: {duration:.4f} seconds")

        if duration > 0.5:
            print("FAILURE: Deep link took too long to render (Animation played?)")
        else:
            print("SUCCESS: Deep link rendered instantly.")

        browser.close()

if __name__ == "__main__":
    run()

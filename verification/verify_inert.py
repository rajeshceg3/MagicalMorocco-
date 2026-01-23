from playwright.sync_api import sync_playwright
import os

def run():
    print("Verifying Inert Attribute and Visual State...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 720})

        url = f"file://{os.path.abspath('index.html')}"
        page.goto(url)

        # Open Detail View
        page.click(".explore-button")
        page.wait_for_selector(".attraction-card", state="visible")
        # Use first card
        page.click(".attraction-card")

        # Wait for Detail View
        page.wait_for_selector("#detail-view", state="visible")
        page.wait_for_timeout(1000)

        # Check Inert
        is_inert = page.evaluate("document.getElementById('attractions-view').hasAttribute('inert')")
        print(f"Attractions View Inert: {is_inert}")

        if not is_inert:
            print("FAIL: Inert attribute missing.")
        else:
            print("PASS: Inert attribute present.")

        # Screenshot
        screenshot_path = os.path.join(os.getcwd(), "verification/detail_view_inert.png")
        page.screenshot(path=screenshot_path)
        print(f"Screenshot saved to {screenshot_path}")

        browser.close()

if __name__ == "__main__":
    run()

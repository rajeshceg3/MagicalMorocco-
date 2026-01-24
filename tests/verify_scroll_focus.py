from playwright.sync_api import sync_playwright
import os
import time

def run():
    print("Running Scroll Container Focus Verification...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        url = f"file://{os.path.abspath('index.html')}"
        page.goto(url)

        # Open detail view
        page.click(".explore-button")
        page.wait_for_selector(".attraction-card")
        page.wait_for_timeout(1000) # Wait for transition

        page.click(".attraction-card") # Clicks the first one
        page.wait_for_selector("#detail-view.visible")

        # Poll for close button focus
        focused = False
        for _ in range(50):
            class_name = page.evaluate("document.activeElement.className")
            if "close-button" in class_name:
                focused = True
                break
            page.wait_for_timeout(100)

        if not focused:
            print("ERROR: Close button never received focus.")
            browser.close()
            return

        # Press Tab to move to scroll container
        page.keyboard.press("Tab")

        # Verify active element is scroll container
        class_name = page.evaluate("document.activeElement.className")
        if "detail-scroll-container" not in class_name:
            print("ERROR: Focus did not move to scroll container.")
            print(f"Active Element: {class_name}")
            browser.close()
            return

        # Check outline style
        outline_style = page.evaluate("window.getComputedStyle(document.activeElement).outlineStyle")
        print(f"Outline Style: {outline_style}")

        if outline_style == "none":
            print("FAIL: Scroll container has no focus outline.")
        else:
            print("PASS: Scroll container has focus outline.")

        browser.close()

if __name__ == "__main__":
    run()

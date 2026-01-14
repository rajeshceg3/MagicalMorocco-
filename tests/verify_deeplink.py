from playwright.sync_api import sync_playwright
import time

def verify_deeplink():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Test Case 1: Load Deep Link #merzouga directly
        print("Testing Deep Link: /#merzouga")
        page.goto("http://localhost:8080/#merzouga")

        # Wait for potential initialization
        time.sleep(1)

        # Check if Detail View is visible
        is_detail_visible = page.is_visible("#detail-view.visible")
        if is_detail_visible:
            print("SUCCESS: Detail view is visible on load.")
            # Verify content
            title = page.text_content("#detail-title")
            if "Golden Threshold" in title:
                print("SUCCESS: Content matches Merzouga.")
            else:
                print(f"ERROR: Content mismatch. Title: {title}")
        else:
            print("FAILURE: Detail view is NOT visible on load.")
            # Check if Hero is visible instead
            if page.is_visible("#hero-view:not(.hidden)"):
                print("OBSERVATION: Hero view is visible (Default state). Deep linking failed.")

        page.screenshot(path="/home/jules/verification/deeplink_fail.png")
        browser.close()

if __name__ == "__main__":
    verify_deeplink()

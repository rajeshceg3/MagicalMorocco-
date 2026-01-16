from playwright.sync_api import sync_playwright
import time

def verify_history_behavior():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Step 1: Go to Home")
        page.goto("http://localhost:8080")

        print("Step 2: Go to Attractions")
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")

        print("Step 3: Open Detail")
        page.click(".attraction-card[data-id='majorelle']")
        page.wait_for_selector("#detail-view.visible")

        print("Step 4: Click Close")
        page.click(".close-button")
        page.wait_for_selector("#attractions-view.visible")

        # Check URL
        print(f"URL after close: {page.url}")

        print("Step 5: Press Browser Back")
        page.go_back()
        time.sleep(1) # Wait for transitions

        print(f"URL after back: {page.url}")

        if "majorelle" in page.url:
            print("ISSUE VERIFIED: Back button re-opened the detail view (History Trap).")
        else:
            print("Observation: Back button did not re-open detail view.")

        browser.close()

if __name__ == "__main__":
    verify_history_behavior()

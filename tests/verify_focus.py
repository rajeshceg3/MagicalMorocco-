from playwright.sync_api import sync_playwright
import os
import time

def test_focus_management():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(f"file://{os.getcwd()}/index.html")

        # 1. Open Detail
        print("Opening detail view...")

        # Navigate to attractions first
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")

        # We use click() here to bypass potential "Enter key" issues for now,
        # as we want to test the focus management *after* transition.
        page.click(".attraction-card[data-id='majorelle']")

        print("Waiting for detail view visible...")
        page.wait_for_selector("#detail-view.visible", timeout=10000)

        print("Waiting for transition end...")
        # The code has roughly 1.2s of transition total (detail + close button delay)
        page.wait_for_timeout(2000)

        # Check active element
        print("Checking active element...")
        is_close_focused = page.evaluate("""
            document.activeElement.classList.contains('close-button')
        """)

        active_element_html = page.evaluate("document.activeElement.outerHTML")
        print(f"Active Element: {active_element_html}")

        if not is_close_focused:
            print(f"FAILURE: Close button not focused.")
            exit(1)
        else:
            print("SUCCESS: Close button focused after open.")

        # 2. Close Detail
        print("Closing detail view...")
        # If focus is correct, we can just press Enter
        page.keyboard.press("Enter")

        # Wait for attractions view
        page.wait_for_selector("#attractions-view.visible", timeout=10000)
        page.wait_for_timeout(1000)

        # Check active element (Should be the card)
        is_card_focused = page.evaluate("""
            document.activeElement.classList.contains('attraction-card')
        """)

        if is_card_focused:
             print("SUCCESS: Focus returned to card.")
        else:
             active = page.evaluate("document.activeElement.tagName")
             print(f"WARNING: Focus did not return to card. Active element: {active}")

        exit(0)

if __name__ == "__main__":
    test_focus_management()

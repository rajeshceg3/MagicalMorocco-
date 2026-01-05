
import sys
from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:8000")

        print("Page loaded.")

        # 1. Check Hero View Accessibility
        hero = page.locator("#hero-view")
        explore_btn = page.locator(".explore-button")

        # Verify contrast fix (border presence)
        border = explore_btn.evaluate("el => getComputedStyle(el).border")
        print(f"Explore button border: {border}")
        if "1px solid" not in border and "rgb" not in border:
            print("ERROR: Border not applied to explore button.")

        # 2. Transition to Attractions
        explore_btn.click()
        page.wait_for_timeout(1000) # Wait for transition (0.8s)

        # 3. Open Detail View
        # Focus a card
        page.keyboard.press("ArrowDown")
        page.keyboard.press("Enter")

        # Wait for detail view transition (0.8s) + button delay (0.4s buffer in timeout)
        # Total wait should be generous to ensure focus happens
        print("Waiting for detail view transition and focus...")
        page.wait_for_timeout(2500)

        # 4. Check Focus Trap in Detail View
        focused = page.evaluate("document.activeElement.className")
        print(f"Focused element after open: '{focused}'")

        if "close-button" not in focused:
            print(f"ERROR: Focus not on close button in detail view. Focused: '{focused}'")
        else:
            print("SUCCESS: Close button automatically focused.")

        # Try to tab out
        print("Attempting to Tab out...")
        page.keyboard.press("Tab")
        page.wait_for_timeout(100)

        focused_after_tab = page.evaluate("document.activeElement.className")
        print(f"Focused element after Tab: '{focused_after_tab}'")

        if "close-button" in focused_after_tab:
             print("SUCCESS: Focus trap working (stayed on close button).")
        else:
             print(f"ERROR: Focus escaped to: {focused_after_tab}")

        browser.close()

if __name__ == "__main__":
    run()

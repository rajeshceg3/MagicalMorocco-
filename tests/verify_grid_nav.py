from playwright.sync_api import sync_playwright
import os

def run():
    print("Running Grid Navigation Test...")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Set viewport to be very wide to ensure single row layout
        # Cards are min 250px + 2rem gap. 12 cards.
        # 12 * (250 + 32) = 3384px. 4000px should be safe.
        page.set_viewport_size({"width": 4000, "height": 1000})

        url = f"file://{os.path.abspath('index.html')}"
        page.goto(url)

        # Click explore
        page.click(".explore-button")

        # Wait for attractions to be visible
        page.wait_for_selector(".attraction-card", state="visible")
        page.wait_for_timeout(1000) # Wait for transitions and debounce

        # Focus first card
        cards = page.query_selector_all(".attraction-card")
        if not cards:
            print("ERROR: No cards found")
            return

        cards[0].focus()
        first_id = cards[0].get_attribute("data-id")
        last_id = cards[-1].get_attribute("data-id")

        print(f"Focus set to first card: {first_id}")

        # Press ArrowDown
        # In a single row layout, ArrowDown should theoretically do nothing or stay put.
        # The bug is that it jumps to the last element.
        page.keyboard.press("ArrowDown")

        active_id = page.evaluate("document.activeElement.dataset.id")
        print(f"Active element after ArrowDown: {active_id}")

        if active_id == last_id and first_id != last_id:
            print("FAIL: Jumped to last element on single row (Bug confirmed).")
        elif active_id == first_id:
            print("PASS: Stayed on same element.")
        else:
            print(f"INFO: Moved to {active_id}. This might be valid if grid wrapped.")

        browser.close()

if __name__ == "__main__":
    run()

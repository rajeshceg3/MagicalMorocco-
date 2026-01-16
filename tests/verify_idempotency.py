from playwright.sync_api import sync_playwright

def verify_idempotency():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8080")

        # Inject script to run init() again
        print("Running init() manually a second time...")
        page.evaluate("window.init()")

        # Check number of cards
        card_count = page.locator(".attraction-card").count()
        print(f"Card count: {card_count}")

        expected_count = 12 # 12 items in data
        if card_count > expected_count:
             print(f"ISSUE VERIFIED: Duplicate cards found. Expected {expected_count}, got {card_count}.")
        else:
             print("Observation: Card count is correct.")

        browser.close()

if __name__ == "__main__":
    verify_idempotency()

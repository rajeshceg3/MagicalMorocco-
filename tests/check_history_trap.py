from playwright.sync_api import sync_playwright

def verify_history_trap():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        page.goto("http://localhost:8080")
        len_start = page.evaluate("window.history.length")
        print(f"Start History Length: {len_start}")

        # Explore
        page.click(".explore-button")
        page.wait_for_selector("#attractions-view.visible")
        len_explore = page.evaluate("window.history.length")
        print(f"After Explore Length: {len_explore}")

        # Open Detail
        page.click(".attraction-card[data-id='majorelle']")
        page.wait_for_selector("#detail-view.visible")
        len_detail = page.evaluate("window.history.length")
        print(f"After Detail Length: {len_detail}")

        # Close Detail
        page.click(".close-button")
        page.wait_for_selector("#attractions-view.visible")
        # Wait for transition to fully complete (app.js logic)
        page.wait_for_timeout(1000)

        len_close = page.evaluate("window.history.length")
        print(f"After Close Length: {len_close}")

        if len_close > len_detail:
            print("CONFIRMED: History length increased on Close (Stack accumulation).")
        else:
            print("INFO: History length did not increase.")

        # Open again
        page.click(".attraction-card[data-id='chefchaouen']")
        page.wait_for_selector("#detail-view.visible")
        len_detail_2 = page.evaluate("window.history.length")
        print(f"After Detail 2 Length: {len_detail_2}")

        # Close again
        page.click(".close-button")
        page.wait_for_selector("#attractions-view.visible")
        len_close_2 = page.evaluate("window.history.length")
        print(f"After Close 2 Length: {len_close_2}")

        if len_close_2 > len_detail_2:
             print("CONFIRMED: History keeps growing.")

        browser.close()

if __name__ == "__main__":
    verify_history_trap()

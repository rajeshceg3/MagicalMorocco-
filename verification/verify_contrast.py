from playwright.sync_api import sync_playwright, expect

def verify_contrast(page):
    # Go to app
    page.goto("http://localhost:8080")

    # Wait for hero
    expect(page.locator("#hero-view")).to_be_visible()

    # Click explore
    page.click(".explore-button")

    # Wait for attractions
    expect(page.locator("#attractions-view")).to_be_visible()

    # Click a card (e.g., Majorelle)
    page.click(".attraction-card:first-child")

    # Wait for detail view
    expect(page.locator("#detail-view")).to_be_visible()

    # Wait for transition
    page.wait_for_timeout(1000)

    # Screenshot
    page.screenshot(path="/home/jules/verification/detail_view_contrast.png")
    print("Screenshot taken at /home/jules/verification/detail_view_contrast.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_contrast(page)
        finally:
            browser.close()

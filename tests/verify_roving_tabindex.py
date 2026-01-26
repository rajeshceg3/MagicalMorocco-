from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Listen to console
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))

        # Load the page
        print("Loading page with deep link...")
        page.goto('file:///app/index.html#meknes')

        # Wait a bit
        page.wait_for_timeout(500)

        # Force click via JS if standard click fails
        print("Clicking close button...")
        try:
            page.click('.close-button', timeout=2000)
        except:
            print("Standard click failed. Using JS click.")
            page.evaluate("document.querySelector('.close-button').click()")

        page.wait_for_timeout(1000) # Wait for transition

        # Now check tabindices
        print("Checking tabIndex states...")

        # Get all cards
        cards = page.query_selector_all('.attraction-card')

        zeros = []

        for card in cards:
            tid = card.get_attribute('tabindex')
            cid = card.get_attribute('data-id')
            if tid == '0':
                zeros.append(cid)

        print(f"Cards with tabindex=0: {zeros}")

        if len(zeros) == 1 and zeros[0] == 'meknes':
            print("SUCCESS: Roving Tabindex is correct. Only 'meknes' is 0.")
        else:
            print(f"FAILURE: Expected only ['meknes'] to be 0, but got {zeros}")

        browser.close()

if __name__ == "__main__":
    run()

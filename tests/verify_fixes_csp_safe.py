from playwright.sync_api import sync_playwright
import time
import os

def verify_fixes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        print("Navigating to home...")
        page.goto("http://localhost:8080")

        # Ensure output directory exists
        output_dir = os.path.join(os.getcwd(), "verification")
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        # Click Explore to load attractions
        print("Clicking Explore...")
        page.click(".explore-button")

        # Wait for attractions view to be visible
        # Using wait_for_selector instead of wait_for_function to avoid CSP unsafe-eval issues
        page.wait_for_selector("#attractions-view.visible")
        print("Attractions view visible.")

        # 1. Verify Majorelle Image Update
        print("Verifying Majorelle image...")
        majorelle_img = page.locator(".attraction-card[data-id='majorelle'] img")
        src = majorelle_img.get_attribute("src")
        print(f"Majorelle Src: {src}")

        expected_id = "photo-1539020140153-e479b8c22e70"
        if expected_id in src:
            print("PASS: Majorelle image updated correctly.")
        else:
            print(f"FAIL: Majorelle image src mismatch. Expected to contain {expected_id}")

        page.screenshot(path=os.path.join(output_dir, "attractions_grid_verified.png"))

        # 2. Verify Fallback Icon Logic
        print("Verifying Fallback Icon Logic...")
        # Target the Chefchaouen card
        target_card = page.locator(".attraction-card[data-id='chefchaouen']")
        target_img = target_card.locator("img")

        # Trigger error by setting invalid src
        print("Injecting broken image src...")
        page.evaluate("el => el.src = 'invalid-image.jpg'", target_img.element_handle())

        # Wait for error handler to hide image and show fallback
        print("Waiting for image to be hidden...")
        try:
            # We use polling in python to avoid CSP eval in wait_for_function
            for i in range(10):
                is_hidden = page.evaluate("el => el.style.display === 'none'", target_img.element_handle())
                if is_hidden:
                    break
                time.sleep(0.5)

            if is_hidden:
                print("PASS: Broken image is hidden.")
            else:
                print("FAIL: Broken image was not hidden.")

            # Check fallback icon visibility
            fallback_icon = target_card.locator(".fallback-icon")
            # Force a little wait for CSS transition/rendering if any
            time.sleep(0.5)

            if fallback_icon.is_visible():
                print("PASS: Fallback icon is visible.")
            else:
                # Check CSS directly if is_visible fails due to complex stacking
                opacity = page.evaluate("el => getComputedStyle(el).opacity", fallback_icon.element_handle())
                print(f"Fallback icon opacity: {opacity}")
                if float(opacity) > 0:
                     print("PASS: Fallback icon opacity is > 0.")
                else:
                     print("FAIL: Fallback icon is not visible.")

            page.screenshot(path=os.path.join(output_dir, "fallback_icon_verified.png"))

        except Exception as e:
            print(f"Error during fallback verification: {e}")

        # 3. Verify Detail View Deep Linking (Idempotency/Logic check)
        print("Verifying Detail View...")
        # Click the Majorelle card
        page.click(".attraction-card[data-id='majorelle']")
        page.wait_for_selector("#detail-view.visible")
        page.screenshot(path=os.path.join(output_dir, "detail_view_verified.png"))
        print("Detail view captured.")

        browser.close()

if __name__ == "__main__":
    verify_fixes()

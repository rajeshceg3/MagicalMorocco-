from playwright.sync_api import sync_playwright
import os
import sys

def verify_title(page):
    print("[TEST] Verifying Title...")
    assert "Whispers of Morocco" in page.title()
    print("[PASS] Title Verified.")

def verify_csp(page):
    print("[TEST] Verifying CSP Meta Tag...")
    csp = page.locator('meta[http-equiv="Content-Security-Policy"]')
    assert csp.count() == 1, "CSP Meta tag missing"
    content = csp.get_attribute('content')
    assert "default-src 'self'" in content, "CSP default-src missing"
    assert "script-src 'self'" in content, "CSP script-src missing"
    # Verify we allow data images (as per risk assessment)
    assert "img-src 'self' data:" in content, "CSP img-src missing"
    print("[PASS] CSP Verified.")

def verify_navigation_flow(page):
    print("[TEST] Verifying Navigation Flow & History (Zombie Check)...")
    # 1. Explore
    print("  -> Clicking Explore...")
    page.click('.explore-button')
    print("  -> Waiting for attractions view...")
    page.wait_for_selector('#attractions-view.visible')
    print(f"  -> URL: {page.url}")
    assert page.url.endswith('#attractions'), f"Expected #attractions, got {page.url}"

    # 2. Open Detail
    print("  -> Clicking Card...")
    page.click('.attraction-card[data-id="majorelle"]')
    print("  -> Waiting for detail view...")
    page.wait_for_selector('#detail-view.visible')
    print(f"  -> URL: {page.url}")
    assert page.url.endswith('#majorelle'), f"Expected #majorelle, got {page.url}"

    # 3. Verify Detail Content
    title = page.locator('#detail-title')
    text = title.inner_text()
    print(f"  -> Detail Title: {text}")
    assert "THE AZURE DREAM" in text.upper(), "Title content mismatch"

    # 4. Close (Should use history.back due to push)
    print("  -> Clicking Close...")
    close_btn = page.locator('.close-button')
    close_btn.wait_for(state='visible')
    close_btn.click()

    print("  -> Waiting for attractions view...")
    page.wait_for_selector('#attractions-view.visible')
    print(f"  -> URL: {page.url}")
    # URL should be #attractions
    assert page.url.endswith('#attractions'), f"Expected #attractions after close, got {page.url}"

    # 5. Back Button (Should go to Root)
    print("  -> Clicking Browser Back...")
    page.go_back()
    page.wait_for_timeout(500) # Wait for popstate
    print(f"  -> URL: {page.url}")
    # Check if we are at root (no hash or empty hash)
    assert page.url.endswith('index.html') or page.url.endswith('/'), f"Expected root, got {page.url}"

    print("[PASS] Navigation Flow Verified.")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        cwd = os.getcwd()
        url = f"file://{cwd}/index.html"
        print(f"Loading {url}")
        page.goto(url)

        try:
            verify_title(page)
            verify_csp(page)
            verify_navigation_flow(page)
            print("\n[SUCCESS] All Tactical Systems Nominal.")
        except Exception as e:
            print(f"\n[FAILURE] Mission Compromised: {e}")
            import traceback
            traceback.print_exc()
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run()

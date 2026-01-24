from playwright.sync_api import sync_playwright
import os

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

def luminance(r, g, b):
    a = [x / 255.0 for x in (r, g, b)]
    a = [((x + 0.055) / 1.055) ** 2.4 if x > 0.03928 else x / 12.92 for x in a]
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]

def contrast_ratio(l1, l2):
    lighter = max(l1, l2)
    darker = min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)

def run():
    print("Running Contrast Verification...")
    # Based on CSS variables
    # --color-bg-main: #f4f1de;
    # --color-text-primary: #4a4e69;
    # --color-accent: #e5d9d7;

    # Explore Button: bg=accent, text=primary
    bg_accent = hex_to_rgb("e5d9d7")
    text_primary = hex_to_rgb("4a4e69")

    l_bg = luminance(*bg_accent)
    l_text = luminance(*text_primary)

    ratio = contrast_ratio(l_bg, l_text)
    print(f"Explore Button Contrast Ratio: {ratio:.2f}:1")

    if ratio < 4.5:
        print("FAIL: Explore button contrast is below AA standard (4.5:1)")
    else:
        print("PASS: Explore button contrast is good.")

    # Secondary Text
    # --color-text-secondary: #4a3b47;
    # against --color-bg-main: #f4f1de;
    text_sec = hex_to_rgb("4a3b47")
    bg_main = hex_to_rgb("f4f1de")

    l_text_sec = luminance(*text_sec)
    l_bg_main = luminance(*bg_main)

    ratio_sec = contrast_ratio(l_bg_main, l_text_sec)
    print(f"Secondary Text Contrast Ratio: {ratio_sec:.2f}:1")

    if ratio_sec < 4.5:
        print("FAIL: Secondary text contrast is below AA standard.")
    else:
        print("PASS: Secondary text contrast is good.")

if __name__ == "__main__":
    run()

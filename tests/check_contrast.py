def luminance(r, g, b):
    a = [x / 255.0 for x in [r, g, b]]
    a = [((x + 0.055) / 1.055) ** 2.4 if x > 0.03928 else x / 12.92 for x in a]
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]

def contrast(rgb1, rgb2):
    lum1 = luminance(*rgb1)
    lum2 = luminance(*rgb2)
    bright = max(lum1, lum2)
    dark = min(lum1, lum2)
    return (bright + 0.05) / (dark + 0.05)

# #e5d9d7
bg = (229, 217, 215)
# #4a4e69
text = (74, 78, 105)

ratio = contrast(bg, text)
print(f"Contrast Ratio: {ratio:.2f}")

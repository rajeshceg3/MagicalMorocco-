# 🎨 Palette Journal: UX & Accessibility Insights

## 2024-05-22: Initial Assessment

### Observations
- **Visual Identity**: The "Pastel" theme is calming but risks low contrast. We must ensure the text remains legible.
- **Micro-Interactions**: The focus states are well-defined (`outline: 2px solid transparent`). This is a good pattern to maintain.
- **Motion**: The application relies heavily on transitions. The "Reduced Motion" handling is critical. We observed that the JS logic checks `prefers-reduced-motion` to adjust timeouts. This is a robust pattern.

### Decisions
- **Images**: We will use high-quality Unsplash images to fulfill the "photographic journey" promise.
- **Filters**: To ensure text readability over images without heavy gradients, we will use `brightness` and `saturate` filters on the images themselves, rather than just overlaying text.
- **Code Style**: We will move away from `innerHTML` for card creation to strictly enforce security best practices, even in a static context.

### Learnings
- **Focus Traps**: The dynamic query of focusable elements is superior to hardcoded lists, as it adapts to DOM changes (e.g., if we added a "Save" button to the detail view later).

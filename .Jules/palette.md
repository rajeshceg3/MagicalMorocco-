## 2024-05-22 - [Escape Key for Overlays]
**Learning:** Full-screen overlays and modals often miss the "Escape to close" interaction, trapping keyboard users or forcing them to tab navigation.
**Action:** Always check for `Escape` key handlers on any view that covers the main content or acts as a modal.

## 2024-12-31 - [Ghost Focus in Single Page Apps]
**Learning:** Using only `opacity: 0` to hide views leaves interactive elements in the keyboard tab order, creating confusing "ghost focus" issues for screen reader and keyboard users.
**Action:** Use `visibility: hidden` combined with transition delays (instant show, delayed hide) to remove hidden elements from the accessibility tree while maintaining fade animations.

## 2025-01-22 - [Focus Continuity in View Transitions]
**Learning:** When a focused element (like a button) becomes hidden (`visibility: hidden` or `display: none`) during a view transition, focus falls back to `document.body`, forcing the user to re-navigate.
**Action:** Explicitly move focus to the primary interactive element of the new view immediately after the transition completes to maintain flow.

## 2025-02-12 - [High Contrast Mode & Outline None]
**Learning:** Removing `outline` with `outline: none` makes focus indicators invisible in Windows High Contrast Mode (WHCM), as WHCM ignores `box-shadow` which is often used for custom focus rings.
**Action:** Replace `outline: none` with `outline: 2px solid transparent` to keep custom styles for standard users while letting WHCM force a visible border color.

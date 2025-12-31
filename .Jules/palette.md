## 2024-05-22 - [Escape Key for Overlays]
**Learning:** Full-screen overlays and modals often miss the "Escape to close" interaction, trapping keyboard users or forcing them to tab navigation.
**Action:** Always check for `Escape` key handlers on any view that covers the main content or acts as a modal.

## 2024-12-31 - [Ghost Focus in Single Page Apps]
**Learning:** Using only `opacity: 0` to hide views leaves interactive elements in the keyboard tab order, creating confusing "ghost focus" issues for screen reader and keyboard users.
**Action:** Use `visibility: hidden` combined with transition delays (instant show, delayed hide) to remove hidden elements from the accessibility tree while maintaining fade animations.

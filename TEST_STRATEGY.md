# Elite Test Strategy

This repository implements a multi-layered testing strategy designed to ensure functional correctness, prevent regressions, and enable confident deployments.

## 1. Testing Pyramid

We adhere to the testing pyramid principle, balancing speed, cost, and confidence.

### Tier 1: Unit Tests (Jest)
- **Scope**: Individual functions, state logic, and data integrity.
- **Location**: `tests/unit/`
- **Goal**: Verify logic in isolation, instant feedback.
- **Key Coverage**:
  - `attractionsData` integrity.
  - `calculateGrid` logic (Grid layout calculations).
  - Helper functions like `getTransitionDuration`.
  - Accessibility helpers (`getFocusableElements`).

### Tier 2: End-to-End Tests (Playwright)
- **Scope**: Full user journeys from the user's perspective.
- **Location**: `tests/e2e/`
- **Goal**: Verify that the system works as a whole in a real browser environment.
- **Key Coverage**:
  - **Critical Path**: Hero -> Explore -> Detail -> Close.
  - **Navigation**: Keyboard traversal (Arrow keys, Tab).
  - **Accessibility**: Focus management, ARIA states.
  - **Responsiveness**: Mobile vs Desktop behavior.
  - **Reduced Motion**: Verifies accessibility settings respected.

## 2. CI/CD Integration

We use GitHub Actions (`.github/workflows/ci.yml`) to enforce quality gates on every Pull Request and Push to Main.

- **Fast Feedback**: Unit tests run first.
- **Reliability**: Playwright installs browsers and runs E2E tests against a local server.
- **Artifacts**: HTML reports and screenshots are uploaded if E2E tests fail.

## 3. Coverage & Quality Gates

We enforce strict quality gates to ensure long-term maintainability.

- **Code Coverage**: Minimum 80% coverage required for branches, functions, lines, and statements.
- **Failing Rules**: The pipeline will fail if coverage drops below this threshold.

## 4. How to Run Tests

### Prerequisites
- Node.js (v20+)
- pnpm

### Setup
```bash
pnpm install
pnpm exec playwright install --with-deps
```

### Running Unit Tests
```bash
pnpm test
```

### Running E2E Tests
```bash
# Run all tests (headless)
pnpm exec playwright test

# Run with UI
pnpm exec playwright test --ui
```

## 5. Architecture Notes

To facilitate testing, the monolithic `index.html` was refactored:
- **`js/app.js`**: Core logic extracted and exported for Node.js-based unit testing.
- **`css/style.css`**: Styles separated for cleaner separation of concerns.

## 6. Best Practices Enforced
- **Determinism**: No fixed sleeps (except where explicitly testing timing). Use `await expect().toBeVisible()`.
- **Isolation**: Each test cleans up its state (or runs in a fresh context).
- **Accessibility**: Tests explicitly verify focus management and ARIA attributes.

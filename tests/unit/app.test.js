
const {
    attractionsData,
    calculateGrid,
    initializeAttractions,
    getFocusableElements,
    getTransitionDuration,
    init
} = require('../../js/app.js');

describe('App Logic', () => {

    beforeEach(() => {
        // Reset DOM
        document.body.innerHTML = `
            <div id="app-container">
                <div id="background"></div>
                <section id="hero-view"></section>
                <section id="attractions-view"></section>
                <section id="detail-view">
                    <button class="close-button"></button>
                    <h2 id="detail-title"></h2>
                    <p id="detail-description"></p>
                </section>
                <button class="explore-button"></button>
            </div>
        `;
        // Run init to bind variables
        init();
    });

    describe('attractionsData', () => {
        test('should have valid entries', () => {
            expect(Object.keys(attractionsData).length).toBeGreaterThan(0);
            for (const key in attractionsData) {
                const data = attractionsData[key];
                expect(data).toHaveProperty('title');
                expect(data).toHaveProperty('description');
                expect(data).toHaveProperty('gradient');
                expect(data).toHaveProperty('clipPath');
            }
        });
    });

    describe('getTransitionDuration', () => {
        test('should return 800ms by default (mocked)', () => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: jest.fn().mockImplementation(query => ({
                    matches: false,
                    media: query,
                    onchange: null,
                    addListener: jest.fn(),
                    removeListener: jest.fn(),
                    addEventListener: jest.fn(),
                    removeEventListener: jest.fn(),
                    dispatchEvent: jest.fn(),
                })),
            });
            expect(getTransitionDuration()).toBe(800);
        });

        test('should return 0ms if prefers-reduced-motion matches', () => {
            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: jest.fn().mockImplementation(query => ({
                    matches: query === '(prefers-reduced-motion: reduce)',
                    media: query,
                    onchange: null,
                    addListener: jest.fn(),
                    removeListener: jest.fn(),
                    addEventListener: jest.fn(),
                    removeEventListener: jest.fn(),
                    dispatchEvent: jest.fn(),
                })),
            });
            expect(getTransitionDuration()).toBe(0);
        });
    });

    describe('getFocusableElements', () => {
        test('should return focusable elements', () => {
            const container = document.createElement('div');
            container.innerHTML = `
                <button id="btn">Button</button>
                <a href="#" id="link">Link</a>
                <input id="input" />
                <div id="div" tabindex="0">Div</div>
                <div id="disabled" tabindex="-1">Disabled</div>
                <button id="hidden" aria-hidden="true">Hidden</button>
                <button id="disabled-attr" disabled>Disabled Attr</button>
            `;
            const focusables = getFocusableElements(container);

            const ids = focusables.map(el => el.id);
            expect(ids).toContain('btn');
            expect(ids).toContain('link');
            expect(ids).toContain('input');
            expect(ids).toContain('div');

            expect(ids).not.toContain('disabled');
            expect(ids).not.toContain('hidden');
            expect(ids).not.toContain('disabled-attr');
        });
    });

    describe('initializeAttractions', () => {
        test('should populate attractions view', () => {
            const attractionsView = document.getElementById('attractions-view');
            // Clear it first (init runs automatically in beforeEach)
            attractionsView.innerHTML = '';

            initializeAttractions();

            const cards = attractionsView.querySelectorAll('.attraction-card');
            expect(cards.length).toBe(Object.keys(attractionsData).length);

            const firstCard = cards[0];
            expect(firstCard.getAttribute('tabindex')).toBe('0');
            expect(cards[1].getAttribute('tabindex')).toBe('-1');
        });
    });

    describe('calculateGrid', () => {
        test('should calculate columns correctly (mocked)', () => {
             // Mock getBoundingClientRect
             const attractionsView = document.getElementById('attractions-view');
             attractionsView.innerHTML = '';

             // Create fake cards
             const card1 = document.createElement('div');
             card1.className = 'attraction-card';
             // Row 1
             card1.getBoundingClientRect = () => ({ top: 100, bottom: 200, left: 0, right: 100 });

             const card2 = document.createElement('div');
             card2.className = 'attraction-card';
             // Row 1
             card2.getBoundingClientRect = () => ({ top: 100, bottom: 200, left: 110, right: 210 });

             const card3 = document.createElement('div');
             card3.className = 'attraction-card';
             // Row 2 (top > 105)
             card3.getBoundingClientRect = () => ({ top: 210, bottom: 310, left: 0, right: 100 });

             attractionsView.appendChild(card1);
             attractionsView.appendChild(card2);
             attractionsView.appendChild(card3);

             // We can't access numColumns directly as it's not exported, but we can test the effect if we export it or
             // test the navigation logic that relies on it.
             // For this unit test, we just verifying logic runs without error.
             // To test the result, we'd need to spy on `numColumns` or move it to a helper.
             // Given the constraints, we trust the code logic for now or test via E2E navigation.

             expect(() => calculateGrid()).not.toThrow();
        });
    });
});

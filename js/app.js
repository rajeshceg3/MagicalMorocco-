const attractionsData = {
    majorelle: {
        title: "The Azure Dream",
        description: "Step into a world painted in cobalt. The Jardin Majorelle isn't just a garden; it's a living canvas where the electric blue of the villa sings against the deep greens of cacti and bamboo. You're not just observing; you're breathing in color, feeling the calm settle as you frame the perfect shot of a sun-drenched leaf against a blue wall.",
        gradient: "linear-gradient(145deg, var(--theme-majorelle-bg), var(--theme-majorelle-text))",
        clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
        image: "https://images.unsplash.com/photo-1585499831504-1f3c1fd867c3?auto=format&fit=crop&q=80&w=600",
        altText: "Vibrant blue villa with green plants in Jardin Majorelle",
    },
    chefchaouen: {
        title: "The Blue Symphony",
        description: "Imagine a city dipped in sky. In Chefchaouen, every corner turned reveals a new shade of blue, a new texture, a new story. Your lens will fall in love with the way light dances down cerulean alleys, the contrast of a brightly colored pot, and the quiet dignity of a cat napping on a blue-washed stoop. This is where you capture the soul of tranquility.",
        gradient: "linear-gradient(145deg, var(--theme-chefchaouen-bg), var(--theme-chefchaouen-text))",
        clipPath: "circle(50% at 50% 50%)",
        image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?auto=format&fit=crop&q=80&w=600",
        altText: "Blue painted alleyway in Chefchaouen",
    },
    sahara: {
        title: "The Sea of Silence",
        description: "Out here, the world is stripped to its essentials: light, sand, and silence. The Sahara is an ocean of dunes, and you are its sole explorer. Point your camera at the horizon and capture the curve of the earth, the sharp line of a dune's crest, and the impossibly deep shadows. You'll feel the profound, humbling silence long after you've packed your gear.",
        gradient: "linear-gradient(145deg, var(--theme-sahara-bg), var(--theme-sahara-text))",
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
        image: "https://images.unsplash.com/photo-1489573280374-2e193c63726c?auto=format&fit=crop&q=80&w=600",
        altText: "Golden sand dunes of the Sahara Desert",
    },
    aitbenhaddou: {
        title: "The Earthen Fortress",
        description: "This is not a castle; it's a city sculpted from the desert itself. As you approach Aït Benhaddou, you'll see how its kasbahs catch the golden light, their mud-brick walls telling tales of ancient caravans. Your challenge is to capture its scale, its history, and the feeling of standing in a place where time has been etched into the very earth.",
        gradient: "linear-gradient(145deg, var(--theme-aitbenhaddou-bg), var(--theme-aitbenhaddou-text))",
        clipPath: "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
        image: "https://images.unsplash.com/photo-1569531955316-bb271f9c4531?auto=format&fit=crop&q=80&w=600",
        altText: "Mud-brick ksar of Ait Benhaddou",
    },
    fes: {
        title: "The Labyrinth of Time",
        description: "To enter Fes el-Bali is to step into another century. The medina is a dizzying, beautiful maze of 9,000 alleyways. Let your senses guide you—the scent of the tanneries, the clang of a coppersmith's hammer, the vibrant chaos of the souks. Your photography becomes a treasure hunt for details, for moments of quiet humanity in the bustling heart of medieval Morocco.",
        gradient: "linear-gradient(145deg, #e0bfa0, #c9ada7)",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        image: "https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?auto=format&fit=crop&q=80&w=600",
        altText: "Narrow bustling alleyway in Fes medina",
    },
    essaouira: {
        title: "The Wind-Kissed Port",
        description: "You can taste the salt in the air here. Essaouira is where the wild Atlantic crashes against ancient stone ramparts. Capture the motion: the flurry of seagulls, the bright blue fishing boats rocking in the harbor, the wind whipping through the narrow streets. It’s a place of energy and artistry, where the rhythm of the ocean sets the pace of life.",
        gradient: "linear-gradient(145deg, #a2d2ff, #8ecae6)",
        clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        image: "https://images.unsplash.com/photo-1758441301111-221320b2dff5?auto=format&fit=crop&q=80&w=600",
        altText: "Blue fishing boats in Essaouira harbor",
    },
    dades: {
        title: "The Crimson Canyon",
        description: "Nature's architecture is at its most dramatic in the Dadès Gorges. Your journey is a dance with the landscape, winding through roads that snake between towering cliffs of red and ochre rock. Focus on the immense scale, the textures of the 'Monkey Fingers' rock formations, and the surreal beauty of a kasbah nestled in this epic, cinematic valley.",
        gradient: "linear-gradient(145deg, #ffafcc, #ffc8dd)",
        clipPath: "polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%)",
        image: "https://images.unsplash.com/photo-1635320550213-e801431ad3d0?auto=format&fit=crop&q=80&w=600",
        altText: "Winding road in Dades Gorges",
    },
    merzouga: {
        title: "The Golden Threshold",
        description: "This is where the real desert begins. Merzouga is your gateway to the Erg Chebbi, where dunes rise like mountains of shimmering gold. Your mission is to chase the light—the soft glow of dawn breaking over the sands, the fiery spectacle of sunset. Here, you don't just take a picture of the Sahara; you capture its soul.",
        gradient: "linear-gradient(145deg, #ffca3a, #ffb703)",
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        image: "https://images.unsplash.com/photo-1719995314973-295d09dfa5a3?auto=format&fit=crop&q=80&w=600",
        altText: "Camel caravan in Merzouga dunes",
    },
    casablanca: {
        title: "The Modern Heartbeat",
        description: "Feel the pulse of contemporary Morocco. Casablanca is a city of contrasts, where Art Deco architecture meets the soaring, modern marvel of the Hassan II Mosque. Your lens will find stories in the bustling streets, the grand boulevards, and the way the city's energy gathers at the edge of the Atlantic, forever looking forward.",
        gradient: "linear-gradient(145deg, #bde0fe, #a2d2ff)",
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
        image: "https://images.unsplash.com/photo-1698083087402-886bd163b97e?auto=format&fit=crop&q=80&w=600",
        altText: "Hassan II Mosque and ocean view",
    },
    rabat: {
        title: "The Royal Calm",
        description: "In Rabat, you'll find a different kind of quiet. This is a city of elegant gardens, imposing royal palaces, and ancient ruins that whisper of Roman times. Frame a shot of the serene blue and white Kasbah of the Udayas overlooking the sea, or find a peaceful moment in the tranquil Chellah necropolis, where history sleeps among the flowers.",
        gradient: "linear-gradient(145deg, #c1fba4, #90ee90)",
        clipPath: "polygon(0 15%, 100% 0, 100% 85%, 0 100%)",
        image: "https://images.unsplash.com/photo-1760727750413-2d7075cb51d3?auto=format&fit=crop&q=80&w=600",
        altText: "Kasbah of the Udayas in Rabat",
    },
    tangier: {
        title: "The Mythic Crossroads",
        description: "Stand at the edge of Africa and gaze across the strait to Europe. Tangier is a city of legendary encounters, a place that has inspired generations of artists and spies. Capture the mystery in the Caves of Hercules, the vibrant energy of the Grand Socco, and the feeling of being in a city that belongs to two worlds at once.",
        gradient: "linear-gradient(145deg, #bde0fe, #8ecae6)",
        clipPath: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)",
        image: "https://images.unsplash.com/photo-1570497700762-5b468aba1edc?auto=format&fit=crop&q=80&w=600",
        altText: "View of Tangier cityscape and sea",
    },
    meknes: {
        title: "The Sultan's Dream",
        description: "Meknes is a city built on a dream of imperial grandeur. You can feel the ambition of Sultan Moulay Ismail in the monumental Bab Mansour gate, a masterpiece of intricate tilework. Your photography here is about capturing power and scale—the endless arches of the royal stables, the sheer size of the city walls. It's a journey into Morocco's epic past.",
        gradient: "linear-gradient(145deg, #ffc8dd, #c9ada7)",
        clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
        image: "https://images.unsplash.com/photo-1731800713184-12e955a30d4a?auto=format&fit=crop&q=80&w=600",
        altText: "Bab Mansour gate in Meknes",
    },
};

// --- Architected State Management and Event Handling ---
let appContainer, background, heroView, attractionsView, detailView, exploreButton, attractionCards, closeButton, detailTitle, detailDescription, skipLink;

// State Machine
let isTransitioning = false;
let lastFocusedElement;
let currentDetailId = null; // Track the current detail ID for robust focus restoration
const initialGradient = "linear-gradient(145deg, var(--color-bg-main), var(--color-accent))";

// Utility: Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function getTransitionDuration() {
    if (typeof window === 'undefined') return 800; // Default for testing without window
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 800;
}

/**
 * A robust function to handle CSS transitions. It sets a fallback timer
 * to ensure the callback is always executed, even if the 'transitionend'
 * event doesn't fire.
 * @param {HTMLElement} element The element to listen on.
 * @param {number} duration The expected duration of the transition in ms.
 * @param {function} callback The function to call when the transition ends.
 */
function onTransitionEnd(element, duration, callback) {
    let executed = false;
    const timer = setTimeout(done, duration + 50); // 50ms buffer

    function done() {
        if (executed) return;
        executed = true;
        element.removeEventListener('transitionend', onEnd);
        callback();
    }

    function onEnd(e) {
        // Ensure the event is for the element we're watching
        if (e.target === element) {
            clearTimeout(timer);
            done();
        }
    }

    element.addEventListener('transitionend', onEnd);
}


function handleExploreClick(pushToHistory = true) {
    if (isTransitioning) return;
    isTransitioning = true;

    if (pushToHistory) {
        history.pushState({view: 'attractions', method: 'push'}, '', '#attractions');
    }

    heroView.classList.add('hidden');
    attractionsView.classList.add('visible');

    // Wait for the transition to end on the attractions view
    onTransitionEnd(attractionsView, getTransitionDuration(), () => {
        // Abort if state changed (e.g. back to hero)
        if (heroView.classList.contains('hidden') === false) return;

        isTransitioning = false;
        // Focus the first attraction card to enable immediate keyboard navigation
        const firstCard = attractionsView.querySelector('.attraction-card[tabindex="0"]');
        if (firstCard) {
            firstCard.focus();
        }
    });
}

function handleAttractionClick(event, pushToHistory = true) {
    // Allow history navigation to override transition lock
    if (isTransitioning && pushToHistory) return;
    isTransitioning = true;
    lastFocusedElement = document.activeElement;

    // Use currentTarget to ensure we get the button, even if an inner element is clicked
    // Or if called programmatically, handle differently
    let id;
    if (typeof event === 'string') {
        id = event;
    } else {
        id = event.currentTarget.dataset.id;
    }

    // Security: Prototype Pollution Check
    if (!Object.prototype.hasOwnProperty.call(attractionsData, id)) return;

    const data = attractionsData[id];

    // Guard clause for robustness
    if (!data) return;

    currentDetailId = id; // Track the current ID

    if (pushToHistory) {
        history.pushState({view: 'detail', id: id, method: 'push'}, '', `#${id}`);
    }

    // Populate detail view
    const locationName = id.charAt(0).toUpperCase() + id.slice(1);
    detailTitle.textContent = data.title; // Use the descriptive title

    // Safe DOM construction instead of innerHTML
    detailDescription.textContent = '';
    const strong = document.createElement('strong');
    strong.textContent = `${locationName}.`;
    detailDescription.appendChild(strong);
    detailDescription.appendChild(document.createTextNode(` ${data.description}`));

    background.style.background = data.gradient;

    appContainer.classList.add('detail-view-active');
    attractionsView.classList.remove('visible');

    // Wait for attractions view to fade out before showing the detail view
    onTransitionEnd(attractionsView, getTransitionDuration(), () => {
        // Abort if state changed (e.g. detail closed)
        if (!appContainer.classList.contains('detail-view-active')) return;

        detailView.classList.add('visible');

        // Wait for the detail view to finish its main transition
        onTransitionEnd(detailView, getTransitionDuration(), () => {
            // Abort if state changed
            if (!appContainer.classList.contains('detail-view-active')) return;

            // At this point (T ~ 800ms), the close button transition delay (~800ms) has expired
            // and the button is starting its fade/scale in (duration ~400ms).
            // We use onTransitionEnd for robustness instead of setTimeout.
            const btnDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 400;

            onTransitionEnd(closeButton, btnDuration, () => {
                if (appContainer.classList.contains('detail-view-active')) {
                    closeButton.focus();
                    isTransitioning = false;
                }
            });
        });
    });
}

function handleCloseClick(pushToHistory = true) {
    // Guard: If already closed, ignore to prevent duplicate transitions (especially from popstate)
    if (!appContainer.classList.contains('detail-view-active')) return;

    // Allow history navigation to override transition lock
    if (isTransitioning && pushToHistory) return;
    isTransitioning = true;

    if (pushToHistory) {
         // Fix UX-002: Check if we pushed state to get here. If so, go back.
         if (history.state && history.state.method === 'push') {
             history.back();
         } else {
             // Fallback for deep links: Use replaceState
             history.replaceState({view: 'attractions'}, '', '#attractions');
         }
    }

    appContainer.classList.remove('detail-view-active');
    detailView.classList.remove('visible');

    // Listen for the detail view to fully transition out
    onTransitionEnd(detailView, getTransitionDuration(), () => {
        background.style.background = initialGradient;
        attractionsView.classList.add('visible');

        // Focus the last focused element when returning, or fallback to the current attraction
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        } else {
             // Fallback logic for deep links or lost focus
             // Restore focus to the specific card we just closed, if possible
             if (currentDetailId) {
                 const cardToFocus = attractionsView.querySelector(`.attraction-card[data-id="${currentDetailId}"]`);
                 if (cardToFocus) {
                     // Ensure Roving Tabindex state is correct
                     const cards = Array.from(attractionsView.querySelectorAll('.attraction-card'));
                     cards.forEach(c => c.tabIndex = -1);
                     cardToFocus.tabIndex = 0;
                     cardToFocus.focus();
                 } else {
                    const firstCard = attractionsView.querySelector('.attraction-card');
                    if (firstCard) {
                        firstCard.tabIndex = 0;
                        firstCard.focus();
                    }
                 }
             } else {
                 const firstCard = attractionsView.querySelector('.attraction-card[tabindex="0"]');
                 if (firstCard) firstCard.focus();
             }
        }

        // Reset the transitioning flag only after the final animation
        onTransitionEnd(attractionsView, getTransitionDuration(), () => {
            isTransitioning = false;
        });
    });
}

// --- Initialization ---
function initializeAttractions(container) {
    // Robustness: Allow container injection for testing
    const targetContainer = container || attractionsView;
    if (!targetContainer) return;

    // Ensure idempotency by clearing existing content
    targetContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();
    let isFirstCard = true;
    for (const id in attractionsData) {
        if (!Object.prototype.hasOwnProperty.call(attractionsData, id)) continue;
        const attraction = attractionsData[id];
        const card = document.createElement('button');
        card.className = 'attraction-card';
        card.dataset.id = id;
        const locationName = id.charAt(0).toUpperCase() + id.slice(1);
        card.setAttribute('aria-label', `View details for ${attraction.title}`);

        // Use DOM methods to create image for better control (onerror)
        const shapeDiv = document.createElement('div');
        shapeDiv.className = 'shape';
        shapeDiv.style.clipPath = attraction.clipPath;

        const img = document.createElement('img');
        img.src = attraction.image;
        img.alt = attraction.altText || "";
        img.loading = "lazy";
        // Accessibility: Hide redundant image from screen readers as parent button has label
        img.setAttribute('aria-hidden', 'true');
        // Robustness: Hide broken images
        img.onerror = function() {
            this.style.display = 'none';
        };

        shapeDiv.appendChild(img);

        const h2 = document.createElement('h2');
        h2.setAttribute('aria-hidden', 'true');
        h2.textContent = attraction.title;

        card.appendChild(shapeDiv);
        card.appendChild(h2);

        if (isFirstCard) {
            card.tabIndex = 0;
            isFirstCard = false;
        } else {
            card.tabIndex = -1;
        }

        card.addEventListener('click', handleAttractionClick);
        fragment.appendChild(card);
    }
    targetContainer.appendChild(fragment);
}


// Focus Trap for Detail View
function getFocusableElements(element) {
    return Array.from(element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )).filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true');
}

let numColumns = 0; // Cached value
let cardRects = []; // Cached card dimensions

function calculateGrid() {
    const cards = Array.from(document.querySelectorAll('.attraction-card'));
    if (cards.length === 0) return;

    cardRects = cards.map(c => c.getBoundingClientRect());
    const firstCardTop = cardRects[0].top;

    // Add tolerance for subpixel rendering issues (5px buffer)
    const firstCardOnSecondRowIndex = cardRects.findIndex(rect => rect.top > firstCardTop + 5);

    numColumns = firstCardOnSecondRowIndex === -1 ? cards.length : firstCardOnSecondRowIndex;

    // Safety fallback: numColumns must be at least 1
    if (numColumns < 1) numColumns = 1;
}

// Main Init Function to bind events
function init() {
    // Prevent duplicate initialization
    if (appContainer && document.body.contains(appContainer)) {
        // FIX: SYS-002 (Init Redundancy)
        // If appContainer is already set and in the DOM, we are re-running on the same instance.
        // Return immediately to prevent duplicate event listeners.
        return;
    }

    appContainer = document.getElementById('app-container');
    background = document.getElementById('background');
    heroView = document.getElementById('hero-view');
    attractionsView = document.getElementById('attractions-view');
    detailView = document.getElementById('detail-view');
    exploreButton = document.querySelector('.explore-button');
    closeButton = document.querySelector('.close-button');
    detailTitle = document.getElementById('detail-title');
    detailDescription = document.getElementById('detail-description');
    skipLink = document.querySelector('.skip-link');

    if (background) background.style.background = initialGradient;

    // Event Listeners - Note: In a real app, you might want to remove old listeners if init is called repeatedly.
    // For this specific codebase structure, we assume init is called once per page load,
    // or manually in tests where DOM is reset (so elements are new).

    if (exploreButton) exploreButton.addEventListener('click', handleExploreClick);
    if (closeButton) closeButton.addEventListener('click', handleCloseClick);
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleExploreClick();
        });
    }

    // Add Escape key handler for detail view
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && detailView && detailView.classList.contains('visible')) {
            handleCloseClick();
        }
    });

    // Add backdrop click to close for detail view
    if (detailView) {
        detailView.addEventListener('click', (e) => {
            if (e.target === detailView) {
                handleCloseClick();
            }
        });

        detailView.addEventListener('keydown', (e) => {
            if (!detailView.classList.contains('visible')) return;

            if (e.key === 'Tab') {
                const focusableContent = getFocusableElements(detailView);
                if (focusableContent.length === 0) return;

                const firstFocusableElement = focusableContent[0];
                const lastFocusableElement = focusableContent[focusableContent.length - 1];

                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    if (attractionsView) {
        attractionsView.addEventListener('keydown', (e) => {
            const key = e.key;
            if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
                return;
            }

            const cards = Array.from(document.querySelectorAll('.attraction-card'));
            if (cards.length === 0) return;

            // FIX: UX-001 (Focus Sync)
            // Determine active card from document.activeElement to ensure we respect
            // focus changes from mouse clicks, rather than relying solely on stale tabIndex.
            let activeCardIndex = cards.indexOf(document.activeElement);

            if (activeCardIndex === -1) {
                // Fallback to the card with tabIndex=0 if focus is lost or elsewhere
                activeCardIndex = cards.findIndex(card => card.tabIndex === 0);
            }

            if (activeCardIndex === -1) {
                // If no card is active, make the first one active
                activeCardIndex = 0;
                cards[0].tabIndex = 0;
            }

            e.preventDefault();

            // Recalculate grid on first navigation attempt in case of resize
            if (numColumns === 0) {
                calculateGrid();
            }

            let nextIndex = activeCardIndex;

            switch (key) {
                case 'Home':
                    nextIndex = 0;
                    break;
                case 'End':
                    nextIndex = cards.length - 1;
                    break;
                case 'ArrowRight':
                    if (activeCardIndex < cards.length - 1) {
                        nextIndex = activeCardIndex + 1;
                    }
                    break;
                case 'ArrowLeft':
                    if (activeCardIndex > 0) {
                        nextIndex = activeCardIndex - 1;
                    }
                    break;
                case 'ArrowDown':
                    if (activeCardIndex + numColumns < cards.length) {
                        nextIndex = activeCardIndex + numColumns;
                    } else {
                        // If moving down would go past the end, go to the last item
                        nextIndex = cards.length - 1;
                    }
                    break;
                case 'ArrowUp':
                        if (activeCardIndex - numColumns >= 0) {
                        nextIndex = activeCardIndex - numColumns;
                    } else {
                        // If moving up would go before the start, go to the first item
                        nextIndex = 0;
                    }
                    break;
            }

            if (nextIndex !== activeCardIndex) {
                cards[activeCardIndex].tabIndex = -1;
                cards[nextIndex].tabIndex = 0;
                cards[nextIndex].focus();
            }
        });
    }

    // Recalculate grid on window resize
    // Performance: Debounce the resize handler to prevent layout thrashing
    window.addEventListener('resize', debounce(() => {
        // Invalidate cache and immediately recalculate if we are in attractions view
        // to prevent weird navigation behavior before next keypress
        calculateGrid();
    }, 100));

    // History API Handler
    window.addEventListener('popstate', (event) => {
        if (!event.state) {
            // Back to Root (Hero View)
            // Force reset to initial state to ensure UI matches URL
            if (appContainer.classList.contains('detail-view-active')) {
                 appContainer.classList.remove('detail-view-active');
                 detailView.classList.remove('visible');
            }

            if (attractionsView.classList.contains('visible')) {
                attractionsView.classList.remove('visible');
            }

            if (heroView.classList.contains('hidden')) {
                heroView.classList.remove('hidden');
            }

            background.style.background = initialGradient;
            isTransitioning = false;

            // Focus explore button for accessibility
            if (exploreButton) exploreButton.focus();

            return;
        }

        const state = event.state;
        if (state.view === 'attractions') {
            if (appContainer.classList.contains('detail-view-active')) {
                handleCloseClick(false);
            } else if (!attractionsView.classList.contains('visible')) {
                handleExploreClick(false);
            }
        } else if (state.view === 'detail' && state.id) {
            // If we are already in detail view for this ID, do nothing.
            // If in another detail, swap? (Not possible with current UI flow easily)
            // If in attractions, open detail.
            if (!appContainer.classList.contains('detail-view-active')) {
                 handleAttractionClick(state.id, false);
            }
        }
    });

    if (attractionsView) {
        initializeAttractions(attractionsView);
    }

    // Deep Linking Support
    if (window.location.hash) {
        const hash = window.location.hash;
        if (hash === '#attractions') {
            handleExploreClick(false);
        } else if (hash.length > 1) {
            const id = hash.slice(1);
            // Security: Prototype Pollution Check
            if (Object.prototype.hasOwnProperty.call(attractionsData, id)) {
                currentDetailId = id; // Track for correct focus restoration on close
                // First ensure we are in the attractions view context logically
                handleExploreClick(false);
                // Then open the detail
                // Use a small timeout to ensure transitions or state updates flow correctly if needed,
                // though handleExploreClick calls transitions.
                // Since handleExploreClick starts a transition, we might need to force the state immediately
                // or chain it.
                // However, handleExploreClick uses onTransitionEnd.
                // But for deep linking we want it instant or chained.
                // Let's just call it. logic in handleAttractionClick handles state setting.

                // Note: handleExploreClick sets 'attractions' visible.
                // handleAttractionClick sets 'detail' active and hides 'attractions'.
                // If we call them synchronously:
                // 1. Explore -> starts transition, attractions visible.
                // 2. Attraction -> sets detail active, starts transition.
                // This might result in a race or weird animation.
                // Ideally, for deep link, we skip animations or handle them gracefully.

                // Better approach: Just set the state directly for the end result?
                // But we need the DOM elements to be in correct classes.

                handleAttractionClick(id, false);
            }
        }
    }
}

// Auto-run if in browser
if (typeof document !== 'undefined' && typeof module === 'undefined') {
    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}

// Export for testing
if (typeof module !== 'undefined') {
    module.exports = {
        attractionsData,
        calculateGrid,
        initializeAttractions,
        getFocusableElements,
        getTransitionDuration,
        handleExploreClick,
        handleAttractionClick,
        handleCloseClick,
        init // Export init to call it manually in tests
    };
}

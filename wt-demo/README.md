# Chennai Super Kings | The Yellow Army - Demo

This project is a visually stunning, fully responsive tribute to the Chennai Super Kings, fully reimagining this repository with a modern, premium theme while adhering strictly to vanilla HTML/CSS, Bootstrap 4, and jQuery.

## 💛 Features and Redesign Details

- **Responsive Design System**: The app uses Bootstrap 4's Grid layout system, making it adaptable to any device width. The navigation bar turns into a hamburger menu, and the interactive cards scale perfectly down for mobile views.
- **Cinematic Imagery & Trophies**: Added massive Chepauk stadium background integration directly on the hero component with custom css blend modes, and generated images demonstrating trophy celebration scenes in a custom automated carousel.
- **Micro-Animations via Intersection Observer Context**: Added dynamic reveal animations (`.reveal`, `.reveal-left`, `.reveal-right`). As users scroll down the site, the jQuery `revealElement()` function triggers CSS keyframes by toggling `active` classes, maintaining high engagement.
- **Dugout Interactions**: A dedicated features section that proves fluency with jQuery event handlers.

## ⚡ jQuery Interactions Powering the Application

This site exclusively relies on robust jQuery scripting (`script.js`) for its interactive capabilities instead of modern frameworks, satisfying fundamental web technology workflows:

1. **Smooth Scrolling Mechanism**
   - Click handlers appended on navigation links `$('a.nav-link')` intercept anchor requests.
   - jQuery dynamically animates `$('html, body').animate({ scrollTop ... }, 800)` to elegantly float the user toward target sections.
   - Adjusts automatically for `fixed-top` navbar spacing to avoid text clipping.

2. **Event Handling & Hover Sensations**
   - Implemented `.hover()` mapping for mouse enter and leave events. 
   - Specifically used in the "Captain's Mind" element to safely trigger `.stop(true, true).slideDown(300)` to visually reveal hidden inner context smoothly instead of abruptly forcing visual DOM rewrites.

3. **DOM Manipulation & Class Toggling**
   - Implemented the "Secret Tactics" reveal using `$('.').ontoggle-tactic-btn('click')` which targets sibling elements via traversing (`$(this).siblings(...)`).
   - jQuery triggers `.slideToggle(400)` to unearth hidden strategic text visually.
   - The same function manipulates the button's explicit design variables: interrogating its `$(this).text()` to toggle colors by using `.removeClass('btn-outline-warning')` and appending `.addClass('btn-warning')`.

4. **Programmatic Modal Triggers via Bootstrap API**
   - Launching modals not via native raw HTML API tags (`data-toggle="modal"`), but doing it securely from JavaScript logic via jQuery intercept: `$('#legacyVaultModal').modal('show')`. 

5. **A Surprise Button (Meme Inject)**
   - To show a tiny bit of classic cricket rivalry, a button attached right in the navbar (`#surpriseBtn`) catches a click event binding dynamically to launch `$('#surpriseModal')` showing an "RCB 49 All Out 🍭" display.

## 🛠️ Technological Footprint 
- **Core Structural Engine**: HTML5 semantics.
- **UI Toolkit**: `Bootstrap 4.6.2` strictly implemented across grid, buttons, and layouts.
- **Styling Context**: Vanilla external `styles.css` containing complex `:root` tokens, absolute flexbox positioning, gradient overlays, and rich animations.
- **Action Context**: External `script.js` utilizing `jQuery 3.6.0` hooks.
- **Typography Engine**: Connected dynamically via Google Web Fonts with `Bebas Neue` and `Manrope`.
- **Iconography**: Included FontAwesome 5 APIs.

_Developed exclusively for the Yellow Army. Whistle Podu Machi!_

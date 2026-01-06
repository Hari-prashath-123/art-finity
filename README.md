# Art Finity Event Website

A single-page event website for the Art Finity creative showcase.

## Animation System

This site features replayable scroll animations that trigger every time a section enters the viewport. The animation system includes:

- **Alternating Entrance Directions**: Starting from the About section, content alternates between sliding in from the left and right (#about = LEFT, #events = RIGHT, #rules = LEFT, #timeline = RIGHT, #prominent-copy = LEFT)
- **Replay on Scroll**: All animations replay each time you scroll past them, not just on first view
- **Accessibility**: Respects `prefers-reduced-motion` user preference
- **Performance**: Uses IntersectionObserver for efficient scroll detection

### How It Works

The animation replay is achieved by:
1. Removing the animation class from the element
2. Forcing a browser reflow with `void element.offsetWidth`
3. Re-adding the animation class to trigger it again

### Customization

To modify the alternating left/right pattern, edit the `useAlternatingAnimations` hook in `app/page.tsx`. The sections array defines which sections use the alternating pattern, and the index determines the direction (even = left, odd = right).

### Event Cards

- **Image Generation Card**: Features a soft glowing effect and shine animation on hover
- **Video Generation Card**: Has a distinct pulsing play-icon animation with no glow effect

## Instagram

The footer links to [@_agen_club](https://instagram.com/_agen_club).

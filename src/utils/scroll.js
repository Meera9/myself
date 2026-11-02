// Shared by nav clicks and hash-URL scrolls so both land in the same place.
// offset is the fixed header height (h-20 = 80px).
export const SCROLL_PROPS = {
    smooth: true,
    duration: 600,
    offset: -80,
};

export function writeHash(id) {
    // replaceState, not location.hash: no history entry and no hashchange event,
    // so a nav click doesn't trigger a second scroll from useHashScroll.
    window.history.replaceState(null, "", `#${id}`);
}

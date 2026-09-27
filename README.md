# Bawwaba iOS WebView compatibility copy

This repository contains a static compatibility copy of the publicly deployed
Bawwaba React bundle. The original Base44 source export was not available, so
the shipped bundle is preserved and the requested changes are implemented as a
small runtime layer in `public/ios-webview-enhancements.js` and
`public/ios-webview.css`.

## Included changes

- Prevents rubber-band overscroll and iOS touch callouts.
- Follows the device light/dark preference using the app's existing `.dark`
  design tokens.
- Adds mobile Home, Registry, and Settings navigation with safe-area padding.
- Adds a profile/settings sheet with a destructive account deletion action and
  explicit data-loss warning.
- Replaces the Vehicle registry's native select interaction with an accessible
  shadcn-style button/listbox control.
- Applies non-selectable interaction styling and 44px minimum touch targets.

## Free hosting

The app is static and can be served from GitHub Pages. The same deployable
files are mirrored at the repository root so Pages can use:

- **Settings → Pages → Deploy from a branch**
- Branch: `main`
- Folder: `/ (root)`

The `public/` directory remains the canonical source for static hosting and
local preview.

The compatibility layer keeps the existing Base44 app ID and API as the
backend, so the original data and authentication service are not replaced.
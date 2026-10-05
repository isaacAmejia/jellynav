# Changelog

This changelog tracks **public JellyNav releases**.

JellyNav uses simple version numbers:

- **v1.1, v1.2, v1.3...** for normal fixes and incremental improvements
- **v2, v3...** for larger releases with substantial new behavior, compatibility changes, or architectural work

Earlier development builds used internal date-based and `r12.x` identifiers. Those builds were part of the testing process leading to v1 and remain available in Git history, but they are no longer treated as public release versions.

---

## v1 — Initial public release

JellyNav v1 establishes the first stable public release of the project's TV navigation layer for Jellyfin Web.

### Navigation

- Adds consistent D-pad navigation across supported Jellyfin Web surfaces.
- Provides a visible navigation focus that follows the currently selected control or media item.
- Supports Home, media libraries, item details, Search, dialogs, overlays, and playback controls.
- Keeps horizontal media-row movement and vertical page movement predictable for remote use.
- Handles asynchronous Jellyfin page and UI changes without requiring a mouse to recover navigation.
- Uses TV-oriented Back behavior so navigation returns to the appropriate parent area rather than relying only on browser history.

### Remote controls

- D-pad moves through the active interface.
- Enter / OK activates the current selection.
- Back / Escape returns to the previous logical area.
- Holding Enter / OK refreshes Jellyfin Web.
- Holding Back / Escape returns to Home.

### Playback

- Adds D-pad navigation to Jellyfin's player controls.
- Supports playback settings and action sheets such as audio and subtitle selection.
- Supports timeline navigation and remote-friendly scrubbing.
- Supports transient playback actions such as media-segment skip controls.
- Supports Jellyfin's Up Next overlay, including navigation between **Start Now** and **Hide**.
- Preserves navigation as player overlays appear and disappear.

### Jellyfin Web integration

- Details pages enter with a useful primary action selected.
- Search can be operated from a remote-oriented on-screen keyboard workflow.
- Native Jellyfin dialogs and controls participate in the same navigation model.
- Navigation follows Jellyfin's SPA lifecycle as pages are mounted, replaced, or restored.

### Optional integrations

JellyNav can detect and cooperate with several optional Jellyfin Web customizations when they are installed, including:

- JellyMark
- SeerrFin
- Jellyfin Enhanced
- Media Bar
- GlassFin
- Home Screen Sections

These integrations are optional. JellyNav's core navigation does not require them.

### Installation and updates

- Supports direct installation through Jellyfin JavaScript Injector.
- Includes a lightweight loader that can fetch the current stable build from the repository's `main` branch.
- The loader retains the last successfully fetched build as a fallback.

### Project scope

v1 targets **Jellyfin 12 Legacy / TV Web UI** on clients that actually render Jellyfin Web, such as browser, kiosk, webview, Raspberry Pi, and HTPC-style endpoints.

Native Jellyfin clients that do not execute injected Jellyfin Web JavaScript are outside JellyNav's scope.

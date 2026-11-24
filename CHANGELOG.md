# Changelog

## Unreleased

- `jellynav:reset` accepts `detail.focus` to select a specific element after a page swaps its content.

- Added a `jellynav:reset` event: pages that swap the whole home screen can ask JellyNav to forget each row's remembered card and return the selection to the top.

- Up from the first Home row now moves to the header when no Media Bar banner is visible, instead of staying on the row.
- JellyStream service pages: their billboard buttons (Play, More Info, Back to Home) are reachable with Up from the first row, the same way as the Media Bar.
- Pinned selection everywhere: moving up or down settles the selected row at the same height under the header, and moving left or right keeps the selected card at the row's left edge while the row slides. The first row keeps the Media Bar in view.
- Pages can take over row and card scrolling through `window.JellyStream.navScroll` (used by JellyStream's widening Netflix cards).
- Pinned rows that open their selected card wider (Top 10 expand, JellyStream) now slide straight to the pinned spot instead of overshooting and correcting.
- Pinning uses each card's layout position, so uneven rows (Top 10 rank numbers) and cards mid-animation no longer make the selection land off the card.
- New `jellynav:select` event on `document`, fired just before a row moves to a new card, so scripts can close an open card first.

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

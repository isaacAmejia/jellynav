# JellyNav

**JellyNav turns Jellyfin Web into a remote-friendly TV interface.**

It adds a consistent D-pad navigation layer on top of Jellyfin's existing Web UI so a browser, webview, Raspberry Pi, mini PC, or other living-room endpoint can be controlled comfortably with a TV-style remote instead of a mouse.

JellyNav does not replace Jellyfin, modify your media library, or require a custom Jellyfin client. It runs in the existing Jellyfin Web interface and adds focus management, directional navigation, and TV-oriented input behavior.

> **Part of JellyPi** — a collection of independent projects focused on making self-hosted Jellyfin setups work more naturally in the living room. JellyNav can be used completely on its own.

## Why JellyNav exists

Jellyfin Web is primarily designed around mouse, touch, and conventional keyboard input. That works well on a computer, but it can feel inconsistent on a television where the only controls may be a D-pad, OK button, and Back button.

JellyNav provides one navigation model across the Web interface:

- a clear visible selection
- predictable directional movement
- TV-style Back behavior
- remote control of the player and overlays
- navigation that follows Jellyfin as pages and dialogs change

The goal is for Jellyfin Web to feel like a dedicated TV client while still keeping the flexibility of the Web interface.

## Best use cases

JellyNav is intended for devices that actually render **Jellyfin Web**, including:

- Raspberry Pi TV endpoints
- mini PCs and HTPCs
- Chromium kiosk setups
- browser-based living-room clients
- webviews that can load injected Jellyfin Web JavaScript

Your remote or input layer should produce normal browser key events for the directional buttons, Enter / OK, and Back / Escape.

Native clients that do not render Jellyfin Web cannot run JellyNav.

## Core controls

| Remote input | Behavior |
| --- | --- |
| D-pad | Move through the current interface |
| Enter / OK | Activate the selected item |
| Back / Escape | Return to the previous logical area |
| Hold Enter / OK | Refresh Jellyfin Web |
| Hold Back / Escape | Return to Home |

JellyNav also manages focus inside playback controls, dialogs, search, media rows, details pages, and other supported Web UI surfaces without requiring mouse input.

## Installation

JellyNav is loaded into Jellyfin Web with [Jellyfin JavaScript Injector](https://github.com/n00bcodr/Jellyfin-JavaScript-Injector).

### Recommended: auto-update loader

The recommended setup keeps a small loader in JavaScript Injector. The loader downloads the current stable JellyNav build from this repository whenever Jellyfin Web starts and keeps the last successful copy as a fallback.

1. Install **JavaScript Injector** on your Jellyfin server.
2. Open **Dashboard → Plugins → JavaScript Injector**.
3. Create a script named **JellyNav Loader**.
4. Copy the contents of [`install/remote-loader.js`](install/remote-loader.js).
5. Paste it into the JavaScript Code field.
6. Enable the script and save.
7. Reload Jellyfin Web.

Keep only one JellyNav installation enabled.

### Manual installation

If you prefer to control updates yourself:

1. Create a JavaScript Injector entry named **JellyNav**.
2. Copy the full contents of [`src/jellyfin-tv-navigation.js`](src/jellyfin-tv-navigation.js).
3. Paste it into JavaScript Injector.
4. Enable it and save.
5. Reload Jellyfin Web.

More detailed setup instructions are available in [docs/INSTALLATION.md](docs/INSTALLATION.md).

## Requirements and compatibility

The current stable release targets **Jellyfin 12 Legacy / TV Web UI**.

Required:

- Jellyfin Web
- JavaScript Injector
- a client capable of receiving directional, Enter / OK, and Back / Escape key input

Optional Jellyfin Web customizations can coexist with JellyNav. The project includes compatibility handling for commonly used interfaces such as **SeerrFin, Jellyfin Enhanced, Media Bar, JellyMark, GlassFin, and Home Screen Sections**, but none of them are required for JellyNav itself.

See [docs/COMPATIBILITY.md](docs/COMPATIBILITY.md) for current compatibility notes.

```

## Updating

If you use the recommended loader, simply reload Jellyfin Web after a new stable build is published to `main`.

If you installed JellyNav manually, replace your existing injected script with the latest [`src/jellyfin-tv-navigation.js`](src/jellyfin-tv-navigation.js).

Do not run multiple JellyNav revisions at the same time.

## Project structure

- `src/` — stable JellyNav source
- `install/` — lightweight installation loader
- `docs/` — installation, compatibility, and project documentation

The `main` branch is intended to remain the stable release line. Experimental work should be tested separately before being promoted to `main`.

## Troubleshooting

If JellyNav does not appear to be working:

1. confirm JavaScript Injector is enabled
2. confirm only one JellyNav script or loader is active
3. fully reload the Jellyfin Web client
4. verify the loaded version in the browser console
5. confirm the client is using a supported Jellyfin Web layout

When reporting a problem, include the Jellyfin version, browser/client type, any relevant Web UI plugins or themes, and a short description of what the remote did versus what you expected.

## JellyPi

JellyNav is part of the broader **JellyPi** project family, but it is intentionally independent. You can use JellyNav on any compatible Jellyfin Web endpoint without adopting the rest of JellyPi.

[JellyMark](https://github.com/isaacAmejia/jellymark) is another independent JellyPi project and can coexist with JellyNav when both are installed.

## Project status

**Active development.**

The stable focus is a reliable living-room navigation experience for Jellyfin Web. Support for substantially different Jellyfin layouts is developed separately so experimental work does not destabilize the main TV navigation experience.

JellyNav is a community customization and is not affiliated with or endorsed by Jellyfin or the third-party projects mentioned above.

## AI disclosure

JellyNav was developed with OpenAI ChatGPT assisting with code and documentation under human direction and hands-on testing. See [docs/AI_DISCLOSURE.md](docs/AI_DISCLOSURE.md).

## License

No open-source license has currently been assigned to this repository. Unless a license is added, normal copyright rules apply.

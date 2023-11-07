# Redirection Blocker

This Chrome extension automatically closes tabs that are opened by ad redirects, saving you the hassle of closing them manually. I made this fo myself but decided to push it in case someone might wanna use it.

## Features

- **Automatic Tab Closing**: Detects and closes ad tabs in the background.
- **User Control**: Provides a popup with a switch to enable/disable the auto-closing feature on the fly.
- **Customizable**: Users can specify which domains are considered ads through the extension's options (if you have implemented this).

## Installation

1. Clone the repository:
git clone https://github.com/abhaymettu/Redirect-Blocker.git
2. Add the domains of the ads in background.js before pushing to chrome
3. Navigate to `chrome://extensions/` in your Chrome browser.
4. Enable "Developer mode" at the top-right corner.
5. Click "Load unpacked" and select the cloned directory.

## Usage

After installation, the extension will start closing ad tabs by default. Click on the extension icon in the toolbar to access the popup and toggle the feature on or off.

## Contributing

Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.


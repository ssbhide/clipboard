# My Custom Clipboard Chrome Extension

## Overview

This Chrome extension acts as a personalized clipboard manager, allowing you to save frequently used text snippets and easily copy them back to your system clipboard with a single click.

## Why I Built This Project

As someone who often fills out job applications, I found myself constantly copying and pasting the same pieces of information such as job experience descriptions, project summaries, skills lists, and common introductory phrases from my resume or other documents. This repetitive switching between tabs and documents was inefficient and time-consuming.

I also realized this challenge extends beyond job applications to any task involving repeated text entry, like:
* Common email phrases.
* Code snippets or command-line instructions.
* Personal details for forms.
* Standard greetings or closings.

The goal of this extension is to centralize these frequently used text items right within Chrome's browser environment, eliminating the need to navigate away from the current page to find and copy content. By providing a quick and easy way to "clip" these items and then copy them to the system clipboard from a simple popup, it aims to streamline these tedious task and maximize efficiency.

## Features

* **Add Selected Text:** Right-click on any selected text on a webpage and choose "Add to Custom Clipboard" to save it.
* **Manual Addition:** Open the extension popup to manually add new text snippets.
* **Quick Copy:** Click any item in the popup list to instantly copy its content to your system clipboard, ready for pasting (Ctrl+V or Cmd+V).
* **Delete Items:** Easily remove unwanted items from your custom clipboard.
* **Persistent Storage:** All your saved items are stored locally in your browser and persist even after you close Chrome.
* **Clean UI:** A simple, intuitive, and visually appealing popup interface.
* **Subtle Notifications:** Get a small "Copied!" message when an item is successfully copied.

## How to Install and Use

1.  **Download the Code:**
    * Clone this repository: `git clone https://github.com/ssbhide/clipboard` (if you're using Git)
    * Or, download the ZIP file and extract it.

2.  **Open Chrome Extensions:**
    * Open your Chrome browser.
    * Type `chrome://extensions` into the address bar and press Enter.

3.  **Enable Developer Mode:**
    * In the top-right corner of the Extensions page, toggle on **"Developer mode"**.

4.  **Load the Extension:**
    * Click the **"Load unpacked"** button that appears.
    * Navigate to the folder where you saved the extension's files (e.g., `clipboard`) and select it.

5.  **Pin the Extension (Optional but Recommended):**
    * Click the puzzle piece icon (Extensions icon) in your Chrome toolbar.
    * Find "My Custom Clipboard" in the list and click the pin icon next to it to pin it to your toolbar for easy access.

6.  **Usage:**
    * **To Add an Item (from a webpage):** Select any text on a webpage, right-click, and choose "Add to Custom Clipboard."
    * **To Add an Item (manually):** Click the extension icon in your toolbar, type text into the "Add New Item Manually" area, and click "Add Item."
    * **To Copy an Item:** Click the extension icon to open the popup. Click on any of the boxed items in the list. A "Copied!" notification will appear, and the text will be on your system clipboard.
    * **To Paste:** Go to any text field (e.g., a job application form, an email, a document) and use your operating system's paste command (Ctrl+V on Windows/Linux, Cmd+V on macOS).
    * **To Delete an Item:** Click the "Delete" button next to the item in the popup.

## Technologies Used

* HTML
* CSS
* JavaScript
* Chrome Extension APIs (`chrome.storage`, `chrome.contextMenus`, `navigator.clipboard`)

## Future Enhancements (Ideas)

* Search/filter functionality for saved items.
* Ability to categorize items (e.g., "Job Apps", "Code Snippets").
* Drag-and-drop reordering of items.
* Keyboard shortcuts for common actions.
* Import/export functionality for saved items.

## License

This project is open-source and available under the [MIT License](LICENSE).

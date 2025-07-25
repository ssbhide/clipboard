// Function to add a new item to storage
async function addClipboardItem(text) {
    let { clipboardItems } = await chrome.storage.sync.get('clipboardItems');
    if (!clipboardItems) {
      clipboardItems = [];
    }
    // Add new item to the beginning of the array
    clipboardItems.unshift({ id: Date.now(), text: text });
    // Limit the number of items if you want (e.g., 20)
    if (clipboardItems.length > 20) {
      clipboardItems = clipboardItems.slice(0, 20);
    }
    await chrome.storage.sync.set({ clipboardItems: clipboardItems });
  }
  
  // Listen for installation to create context menu items
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "addToClipboard",
      title: "Add to Custom Clipboard",
      contexts: ["selection"] // Show when text is selected
    });
  });
  
  // Listen for context menu clicks
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "addToClipboard" && info.selectionText) {
      await addClipboardItem(info.selectionText);
      console.log("Added to custom clipboard:", info.selectionText);
    }
  });
document.addEventListener('DOMContentLoaded', loadClipboardItems);

const clipboardList = document.getElementById('clipboard-list');
const newItemTextarea = document.getElementById('newItemText');
const addItemButton = document.getElementById('addItemBtn');
const copyNotification = document.getElementById('copy-notification');

// Function to show subtle copy notification
function showCopyNotification() {
  copyNotification.classList.add('show');
  setTimeout(() => {
    copyNotification.classList.remove('show');
  }, 1500); // Notification visible for 1.5 seconds
}

// Add item manually from the text area
addItemButton.addEventListener('click', async () => {
  const text = newItemTextarea.value.trim();
  if (text) {
    await addClipboardItem(text);
    newItemTextarea.value = ''; // Clear the textarea
    loadClipboardItems(); // Reload items
  }
});

async function loadClipboardItems() {
  const { clipboardItems } = await chrome.storage.sync.get('clipboardItems');
  clipboardList.innerHTML = ''; // Clear previous list

  if (clipboardItems && clipboardItems.length > 0) {
    clipboardItems.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'clipboard-item';
      itemDiv.dataset.id = item.id; // Store ID on the div
      itemDiv.innerHTML = `
        <span class="item-text">${item.text}</span>
        <div class="item-actions">
          <button class="delete-btn" data-id="${item.id}">Delete</button>
        </div>
      `;
      clipboardList.appendChild(itemDiv);
    });

    // Add event listeners for copying (clicking the whole item box)
    clipboardList.querySelectorAll('.clipboard-item').forEach(itemBox => {
      itemBox.addEventListener('click', async (event) => {
        // Check if the click originated from the delete button
        if (event.target.classList.contains('delete-btn')) {
          // If it's the delete button, let its handler take over
          return;
        }

        const idToCopy = parseInt(itemBox.dataset.id); // Get ID from the clicked box
        const { clipboardItems } = await chrome.storage.sync.get('clipboardItems');
        const itemToCopy = clipboardItems.find(item => item.id === idToCopy);

        if (itemToCopy) {
          await navigator.clipboard.writeText(itemToCopy.text);
          console.log('Copied to system clipboard:', itemToCopy.text);
          showCopyNotification(); // Show the subtle notification
        }
      });
    });

    // Add event listeners for delete buttons
    clipboardList.querySelectorAll('.delete-btn').forEach(button => {
      button.addEventListener('click', async (event) => {
        const idToDelete = parseInt(event.target.dataset.id);
        const { clipboardItems } = await chrome.storage.sync.get('clipboardItems');
        const updatedItems = clipboardItems.filter(item => item.id !== idToDelete);
        await chrome.storage.sync.set({ clipboardItems: updatedItems });
        loadClipboardItems(); // Reload items after deletion
      });
    });

  } else {
    clipboardList.innerHTML = '<p>No items in clipboard yet. Add some!</p>';
  }
}

// Function to add a new item to storage (kept consistent with background.js)
async function addClipboardItem(text) {
  let { clipboardItems } = await chrome.storage.sync.get('clipboardItems');
  if (!clipboardItems) {
    clipboardItems = [];
  }
  clipboardItems.unshift({ id: Date.now(), text: text });
  if (clipboardItems.length > 20) {
    clipboardItems = clipboardItems.slice(0, 20);
  }
  await chrome.storage.sync.set({ clipboardItems: clipboardItems });
}
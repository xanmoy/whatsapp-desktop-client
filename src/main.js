/*
whatsapp-desktop-client

A simple WhatsApp desktop client built with Electron.
=============================================
This project is licensed under the MIT License.
=============================================
This project is created by Tanmoy Ganguly.
=============================================
This project is created for educational purposes only.

copyright @ Tanmoy Ganguly
*/

const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
    // Create a new session that persists across app launches
    const userSession = session.fromPartition('persist:whatsapp');

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false, // Set to false for security
            contextIsolation: true, // Enable context isolation for better security
            sandbox: true, // Enable sandboxing
            preload: path.join(__dirname, 'preload.js'), // Load the preload script
            session: userSession // Use the persistent session here
        },
        icon: path.resolve(__dirname, 'assets', 'icon.png')
    });

    // Set a modern user agent
    win.webContents.userAgent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';

    // Load WhatsApp Web
    win.loadURL('https://web.whatsapp.com/').catch(err => {
        console.error("Failed to load WhatsApp Web:", err);
    });

    // Handle the close event to minimize the window instead
    win.on('close', (event) => {
        event.preventDefault(); // Prevent the window from closing
        win.hide(); // Hide the window instead
    });
}

// Event handlers for app lifecycle
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

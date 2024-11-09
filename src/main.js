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

import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { config } from './config/index.js';

// Dynamically import the context menu module
import('electron-context-menu').then((contextMenu) => {
    contextMenu.default({
        showSaveImageAs: true
    });
});

const appUrl = 'https://web.whatsapp.com';

/**
 * @type {BrowserWindow}
 */
let window = null;

/**
 * @param {Electron.HandlerDetails} details 
 * @returns {action: 'deny'}
 */
function onNewWindow(details) {
    shell.openExternal(details.url);
    return { action: 'deny' };
}

const createWindow = () => {
    // Calculate __dirname for ES modules
    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    window = new BrowserWindow({
        icon: path.join(__dirname, 'assets/icon.png'),
        autoHideMenuBar: true
    });
    window.loadURL(appUrl, { userAgent: config.userAgent });

    window.webContents.setWindowOpenHandler(onNewWindow);

    window.once('ready-to-show', () => {
        window.maximize();
    });
};

const appLock = app.requestSingleInstanceLock();

const protocolClient = 'whatsapp';
if (!app.isDefaultProtocolClient(protocolClient, process.execPath)) {
    app.setAsDefaultProtocolClient(protocolClient, process.execPath);
}

if (!appLock) {
    app.quit();
} else {
    app.on('second-instance', onAppSecondInstance);
    app.on('ready', onAppReady);
}

async function onAppReady() {
    createWindow();
}

function processArgs(args) {
    const regHttps = /^https:\/\/web\.whatsapp\.com\/.*/g;
    const regWapp = /^whatsapp:\/.*/g;
    for (const arg of args) {
        if (regHttps.test(arg)) {
            return arg;
        }
        if (regWapp.test(arg)) {
            return appUrl + arg.substring(10);  // Corrected substring usage
        }
    }
}

function onAppSecondInstance(event, args) {
    console.debug('second-instance started');
    if (window) {
        event.preventDefault();
        const url = processArgs(args);
        if (url) {
            window.loadURL(url, { userAgent: config.chromeUserAgent });
        }

        window.focus();
    }
}

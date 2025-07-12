# WhatsApp Desktop (Unofficial)

WhatsApp Desktop is a cross-platform desktop application built using Electron. It lets you use [WhatsApp Web](https://web.whatsapp.com/) on your desktop in a secure, standalone window with notifications, persistent login, and more.

![Banner](https://raw.githubusercontent.com/xanmoy/whatsapp-desktop-client/refs/heads/main/screenshots/banner.jpeg)

---

## 🛠 **Features**

- **Cross-platform**: Linux, Windows, and macOS support.
- **Media sharing**: Send/receive images, videos, docs.
- **Notifications**: Native desktop alerts.
- **Secure**: Electron app sandboxed with Flatpak or Snap.
- **Wayland + X11 compatible**

![Screenshot](https://github.com/xanmoy/whatsapp-desktop-client/blob/main/screenshots/image1.png)

---

## 📦 **Installation**

### 🐧 Flatpak

If you're on Fedora, Arch, or other Flatpak-compatible systems:

```bash
flatpak install flathub com.xanmoy.WhatsAppDesktop
```

Or run directly (after building locally):

```bash
flatpak run com.xanmoy.WhatsAppDesktop
```

> ❗ Note: If you get a sandbox error on some systems, try launching with:

```bash
flatpak run com.xanmoy.WhatsAppDesktop --no-sandbox
```

---

### 🐧 Snap (Alternative)

[![Get it from the Snap Store](https://snapcraft.io/en/dark/install.svg)](https://snapcraft.io/whatsapp-desktop-client)

```bash
sudo snap install whatsapp-desktop-client
```

---

## 🔧 **Build From Source**

```bash
git clone https://github.com/xanmoy/whatsapp-desktop-client.git
cd whatsapp-desktop-client
npm install
npm start
```

To build Snap package:

```bash
npm run dist
cd dist
sudo snap install --dangerous ./whatsapp-desktop-client_*.snap
```

To build Flatpak locally:

```bash
flatpak-builder --user --install --force-clean build-dir flatpak/com.xanmoy.WhatsAppDesktop.yaml
```

---

## ↩️ **Uninstallation**

### Snap:

```bash
sudo snap remove whatsapp-desktop-client
```

### Flatpak:

```bash
flatpak uninstall com.xanmoy.WhatsAppDesktop
```

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

> This is an unofficial client. All trademarks and logos belong to Meta (WhatsApp Inc). This project is not affiliated with or endorsed by Meta.

---

## 🙌 Acknowledgments

- **Electron** — for powering the cross-platform app shell.
- **WhatsApp Web** — used via secure browser engine.

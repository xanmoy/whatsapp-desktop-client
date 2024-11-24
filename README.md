# WhatsApp Desktop

WhatsApp Desktop is a cross-platform desktop application that allows you to use WhatsApp directly on your computer, making it easier to chat with friends and family while working.

![Image](https://raw.githubusercontent.com/xanmoy/whatsapp-desktop-client/refs/heads/main/screenshots/banner.jpeg)

[![Get it from the Snap Store](https://snapcraft.io/en/dark/install.svg)](https://snapcraft.io/whatsapp-desktop-client)

## 🛠 **Features**

- **Multi-platform**: Runs on Linux, Windows, and macOS.
- **Real-time messaging**: Stay connected with your contacts through instant messaging.
- **Media sharing**: Easily share images, videos, and documents.
- **Notifications**: Get desktop notifications for new messages.

![Image](https://github.com/xanmoy/whatsapp-desktop-client/blob/main/screenshots/image1.png)

## 📦 **Installation**

```bash
sudo snap install whatsapp-desktop-client
```

### Build From Source

1. **Clone the repository**:

```bash
git clone https://github.com/xanmoy/whatsapp-desktop-client.git
cd whatsapp-desktop-client
```

2. **Install dependencies**: Ensure that you have all the necessary dependencies installed.

```bash
   npm instal
```

3. Start the application:

```bash
npm start
```

4. **Build the application**: Run the following command to create a Snap package of the application.

```bash
npm run dist
```

5. **Change to the dist directory**: Navigate to the dist directory where the Snap package is located.

```bash
cd dist
```

6. **Install the Snap package**: Use the following command to install the Snap package. The `--dangerous` flag allows the installation of locally built packages.

```bash
sudo snap install --dangerous ./whatsapp-desktop-client_*.snap
```

## ↩️ **Uninstallation Steps**

Remove the Snap package: To uninstall the Notion Desktop application, run the following command:

```bash
sudo snap remove whatsapp-desktop-client
```

## 📖 **Usage Instructions**

### **Launching the App**:

   After installation, open Notion Desktop using:

```bash
   whatsapp-desktop-client
```

## 🤝 **Contributing**

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments

- **Electron** - Framework used to build the application.
- **Notion** - A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.

# WhatsApp Desktop

WhatsApp Desktop is a cross-platform desktop application that allows you to use WhatsApp directly on your computer, making it easier to chat with friends and family while working.

![Image](https://github.com/xanmoy/whatsapp-desktop-client/blob/main/screenshots/image2.png)


## Features

- **Multi-platform**: Runs on Linux, Windows, and macOS.
- **Real-time messaging**: Stay connected with your contacts through instant messaging.
- **Media sharing**: Easily share images, videos, and documents.
- **Notifications**: Get desktop notifications for new messages.

![Image](https://github.com/xanmoy/whatsapp-desktop-client/blob/main/screenshots/image3.png)


## Installation

### Simple Installation

```bash
sudo snap install whatsapp-desktop-client
```

Or,


1. **Download the Tar File**: If you haven't already, make sure you have the Tar file whatsapp-desktop-client_1.0.0_amd64.tar in your current directory.
2. **Run the Extraction Command**:

```bash
tar -xzvf whatsapp-desktop-client_1.0.0_amd64.tar
```

3. **Run the Installation Script**: Open a terminal and navigate to the directory where the whatsapp-desktop-client_1.0.0_amd64 is located. Then, execute the installation script:

```bash
sudo sh ./install.sh
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
sudo snap install --dangerous ./whatsapp-desktop-client_1.0.0_amd64.snap 
```

## Uninstallation Steps
Remove the Snap package: To uninstall the WhatsApp Desktop application, run the following command:
```bash
sudo snap remove whatsapp-desktop-client
```

## Usage
Once installed, launch the application and log in with your WhatsApp account by scanning the QR code displayed on the screen with your phone.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

### Fork the project.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Electron - Framework used to build the application.
WhatsApp - Messaging platform.

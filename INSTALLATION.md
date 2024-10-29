# Installation Guide for WhatsApp Desktop

This guide will help you install WhatsApp Desktop on your system.

## Prerequisites

- A compatible Linux distribution (e.g., Fedora, Ubuntu).
- Basic knowledge of the terminal.

## Downloading the AppImage

1. Navigate to the `dist` directory in your project:

```bash
   cd /path/to/your/project/whatsapp-desktop/dist
```

Here’s a sample INSTALLATION.md file for your WhatsApp Desktop project. You can customize it further based on your needs.

# Installation Guide for WhatsApp Desktop

This guide will help you install WhatsApp Desktop on your system.

## Prerequisites

- A compatible Linux distribution (e.g., Fedora, Ubuntu).
- Basic knowledge of the terminal.

## Downloading the AppImage

1. Navigate to the `dist` directory in your project:

```bash
   cd /path/to/your/project/whatsapp-desktop/dist
```
2. Download the latest AppImage. You can use the following command to download the AppImage (if you have a direct link):

```bash

wget <link_to_WhatsApp_Desktop-x86_64.AppImage>
```

## Making the AppImage Executable
After downloading, you need to make the AppImage executable:

```bash
chmod +x WhatsApp_Desktop-x86_64.AppImage
```
## Running the Application
You can now run the application with the following command:

```bash
./WhatsApp_Desktop-x86_64.AppImage
```
## Creating a Desktop Entry (Optional)
To create a desktop entry for easier access:

Create a .desktop file:

```bash
nano ~/.local/share/applications/whatsapp-desktop.desktop
```
### Add the following content to the file:

```plaintext
[Desktop Entry]
Name=WhatsApp Desktop
Exec=/path/to/your/project/whatsapp-desktop/dist/WhatsApp_Desktop-x86_64.AppImage
Icon=/path/to/your/project/whatsapp-desktop/logo.png
Type=Application
Categories=Utility;
```

Make sure to replace /path/to/your/project/whatsapp-desktop with the actual path to your project.

Save the file and exit.

## Uninstalling
To remove the application, simply delete the AppImage and the desktop entry:

```bash

rm /path/to/your/project/whatsapp-desktop/dist/WhatsApp_Desktop-x86_64.AppImage
rm ~/.local/share/applications/whatsapp-desktop.desktop
```
## Troubleshooting
If you encounter issues while running the application, ensure that all dependencies are met and that the AppImage has execute permissions. If the app fails to start, you may check for missing libraries or errors in the terminal.

## Contributing
If you want to contribute to this project, please fork the repository and submit a pull request.

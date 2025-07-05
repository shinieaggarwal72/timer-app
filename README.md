# Timer App
A lightweight desktop timer application built with Electron.
<br>
<br>
## Installation
1. Linux: <br>
   .deb installer (recommended)
   ```bash
   sudo dpkg -i timer-app_1.0.0_amd64.deb
   ```

   .AppImage installer
   ```bash
   chmod +x TimerApp-1.0.0.AppImage
   ./TimerApp-1.0.0.AppImage
   ```

2. Windows:<br>
   Just download and run the .exe installer.
   
<br>
<br>

## Development Setup
```bash
git clone https://github.com/shinieaggarwal72/timer-app.git
cd timer-app
npm i
npm run start
```
To build the windows version:
```bash
npm run dist -- -w
```
To build for linux distribution:
```bash
npm run dist -- -l
```



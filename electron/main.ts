import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import { exec, ChildProcess } from 'child_process';
import isDev from 'electron-is-dev';

let expressProcess: ChildProcess | null = null;

function startExpressServer() {
  const serverPath = path.join(__dirname, '..', 'api', 'index.ts');
  expressProcess = exec(`npx ts-node ${serverPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error starting Express server: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Express server stderr: ${stderr}`);
      return;
    }
    console.log(`Express server stdout: ${stdout}`);
  });
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadFile(path.join(__dirname, '..', 'out', 'index.html'));
  }

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.on('ready', () => {
  startExpressServer();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  if (expressProcess) {
    expressProcess.kill();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

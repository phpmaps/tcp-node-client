const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  })
  win?.webContents.openDevTools({ mode: 'detach' });
  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.on('ready', createWindow)

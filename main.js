// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const url = require ("url");
const path = require('path')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow ({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
    }
})

  // et charger l'index.html de l'application.
  mainWindow.loadURL (
    url.format ({
      pathname: path.join (__dirname, `/dist/index.html `),
      protocole: "file:",
      slash: true
    })
  )
  // Ouvrir les outils de développement.
  // mainWindow.webContents.openDevTools()


    // Ouvre les outils de développement.
    mainWindow.webContents.openDevTools ()

    mainWindow.on ('closed', function () {
        mainWindow = null
    })
}

app.on ('ready', createWindow)
// Quitter quand toutes les fenêtres sont fermées, sauf sur macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on ('activate', function () {
    if (mainWindow === null) createWindow ()
  })

// In this file you can include the rest of your app's specific main process
// code. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.
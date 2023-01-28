const {app, BrowserWindow} = require('electron');  
const url = require('url');
const path = require('path');   
	
let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    icon: path.join(__dirname, 'dist/GT-APP/assets/images/misc/GuardianTales.png'),
    resizable: false,
    fullscreenable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/GT-APP/index.html'),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.setMenu(null);

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
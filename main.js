const { app, BrowserWindow } = require('electron');
const path = require('path');
const child_process = require('child_process');

function createWindow () {

  const mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
  })

  if(app.isPackaged) {
    const RestApiPath = path.join(__dirname, 'rest_api');
    const RestApiProcess = child_process.spawn(RestApiPath, []);

    RestApiProcess.on('error', (err) => {
      console.error('Erreur lors du lancement du fichier binaire:', err);
    });
  
    RestApiProcess.on('close', (code) => {
      console.log('Le fichier binaire s\'est arrêté avec le code de sortie', code);
    });

    setTimeout(() => { 
      mainWindow.loadFile('index.html'); 
    }, 500);
  } else {
    setTimeout(() => { 
      mainWindow.loadURL('http://localhost:3000');
    }, 3000);
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
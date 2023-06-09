const { app, BrowserWindow } = require('electron');
const path = require('path');
const child_process = require('child_process');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
  });

  if (app.isPackaged) {
    const RestApiPath = path.join(__dirname, 'rest_api');
    const RestApiProcess = child_process.spawn(RestApiPath, []);

    RestApiProcess.on('error', (err) => {
      console.error('Error launching binary file:', err);
    });

    RestApiProcess.on('close', (code) => {
      console.log('The binary file stopped with the output code:', code);
    });
    setTimeout(() => {
      mainWindow.loadFile('index.html');
    }, 1000);
    return RestApiProcess; // Return the child process
  } else {
    setTimeout(() => {
      mainWindow.loadURL('http://localhost:3000');
    }, 3000);
  }
}

let restApiProcess; // Variable to store the child process

app.whenReady().then(() => {
  restApiProcess = createWindow(); // Assign the returned child process to the variable
});

app.on('window-all-closed', () => {
  if (restApiProcess) {
    restApiProcess.kill('SIGINT'); // Use the stored child process to kill it
  }
  app.quit();
});
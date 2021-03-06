const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
let win
function createWindow () {
	// 创建一个窗口
	win = new BrowserWindow({width: 800, height: 600})
	win.webContents.openDevTools()
	// 然后加载应用的 index.html
	win.loadURL(url.format({
		pathname: path.join(__dirname, './dist/index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', createWindow)
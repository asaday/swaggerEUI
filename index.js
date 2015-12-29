'use strict';

var argparse = require('argparse');

var cli = new argparse.ArgumentParser({
  prog:     'swaggerEUI',
  addHelp:  true
});


cli.addArgument([ '-a', '--add' ], {
  help:   'add header json file',
  action: 'store'
});

cli.addArgument([ 'file' ], {
  help:   'Swagger schema json or yaml',
  nargs:  '?',
});


var options = cli.parseArgs();
if(options.file == null){
	cli.printHelp();
	process.exit(1);
}


var app = require('app');


var BrowserWindow = require('browser-window');

var win = null;

app.on('window-all-closed', function() {
    app.quit();
});



app.on('ready', function() {

	win = new BrowserWindow({width: 1024, height: 768});
	//win.webContents.openDevTools();

	win.loadURL('file://' + __dirname + '/ui/index.html');

	win.webContents.on('did-finish-load', function() {

		var spec = {};
	  	var fs = require('fs');

		var fn = options.file;
		var dat = fs.readFileSync(fn, 'utf8')

		if(fn.match('.yaml$')){
			spec = require('js-yaml').load(dat);
		}
		else {
			spec = JSON.parse(dat);
		}
		var header = {};

		if(options.add)
			header = JSON.parse(fs.readFileSync(options.add,'utf8'));

	    win.webContents.send('loadspec', spec, header);
	  });

	win.on('closed', function() {
	    win = null;
	  });
});

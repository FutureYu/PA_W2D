// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pa-win2linux" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	/*let disposable = vscode.commands.registerCommand('extension.w2d', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);*/

	context.subscriptions.push(vscode.commands.registerCommand('extension.w2d', (uri) => {
		console.log(uri);
		// /e:/Code/ics2017/nemu/src/cpu/decode/decode.c
		// 如果没有设置，返回undefined
		const name = vscode.workspace.getConfiguration().get('w2d.yourName');
		const addr = vscode.workspace.getConfiguration().get('w2d.yourAddr');
		if (name == "undefined" || addr == "undefined") { 
			vscode.window.showErrorMessage("未配置姓名等...")
		}   
		else
		{
			var toAddr = name + "@" + addr + ":~/ics2017/" + uri.path.split("/ics2017/")[1]
			var fromAddr = uri.path
			vscode.window.showInformationMessage(`源文件路径是：${uri ? fromAddr : '空'}，目标文件路径是：${uri ? toAddr : '空'}`);
			let terminal = vscode.window.createTerminal({ name: "scp" });
			terminal.show(true);
			terminal.sendText("scp " + fromAddr + " " + toAddr);
		}
	}));

	
}

// this method is called when your extension is deactivated
export function deactivate() { }

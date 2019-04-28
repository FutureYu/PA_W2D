import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "pa-win2linux" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('extension.w2d', (uri) => {
		console.log(uri);
		// /e:/Code/ics2017/nemu/src/cpu/decode/decode.c
		// 如果没有设置，返回undefined
		const name = vscode.workspace.getConfiguration().get('w2d.yourName');
		const addr = vscode.workspace.getConfiguration().get('w2d.yourAddr');
		if (name == "undefined" || addr == "undefined") {
			vscode.window.showErrorMessage("未配置姓名等...")
		}
		else if (typeof (uri.path.split("/ics2017/")[1]) == "undefined") {
			vscode.window.showErrorMessage("这个不是PA~")
		}
		else {
			vscode.workspace.saveAll().then(() => {
				var toAddr = name + "@" + addr + ":~/ics2017/" + uri.path.split("/ics2017/")[1]
				var fromAddr = uri.path
				let terminal = vscode.window.createTerminal({ name: "scp" });
				terminal.show(true);
				terminal.sendText("scp " + fromAddr + " " + toAddr);
			})
		}
	}));

	context.subscriptions.push(vscode.commands.registerCommand('extension.d2w', (uri) => {
		console.log(uri);
		const name = vscode.workspace.getConfiguration().get('w2d.yourName');
		const addr = vscode.workspace.getConfiguration().get('w2d.yourAddr');
		if (name == "undefined" || addr == "undefined") {
			vscode.window.showErrorMessage("未配置姓名等...")
		}
		else if (typeof (uri.path.split("/ics2017/")[1]) == "undefined") {
			vscode.window.showErrorMessage("这个不是PA~")
		}
		else {
			var toAddr = name + "@" + addr + ":~/ics2017/" + uri.path.split("/ics2017/")[1]
			var fromAddr = uri.path
			let terminal = vscode.window.createTerminal({ name: "scp" });
			terminal.show(true);
			terminal.sendText("scp " + toAddr + " " + fromAddr);
		}
	}));
}

// this method is called when your extension is deactivated
export function deactivate() { }

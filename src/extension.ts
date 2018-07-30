'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from "path";


function run(cmd: string, args: string[] = [], env = {}, returnStdout = true){
    cp.execFile(cmd, args, env, (err, stdout, stderr) => {
        try {
            if (err && (<any>err).code === 'ENOENT') {
                vscode.window.showInformationMessage(`Could not find \'${path.basename(cmd)}\'. The program may not be installed.`, 'Install');
                return 'Missing Tool';
            }
            if (err) {
                vscode.window.showErrorMessage(err.message);
                console.log(err);
                return 'Internal issues while running format tool';
            };
            if (returnStdout)
                return stdout;
            else
                return '';
        } catch (e) {
            return 'Internal issues while getting diff from formatted content';
        }
    });
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "pycad" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        try {
            var cmd = 'C:\\Windows\\notepad.exe';
            var fname = '';
            var currentFile = '';
        
            // spdev runs expect a log file...
            var args = [
                "/SPDEV",
                "/RUN",
                currentFile,
                fname
            ];
        
            run(cmd, args);
        } catch (err) {
            console.log(err);
        }
        
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World!');
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
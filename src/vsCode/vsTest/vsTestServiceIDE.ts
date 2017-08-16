import * as vscode from "vscode";
import { TestModel, Test } from "../../vsTest/vsTestModel";
import { VSTestSession } from "../../vsTest/vsTestSession";
import Event, { Emitter } from "../../vsTest/base/common/Event";
import { VSTestService } from "../../vsTest/vsTestService";

export class VSTestServiceIDE extends VSTestService {

    /**
     * Discover the files in the given directory
     * @param directory The directory path do discvery the tests
     */
    public discoverTests(directory: string) {
        return <Promise<any>>vscode.window.withProgress({ location: vscode.ProgressLocation.Window, title: "Test Adapter" }, progress => {
            progress.report({ message: "Discovering Tests" });
            return new Promise((resolve, reject) => {
                super.discoverTests(directory).then((result) => {
                    resolve();
                }).catch((error) => {
                    reject();
                });
            });
        });
    }

    /**
     * Run a set of tests 
     * @param tests The set of test to run
     * @param debuggingEnabled 
     */
    public runTests(tests: Array<Test>, debuggingEnabled: boolean = false) {
        return <Promise<any>>vscode.window.withProgress({ location: vscode.ProgressLocation.Window, title: "Test Adapter" }, progress => {
            progress.report({ message: "Running Tests" });
            return new Promise((resolve, reject) => {
                super.runTests(tests, debuggingEnabled).then((result) => {
                    resolve();
                }).catch((error) => {
                    reject();
                });
            });
        });
    }
}
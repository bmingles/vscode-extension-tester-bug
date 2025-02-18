import { ExTester, ReleaseQuality } from "vscode-extension-tester";
import path from "node:path";

const __dirname = import.meta.dirname;
const e2eTestingPath = __dirname;

const storagePath = path.join(e2eTestingPath, ".resources");
const extensionsPath = path.join(e2eTestingPath, ".test-extensions");
const testFilesPattern = path.join(e2eTestingPath, "lib", "**", "*.spec.js");
const mochaConfig = path.join(e2eTestingPath, ".mocharc.js");

const exTester = new ExTester(
  storagePath,
  ReleaseQuality.Stable,
  extensionsPath
);

console.log("Downloading VS Code...");
await exTester.downloadCode();

console.log("\nDownloading ChromeDriver...");
await exTester.downloadChromeDriver();

console.log("\nInstalling VSIX...");
await exTester.installVsix();

const runOptions = {
  resources: [],
  config: mochaConfig,
};

console.log("\nRunning tests...");
await exTester.runTests(testFilesPattern, runOptions);

# vscode-extension-tester Docker Bug

This repo demonstrates an issue running `vscode-extension-tester` via Docker. On Mac M1, it yields:

```log
e2e-1  | Writing code settings to /work/.resources/settings/User/settings.json
e2e-1  | Launching browser...
e2e-1  |   1) "before all" hook in "{root}"
e2e-1  |   2) "after all" hook in "{root}"
e2e-1  |
e2e-1  |   0 passing (9ms)
e2e-1  |   2 failing
e2e-1  |
e2e-1  |   1) "before all" hook in "{root}":
e2e-1  |      Error: Server was killed with SIGTRAP
e2e-1  |       at /work/node_modules/selenium-webdriver/remote/index.js:256:70
e2e-1  |       at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
e2e-1  |
e2e-1  |   2) "after all" hook in "{root}":
e2e-1  |      TypeError: Cannot read properties of undefined (reading 'manage')
e2e-1  |       at VSBrowser.quit (node_modules/vscode-extension-tester/out/browser.js:184:44)
e2e-1  |       at Context.<anonymous> (node_modules/vscode-extension-tester/out/suite/runner.js:136:31)
e2e-1  |       at process.processImmediate (node:internal/timers:478:21)
```

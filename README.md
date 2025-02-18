# vscode-extension-tester Docker Bug

This repo demonstrates an issue running `vscode-extension-tester` via Docker.

On Mac M1, it yields:

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

On Ubuntu via GH Action it yields:

```logs
e2e-1  | Launching browser...
e2e-1  |   1) "before all" hook in "{root}"
e2e-1  |   2) "after all" hook in "{root}"
e2e-1  |
e2e-1  |   0 passing (2s)
e2e-1  |   2 failing
e2e-1  |
e2e-1  |   1) "before all" hook in "{root}":
e2e-1  |      SessionNotCreatedError: session not created: Chrome failed to start: exited normally.
e2e-1  |   (session not created: DevToolsActivePort file doesn't exist)
e2e-1  |   (The process started from chrome location /work/.resources/VSCode-linux-x64/code is no longer running, so ChromeDriver is assuming that Chrome has crashed.)
e2e-1  |       at Object.throwDecodedError (node_modules/selenium-webdriver/lib/error.js:521:15)
e2e-1  |       at parseHttpResponse (node_modules/selenium-webdriver/lib/http.js:524:13)
e2e-1  |       at Executor.execute (node_modules/selenium-webdriver/lib/http.js:456:28)
e2e-1  |       at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
e2e-1  |
e2e-1  |   2) "after all" hook in "{root}":
e2e-1  |      TypeError: Cannot read properties of undefined (reading 'manage')
e2e-1  |       at VSBrowser.quit (node_modules/vscode-extension-tester/out/browser.js:184:44)
e2e-1  |       at Context.<anonymous> (node_modules/vscode-extension-tester/out/suite/runner.js:136:31)
e2e-1  |       at process.processImmediate (node:internal/timers:478:21)
```

## Usage

- Clone the repo
- Install dependencies `npm i`
- `npm test`

## Implementation

- npm test builds and starts container via `compose.yml` config
- Dockerfile defines a Debian based nodejs image which runs `test:e2e` script via `xvfb-run`

FROM node:20.15.1 AS node
WORKDIR /work/

RUN node --version

RUN apt-get update && \
    apt-get install -y \
    # Even though Chromium is downloaded dynamically by vscode-extension-tester,
    # we explicitly install so that lib dependencies are automatically installed.
    chromium \
    xvfb

# Package contents should change less frequently than the source code, so copy
# and install them in earlier layer
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN ls -la

CMD ["xvfb-run", "--auto-servernum", "--server-args='-screen 0 1920x1080x24'", "npm", "run", "test:e2e"]
FROM node:20.15.1 AS node
WORKDIR /work/

RUN node --version

RUN apt-get update && \
    apt-get install -y \
    libnss3 \
    libdbus-1-3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libgtk-3-0 \
    libgbm1 \
    libasound2 \
    libxcomposite1 \
    xvfb

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN ls -la

CMD ["xvfb-run", "--auto-servernum", "--server-args='-screen 0 1920x1080x24'", "npm", "run", "test:e2e"]
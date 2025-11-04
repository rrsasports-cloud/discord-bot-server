#!/usr/bin/env bash
set -e
APP_DIR="$HOME/discord-bot-server"

if [ ! -d "$APP_DIR" ]; then
  git clone https://github.com/YOURUSERNAME/discord-bot-server.git "$APP_DIR"
fi

cd "$APP_DIR"
git pull
npm install
pm2 start ecosystem.config.js || pm2 reload ecosystem.config.js
pm2 save

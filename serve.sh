#!/usr/bin/env bash

# - Setup NGINX reverse proxy
# https://github.com/queicherius/braindump/blob/master/docs/https-and-caching-for-nodejs.md
# - Run manually:
# npm install -g pm2@2.7.1
# pm2 startup

echo "Pulling changes..."
git pull

echo "Installing dependencies..."
yarn

echo "Bundling frontend..."
cd frontend && npm run build && cd ..

echo "Starting servers..."
pm2 start process.yml
pm2 dump

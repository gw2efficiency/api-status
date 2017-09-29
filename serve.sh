#!/usr/bin/env bash

echo "Installing dependencies..."
# npm install -g pm2@2.7.1
cd frontend && yarn
cd server && yarn
cd worker && yarn

echo "Bundling frontend..."
cd frontend && npm run build

echo "Starting servers..."
pm2 start ./process.yml
# pm2 startup

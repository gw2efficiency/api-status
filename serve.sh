#!/usr/bin/env bash

echo "Installing dependencies..."
# npm install -g pm2@2.7.1
yarn

echo "Bundling frontend..."
cd frontend && npm run build && cd ..

echo "Starting servers..."
pm2 start process.yml
pm2 startup

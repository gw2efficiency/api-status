#!/usr/bin/env bash

echo "Installing dependencies..."
# npm install -g pm2@2.7.1
cd frontend && yarn && cd ..
cd server && yarn && cd ..
cd worker && yarn && cd ..

echo "Bundling frontend..."
cd frontend && npm run build && cd ..

echo "Starting servers..."
pm2 start process.yml
pm2 startup

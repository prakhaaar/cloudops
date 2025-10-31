#!/bin/bash
set -e

echo "🚀 Building and starting containers..."
docker compose -f ./docker/docker-compose.yml up -d --build

echo "✅ Containers are up! Visit http://localhost:8080"

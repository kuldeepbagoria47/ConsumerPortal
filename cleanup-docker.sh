#!/bin/bash

# Script to clean up Docker resources on Jenkins agent
# Run this on the Jenkins agent to free up disk space

echo "Cleaning up Docker resources..."

# Remove all stopped containers
echo "Removing stopped containers..."
docker container prune -f

# Remove all unused images
echo "Removing unused images..."
docker image prune -a -f

# Remove all unused volumes
echo "Removing unused volumes..."
docker volume prune -f

# Remove all unused networks
echo "Removing unused networks..."
docker network prune -f

# Remove build cache
echo "Removing build cache..."
docker builder prune -a -f

# Show disk usage
echo "Current disk usage:"
df -h

# Show Docker disk usage
echo "Docker disk usage:"
docker system df

echo "Cleanup complete!"


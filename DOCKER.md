# Docker Setup Guide

This guide explains how to run the Genus Dashboard application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed (optional, but recommended)

## Files Required for Docker

1. **Dockerfile** - Defines how to build the Docker image
2. **.dockerignore** - Excludes unnecessary files from the Docker build
3. **docker-compose.yml** - (Optional) Simplifies container management
4. **next.config.js** - Updated with `output: 'standalone'` for Docker optimization

## Building and Running

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option 2: Using Docker Commands

```bash
# Build the Docker image
docker build -t genus-dashboard .

# Run the container
docker run -p 3000:3000 --name genus-dashboard genus-dashboard

# Stop the container
docker stop genus-dashboard

# Remove the container
docker rm genus-dashboard
```

## Accessing the Application

Once the container is running, access the application at:
- **URL**: http://localhost:3000

## Environment Variables

If you need to set environment variables, you can:

1. **Using docker-compose.yml**:
   ```yaml
   environment:
     - NODE_ENV=production
     - NEXT_PUBLIC_API_URL=https://api.example.com
   ```

2. **Using Docker run**:
   ```bash
   docker run -p 3000:3000 -e NODE_ENV=production genus-dashboard
   ```

3. **Using .env file** (create a `.env` file):
   ```bash
   docker run -p 3000:3000 --env-file .env genus-dashboard
   ```

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, change it in docker-compose.yml:
```yaml
ports:
  - "3001:3000"  # Maps host port 3001 to container port 3000
```

### View Container Logs
```bash
docker-compose logs -f genus-dashboard
# or
docker logs -f genus-dashboard
```

### Rebuild After Code Changes
```bash
docker-compose up -d --build
# or
docker build -t genus-dashboard . && docker run -p 3000:3000 genus-dashboard
```

### Remove Everything and Start Fresh
```bash
docker-compose down -v
docker-compose up -d --build
```

## Production Considerations

For production deployment:

1. Use a reverse proxy (nginx) in front of the container
2. Set up proper SSL/TLS certificates
3. Configure environment variables securely
4. Use Docker secrets for sensitive data
5. Set up health checks
6. Configure resource limits

Example with resource limits in docker-compose.yml:
```yaml
services:
  genus-dashboard:
    # ... existing config ...
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 1G
        reservations:
          cpus: '0.5'
          memory: 512M
```


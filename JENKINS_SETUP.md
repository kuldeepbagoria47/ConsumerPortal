# Jenkins CI/CD Setup Guide

## Issue: "No space left on device"

This error occurs when the Jenkins agent runs out of disk space during Docker builds.

## Solutions

### 1. Clean Up Docker Resources on Jenkins Agent

SSH into your Jenkins agent (Agent-vinod) and run:

```bash
# Check current disk usage
df -h

# Check Docker disk usage
docker system df

# Clean up all unused Docker resources
docker system prune -a -f --volumes

# Or use the cleanup script
chmod +x cleanup-docker.sh
./cleanup-docker.sh
```

### 2. Update Jenkinsfile

The Jenkinsfile has been updated to include automatic cleanup before and after builds.

**Key additions:**
- Cleanup stage before build
- Post-build cleanup
- Docker system prune commands

### 3. Optimize Docker Build

The Dockerfile has been optimized to:
- Use `--prefer-offline` to reduce network usage
- Use `--no-audit` to skip security audit during build

### 4. Increase Disk Space (if possible)

If you have access to the Jenkins agent:

```bash
# Check what's using space
du -sh /var/lib/docker/*
du -sh /home/ubuntu/workspace/*

# Remove old Jenkins workspaces
cd /home/ubuntu/workspace
rm -rf old-workspace-directories

# Clean up system logs
sudo journalctl --vacuum-time=7d
```

### 5. Configure Jenkins to Clean Workspace

In your Jenkins job configuration:
1. Go to "Build Environment"
2. Check "Delete workspace before build starts"
3. Or add a cleanup step in the pipeline

### 6. Use Docker BuildKit (Recommended)

Update your Jenkinsfile build command:

```groovy
sh 'DOCKER_BUILDKIT=1 docker build -t kuldeep02/my-note-app:latest .'
```

### 7. Monitor Disk Space

Add this to your Jenkinsfile to monitor disk usage:

```groovy
stage('Check Disk Space') {
    steps {
        sh '''
            echo "Disk usage:"
            df -h
            echo "Docker usage:"
            docker system df
            echo "Available space:"
            df -h / | tail -1
        '''
    }
}
```

## Quick Fix Commands

Run these on the Jenkins agent:

```bash
# Quick cleanup
docker system prune -a -f --volumes

# Remove all stopped containers
docker container prune -f

# Remove unused images
docker image prune -a -f

# Remove build cache
docker builder prune -a -f

# Check results
docker system df
df -h
```

## Docker Hub Credentials Setup

1. In Jenkins, go to "Manage Jenkins" > "Manage Credentials"
2. Add new credentials:
   - Kind: Username with password
   - ID: `docker-hub-credentials`
   - Username: Your Docker Hub username
   - Password: Your Docker Hub password/token

## Pipeline Stages

1. **Code clone** - Clones from GitHub
2. **Cleanup Docker** - Frees up disk space
3. **Code Build** - Builds Docker image
4. **Push to Docker Hub** - Pushes image to registry

## Troubleshooting

### If build still fails:

1. Check available disk space: `df -h`
2. Clean up more aggressively: `docker system prune -a -f --volumes`
3. Remove old Jenkins workspaces
4. Consider using a different agent with more disk space
5. Use Docker multi-stage builds more efficiently

### Monitor build:

```bash
# Watch disk usage during build
watch -n 1 'df -h && docker system df'
```


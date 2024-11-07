# Dockerfile
FROM ubuntu:latest

# Update package list and install Git and Node.js
RUN apt-get update && \
    apt-get install -y git curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Verify installations (optional)
RUN node -v && git --version

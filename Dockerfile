# Stage 1: Base image
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Copy only package files for better caching
COPY package*.json ./

# Install dependencies (can use --production in deployment stage if needed)
RUN npm install

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Expose app port
EXPOSE 3000

# Default command (can be overridden in docker-compose)
CMD ["sh", "-c", "npx prisma migrate deploy && node src/server.js"]

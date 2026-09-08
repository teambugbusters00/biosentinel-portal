# Multi-stage lightweight Node Alpine container for Render deployment
FROM node:20-alpine AS runner

WORKDIR /app

# Copy root configurations and assets
COPY package.json build.js server.js ./
COPY public ./public

# Run build script to guarantee latest public distribution
RUN node build.js

# Set environment
ENV NODE_ENV=production
ENV PORT=10000

EXPOSE 10000

# Run production HTTP server
CMD ["node", "server.js"]

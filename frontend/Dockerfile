# Base image
FROM node:20.15.0-alpine AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Add app source code
COPY . ./

# Build the app
RUN npm run build

# Stage for serving the build (nginx not needed)
FROM node:20.15.0-alpine

# Set working directory
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=build /app/build /app/build

# Expose port (typically React serves on port 3000, so let's expose it)
EXPOSE 3000

# Start the app with a simple HTTP server (e.g., `serve` or `http-server`)
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
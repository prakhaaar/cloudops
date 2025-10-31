# Use lightweight Node.js LTS image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package files first for dependency installation
COPY ./app/package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy rest of the application code
COPY ./app .

# Expose the port your Express app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]

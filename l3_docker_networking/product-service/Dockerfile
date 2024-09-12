# Use Node.js LTS version as base image
FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all local files to container
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "server.js"]

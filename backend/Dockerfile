# Use official Node image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of project
COPY . .

# Expose backend port
EXPOSE 8000

# Start server
CMD ["npm", "run", "dev"]

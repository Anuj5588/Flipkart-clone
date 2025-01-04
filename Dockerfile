# Use Node.js as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js app
RUN npm run build -f

# Use a minimal Node.js image for serving the app
FROM node:18-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Set the environment variable to production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]

# Use the official Node.js image
FROM node

# Set the working directory in the container
WORKDIR /app

# Copy the files from host to VM
COPY . .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]

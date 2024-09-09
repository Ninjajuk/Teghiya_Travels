# Step 1: Use an official Node.js image to build the app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application to the container
COPY . .

# Build the application
RUN npm run build

# Step 2: Use a lightweight web server to serve the built files
FROM nginx:alpine

# Copy the build files from the previous step to the NGINX html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that NGINX will run on
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

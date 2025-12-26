FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /new-year-app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . ./

# Expose the port your app will run on
EXPOSE 5173

# Set the default command to start your app
CMD [ "npm", "run", "dev" ]
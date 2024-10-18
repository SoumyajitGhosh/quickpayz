FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

# Copy necessary configuration files first for better caching
COPY package.json package-lock.json turbo.json tsconfig.json ./

# Copy the apps and packages
COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN npm install

# Run Prisma generate (if applicable)
RUN cd packages/db && npx prisma generate && cd ../..

# Change to the user-app directory for the build process
WORKDIR /usr/src/app/apps/user-app

# Build the specific app
RUN npm run build

# Start the user app
CMD ["npm", "run", "start"]

#
# 🏡 Production Build
#
FROM node:16-alpine as build

# Set the working directory
WORKDIR /home/node

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn --frozen-lockfile && yarn cache clean

# Copy the source code to the working directory
COPY . ./

# Generate the production build
RUN yarn build

#
# 🚀 Production Server
#
FROM node:16-alpine as prod

# Set the working directory
WORKDIR /home/node

# Set to production environment
ENV NODE_ENV production

# Copy only the necessary files
COPY --from=build /home/node/dist/ dist/
COPY package.json ./

# Install only the production dependencies
RUN yarn --frozen-lockfile

# Start the application
CMD node dist/main.js

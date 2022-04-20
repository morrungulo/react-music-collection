FROM node:lts

# Create app directory
WORKDIR /usr/src/app

# Install package.json
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --production --pure-lockfile --silent

# Bundle app source
COPY . .

# Expose the correct port
EXPOSE 3000

# Run the app
CMD [ "node", "app.js" ]
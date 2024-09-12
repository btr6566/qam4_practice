FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source (3000 being the node.js express app, not the MySQL db)
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]

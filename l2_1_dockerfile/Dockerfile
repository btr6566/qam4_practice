# Image to use as a basis
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# An *  is used to copy package.json AND package-lock.json 
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .


EXPOSE 9000                     
CMD [ "node", "server.js" ]

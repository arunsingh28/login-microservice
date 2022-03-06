FROM node:14

WORKDIR /src

# install dependencies
COPY package.json ./
RUN npm install

# bundle up the app
COPY . .

# run the app
CMD ["npm", "start"]
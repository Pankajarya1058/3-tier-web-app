FROM node:latest

WORKDIR /backend

COPY package.json .

RUN npm install
COPY . .

EXPOSE 5000

CMD ['node','server.js']

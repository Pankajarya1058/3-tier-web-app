
#---------------Stage-1---------------
FROM node:latest AS Builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm install terser-webpack-plugin@latest --save-dev
RUN npm install --save-dev webpack-dev-server

RUN npm run build

#---------------Stage-2----------------
FROM nginx:latest

EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=Builder /app/build /usr/share/nginx/html/

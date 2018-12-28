FROM node:10.15.0-alpine

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD npm run serve

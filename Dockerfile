FROM node:lts-alpine3.13

WORKDIR /app

COPY ./demo /app

RUN npm install

CMD [ "node", "server.js" ]
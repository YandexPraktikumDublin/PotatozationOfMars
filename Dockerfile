FROM node:14.15.4-alpine

WORKDIR /

COPY . /app
COPY package.json ./

RUN yarn install --frozen-lockfile
RUN yarn build && yarn --production

EXPOSE 80

CMD node app/server.js

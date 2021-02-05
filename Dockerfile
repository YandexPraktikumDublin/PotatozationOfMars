FROM node:14 

WORKDIR /

COPY . /app
COPY package.json ./

RUN yarn install --frozen-lockfile

EXPOSE 80

CMD node app/server.js 
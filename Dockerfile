FROM node:14.15.4-alpine

WORKDIR /app
COPY package*.json .
COPY . .
RUN yarn install --frozen-lockfile

EXPOSE 5000

CMD yarn run start

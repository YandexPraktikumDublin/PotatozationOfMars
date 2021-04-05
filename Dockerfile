FROM node:14.15.4-alpine

WORKDIR /app
COPY . .
RUN yarn install

EXPOSE 5000

CMD yarn run start

FROM node:14.15.4-alpine

WORKDIR /app
COPY package*.json .
COPY . .

RUN yarn install --frozen-lockfile

EXPOSE ${PORT}

CMD ["yarn", "run", "start"]

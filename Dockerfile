FROM node:14.16.1-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE ${PORT}
CMD ["yarn", "start"]

FROM node:17-alpine

WORKDIR /app

COPY ./package.json /app/

RUN yarn install

COPY . .

CMD [ "yarn", "start"]

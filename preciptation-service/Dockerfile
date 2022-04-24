FROM node:17-alpine

WORKDIR /app

COPY ./package.json /app/

RUN yarn install

COPY . .

EXPOSE 3334

USER node

CMD [ "yarn", "start"]

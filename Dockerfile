FROM node:12-alpine

WORKDIR /app

ADD . .

ENV NODE_ENV=production

RUN npm i

EXPOSE 8080

CMD [ "node", "dist/index.js" ]
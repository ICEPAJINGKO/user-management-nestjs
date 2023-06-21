FROM node:18-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=staging

EXPOSE 3000

CMD [ "node", "dist/main" ]
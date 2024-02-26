FROM node:latest

WORKDIR /app

COPY package.json package.json

RUN npm install  --force

COPY . .

RUN npm run build
CMD [ "npm","start"]

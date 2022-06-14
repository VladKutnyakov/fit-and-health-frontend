FROM node:14

WORKDIR /app

COPY package*.json /app

RUN npm ci

COPY . /app

RUN npm run build

EXPOSE 3030

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3030

CMD [ "npm", "start" ]

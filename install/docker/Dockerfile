FROM node:12.20.0 AS node-builder

WORKDIR /app
COPY package*.json /app/
RUN npm ci

COPY ./ /app/
RUN npm run build -- --prod

FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY install/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node-builder /app/dist/ciboard /usr/share/nginx/html

EXPOSE 80

FROM node:12.20.0-alpine AS node-runner

WORKDIR /ci-server

COPY ./src/assets/db.json /ci-server/
COPY ./routes.json /ci-server/

RUN npm install -g json-server

EXPOSE 3000

ENTRYPOINT [ "json-server", "db.json", "--routes routes.json", "--no-cors=true" ]
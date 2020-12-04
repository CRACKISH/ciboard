FROM node:12.20.0-alpine AS node-runner

WORKDIR /ci-server

COPY ./src/assets/db.json /ci-server/data/
COPY ./routes.json /ci-server/data/

VOLUME [ "/ci-server/data" ]

RUN npm install -g json-server

EXPOSE 3000

ENTRYPOINT [ "json-server", "data/db.json", "--routes data/routes.json", "--no-cors=true" ]
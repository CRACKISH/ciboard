FROM node:12.20.0-alpine AS node-runner

WORKDIR /ci-server

COPY ./src/assets/db.json /ci-server/data/
COPY ./routes.json /ci-server/

VOLUME [ "/ci-server/data" ]

RUN npm install -g json-server

EXPOSE 3000

ENTRYPOINT [ "json-server", "data/db.json", "--routes", "routes.json", "--host", "0.0.0.0", "--no-cors=true" ]
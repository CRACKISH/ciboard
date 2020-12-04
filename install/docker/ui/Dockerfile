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
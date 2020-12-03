FROM node:13.3.0 AS compile-image

WORKDIR /
COPY .npmrc package.json package-lock.json ./
RUN npm i

COPY . .
RUN ng build --prod

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /dist/ciboard /usr/share/nginx/html

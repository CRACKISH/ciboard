FROM node:12.20.0 AS compile-image

WORKDIR /app
RUN ls
COPY package*.json /app/
RUN npm i

COPY ./ /app/
RUN npm run build --prod

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=compile-image /app/dist/ciboard /usr/share/nginx/html

EXPOSE 80
CMD [ "npm", "run", "api"]

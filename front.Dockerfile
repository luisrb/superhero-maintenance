FROM node:16.18 AS container
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm i
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=container /usr/src/app/dist/superhero-maintenance-angular /usr/share/nginx/html
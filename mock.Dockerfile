FROM node:16.18 AS container
RUN npm install -g json-server
WORKDIR /data
EXPOSE 8000

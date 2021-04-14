# FROM node:15-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/ca-frontend /usr/share/nginx/html
RUN ng test
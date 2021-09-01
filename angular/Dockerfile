FROM node:14-alpine3.12 as builder

RUN mkdir /app
WORKDIR /app

COPY angular-app/package.json angular-app/package-lock.json /app/angular-app/

RUN npm install --prefix angular-app

COPY . /app

RUN npm run build --prefix angular-app -- --output-path=./dist/out


FROM nginx:1.20.1-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/angular-app/dist/out /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

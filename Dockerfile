FROM node:14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm config set registry https://registry.npm.taobao.org && npm install
COPY ./ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
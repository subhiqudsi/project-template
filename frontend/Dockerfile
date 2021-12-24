FROM node:16.9.0 as frontend
WORKDIR /app
COPY . /app
RUN npm install -g vue-cli
RUN cd /app && npm install
EXPOSE 8080
RUN npm run build
CMD ["npm", "run", "serve"]
FROM nginx:1.20.0 as frontend-prod-stage
COPY --from=frontend /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:14.14.0-alpine AS build-stage
WORKDIR /app
COPY ./package.json . 
RUN npm install
COPY . .
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html 
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /app/nginx.conf /etc/nginx/sites-available/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
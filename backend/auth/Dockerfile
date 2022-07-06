FROM node:14.14.0-alpine
WORKDIR /app
COPY ./package.json ./ 
RUN npm install
RUN npm install npm@latest -g
COPY . .
EXPOSE 4000
COPY ./docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh
#ENTRYPOINT [ "./docker-entrypont.sh" ]
CMD ["start", "npm", "docker-entrypoint.sh"]
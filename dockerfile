FROM node:current-slim

WORKDIR /app

# install and cache app dependencies
COPY . .
RUN npm install

# start app
EXPOSE 8080
CMD ["npm", "run", "serve"]
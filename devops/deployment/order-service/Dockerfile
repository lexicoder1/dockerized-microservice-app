FROM node:15
WORKDIR /app
# COPY package.json /app   is same as COPY package.json .
# it means copy package.json into /app
COPY ../../../app/order-service/package.json /app
RUN npm install
COPY ../../../app/order-service/ /app
ENV PORT 4002
EXPOSE $PORT
CMD ["node", "index.js"]
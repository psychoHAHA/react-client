# FROM node:14 AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:stable-alpine

# COPY --from=build /usr/src/app/build usr/share/nginx/html

# COPY nginx.conf /ect/nginx/conf/d/default.conf

# CMD [ "nginx", "-g", "daemon off;" ]

# FROM node:14 AS build

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# RUN npm run build

# FROM nginx:stable-alpine

# COPY --from=build usr/src/app/build usr/share/nginx/html
# # COPY --from=build /build /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/conf.d/default.conf

# CMD ["nginx", "-g", "daemon off;"]

FROM node:18 AS build  

WORKDIR /usr/src/app  

COPY package*.json ./  

RUN npm install  

COPY . .  

# RUN npm run build
RUN npm run build

FROM nginx:stable-alpine  

COPY --from=build /usr/src/app/build /usr/share/nginx/html  

COPY nginx.conf /etc/nginx/conf.d/default.conf  

CMD ["nginx", "-g", "daemon off;"]  
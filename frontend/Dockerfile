# docker rm -f webapp | true
# docker build --rm --force-rm -t webapp . -f docker-nginx/Dockerfile
# docker run -d -p 80:80 --name webapp webapp
FROM nginx:1.15.0-alpine
#FROM nginx:1.10.3-alpine
#RUN apk --update add --no-cache bash
COPY ./dist/frontend /usr/share/nginx/html
COPY ./default.conf.nginx /etc/nginx/conf.d/default.conf

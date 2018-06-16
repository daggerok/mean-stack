server {
  listen      ${PORT};
  server_name ${HOST};
  charset     utf-8;

  location / {
    root  /usr/share/nginx/html;
    index index.html index.htm;
    allow all;
  }

  # redirect some server error pages to the fallback page /index.html
  error_page 400 404 500 502 503 504 /index.html;
  location = /index.html {
    root  /usr/share/nginx/html;
    allow all;
  }
}

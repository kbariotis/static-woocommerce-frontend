FROM wordpress:latest

ENV WOOCOMMERCE_VERSION 3.1.2

RUN apt-get update \
    && apt-get install -y --no-install-recommends unzip wget \
    && wget https://downloads.wordpress.org/plugin/woocommerce.$WOOCOMMERCE_VERSION.zip -O /tmp/temp.zip \
    && cd /usr/src/wordpress/wp-content/plugins \
    && unzip /tmp/temp.zip \
    && rm /tmp/temp.zip \
    && rm -rf /var/lib/apt/lists/*

# Download WordPress CLI
RUN curl -L "https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar" > /usr/bin/wp && \
  chmod +x /usr/bin/wp

# Fix permissions
RUN curl -L "https://gist.githubusercontent.com/Adirael/3383404/raw/2ce9e58cb48a3a85f4c8b667ebd3a42cdcda848b/fix-wordpress-permissions.sh" > fwp && \
  chmod +x fwp && \
  sh fwp /usr/src/wordpress

VOLUME ["/var/www/html"]

# RUN docker run --name my-mariadb \
#  -e MYSQL_ROOT_PASSWORD=my-secret-pw \
#  -e MYSQL_USER=woo \
#  -e MYSQL_PASSWORD=commerce \
#  -e MYSQL_DATABASE=wordpress \
#  -d mariadb:latest
# RUN docker run --name woobeat --link my-mariadb:mysql -p 8080:80 -d shipbeat/woocommerce

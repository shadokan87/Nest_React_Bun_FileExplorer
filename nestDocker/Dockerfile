FROM oven/bun:debian

EXPOSE 5500
COPY ./srcs/init.sh /root
RUN chmod 777 ~/init.sh
ENTRYPOINT ~/init.sh
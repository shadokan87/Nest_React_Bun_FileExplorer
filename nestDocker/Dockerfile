FROM oven/bun:debian

EXPOSE $NEST_PORT
COPY ./srcs/init.sh /root
RUN chmod 777 ~/init.sh
ENTRYPOINT ~/init.sh
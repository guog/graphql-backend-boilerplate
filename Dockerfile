FROM node:14-alpine
LABEL maintainer="guog<guog@live.cn>" \
  description="Graphql back-end service boilerplate based on node and typescript."

RUN uname -a
USER root

ADD . /.sources
WORKDIR /.sources

RUN apk update && apk upgrade \
  && apk add --no-cache openssl curl python3 cmake make gcc g++ \
  && openssl version -a

RUN  yarn && yarn build \
  && node -p "require('./package.json').version" > VERSION \
  && mkdir -p /app \
  && cp -a /.sources/* /app \
  && rm -rf /app/src \
  && yarn cache clean \
  && rm -rf /.sources \
  && chown -R node /app

WORKDIR /app
USER node

ENV HOME_DIR=/app \
  NODE_ENV=production \
  NODE_TLS_REJECT_UNAUTHORIZED=0 \
  APP_PATH=/ \
  APP_PORT=4000 \
  DATABASE_URL=postgresql://USERNAME:PASWORD@HOST:5432/DBNAME?schema=PUBLIC

EXPOSE 4000

CMD ["yarn", "start"]

HEALTHCHECK --interval=300s --timeout=10s --start-period=30s --retries=5 \
  CMD curl --request POST \
  --header 'content-type: application/json' \
  --url 'http://localhost:${APP_PORT}${APP_PATH}' \
  --data-raw '{"query":"query IntrospectionQuery { __typename }", "operationName":"IntrospectionQuery"}' \
  --compressed \
  --insecure \
  || exit 1

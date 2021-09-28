FROM node:14

ARG APP_ROOT=/src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN yarn install

CMD [ "yarn", "dev" ]

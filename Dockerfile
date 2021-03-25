FROM nginx:1.15-alpine

LABEL description="Ltd. Defi Front end." \
    maintainer="quangtuyen <quangtuyen88@hotmail.com>"

RUN apk add --no-cache --update bash curl && \
    rm -rf /var/cache/apk/*

ARG app_name=defi-landing-page
ARG build_version="1.0.2-edge"

EXPOSE 80

HEALTHCHECK --interval=1m --timeout=3s \
    CMD curl --fail http://127.0.0.1 || exit 1

COPY nginx/default.conf /etc/nginx/conf.d/default.conf
ADD ./target/${app_name}-${build_version}.tar /usr/share/nginx/html/

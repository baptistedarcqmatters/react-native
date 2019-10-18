ARG REGISTRY

FROM ${REGISTRY}/docker/base-images/ci/node10:latest as builder

COPY front /usr/src/app/front
COPY common /usr/src/app/common

WORKDIR /usr/src/app/front

RUN yarn

FROM ${REGISTRY}/docker/base-images/ci/node10:latest

COPY --from=builder /usr/src/app/front /usr/src/app/front
COPY --from=builder /usr/src/app/common /usr/src/app/common

############################################################
# Base image
############################################################
FROM node:12.3.0-stretch-slim AS base

USER node

RUN mkdir -p /home/node/src
WORKDIR /home/node/src

RUN mkdir node_modules

COPY --chown=node:node package.json .
COPY --chown=node:node yarn.lock .

# https://github.com/yarnpkg/yarn/issues/2629
RUN yarn install --frozen-lockfile --network-concurrency=1 && yarn cache clean

# Copy remaining code
COPY --chown=node:node wps.config.js .
COPY --chown=node:node webpack.config.js .
COPY --chown=node:node constants.js .
COPY --chown=node:node index_template.ejs .
COPY --chown=node:node src ./src

############################################################
# Development Environment
############################################################
FROM base as development

ENTRYPOINT [ "yarn" ]

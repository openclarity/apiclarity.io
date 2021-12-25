FROM node:lts as dependencies
WORKDIR /api-clarity
COPY api-clarity/package.json api-clarity/yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /api-clarity
COPY api-clarity .
COPY --from=dependencies /api-clarity/node_modules ./node_modules
RUN yarn build

EXPOSE 3000
CMD ["npm", "start"]
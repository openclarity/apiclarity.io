FROM node:lts as dependencies
WORKDIR /api-clarity
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /api-clarity
COPY api-clarity .
COPY --from=dependencies /node_modules ./node_modules
RUN yarn build

EXPOSE 3000
CMD ["npm", "start"]
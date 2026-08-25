ARG NODE_VERSION=22
ARG PNPM_VERSION=10.14.0

FROM node:${NODE_VERSION}-bookworm-slim AS base

RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

WORKDIR /app

FROM base AS builder

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

COPY . .

ENV STRAPI_TELEMETRY_DISABLED=true

RUN pnpm build && pnpm prune --prod

FROM node:${NODE_VERSION}-bookworm-slim AS runner

ENV NODE_ENV=production
ENV STRAPI_TELEMETRY_DISABLED=true

WORKDIR /app

COPY --from=builder --chown=node:node /app ./

USER node
EXPOSE 1337

CMD ["npm", "run", "start"]
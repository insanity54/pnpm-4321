FROM node:20.15 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /usr/src/app
RUN corepack enable && corepack prepare pnpm@9.2.0 --activate


FROM base as install
ENV NODE_ENV development
RUN mkdir -p /usr/src/app/packages/bot && mkdir /usr/src/app/packages/temporal-workflows && mkdir -p /prod/bot
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc .
COPY ./packages/bot/pnpm-lock.yaml ./packages/bot/
COPY ./packages/temporal-workflows/pnpm-lock.yaml ./packages/temporal-workflows/
COPY ./packages/types/pnpm-lock.yaml ./packages/types/
RUN pnpm fetch
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY ./packages/bot/ ./packages/bot/
COPY ./packages/temporal-workflows/ ./packages/temporal-workflows/
COPY ./packages/types/ ./packages/types/
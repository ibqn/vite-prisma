## Getting started

generate `package.json` file

```shell
npm init -y
```

generate `tsconfig.json` fie

```shell
npx tsc --init
```

add typescript

```shell
pnpm add -D typescript @types/node ts-node ts-node-dev cross-env
```

add prisma

```shell
pnpm add -D prisma
```

add sqlite provider

```shell
pnpm prisma init --datasource-provider sqlite
```

create migration, once `schema.prisma` is defined

```shell
pnpm prisma migrate dev --name init
```

seed table with data

```shell
pnpm prisma db seed
```

explore data with studio

```shell
pnpm prisma studio
```

add yoga and pothos

```shell
pnpm add graphql-yoga @pothos/core
```

```shell
pnpm add  graphql-scalars
```

```shell
pnpm add -D @pothos/plugin-prisma
```

```shell
pnpm prisma generate
```

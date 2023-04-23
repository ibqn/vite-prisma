import SchemaBuilder from '@pothos/core'
import { DateResolver } from 'graphql-scalars'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import { prisma } from './client'

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date }
  }

  PrismaTypes: PrismaTypes
}>({
  plugins: [PrismaPlugin],
  prisma: { client: prisma },
})

builder.addScalarType('Date', DateResolver, {})

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
})

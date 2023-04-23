import type { GetUsersQuery } from '@/graphql/generated'

export type User = GetUsersQuery['users'][0]
export type Message = GetUsersQuery['users'][0]['messages'][0]

import { UserDisplay } from '@/components'
import { useQuery } from 'urql'
import { GetUsersDocument } from '@/graphql/generated'
import { User } from '@/types'

export const App = () => {
  const [results] = useQuery({
    query: GetUsersDocument,
  })

  const users: User[] = results.data?.users ?? []

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-y-scroll bg-zinc-800 p-4">
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  )
}

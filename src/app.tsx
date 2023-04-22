import { User } from '@/types'
import { UserDisplay } from '@/components'

export const App = () => {
  const users: User[] = [
    {
      name: 'Prisma Fan',
      messages: [
        {
          body: 'Prisma rocks!!',
        },
        {
          body: 'Did I mention I love Prisma?',
        },
      ],
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-y-12 overflow-scroll bg-zinc-800 p-4">
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  )
}

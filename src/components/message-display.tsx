import { Message } from '@/types'
import { Branch } from './branch'

type Props = {
  message: Message
  index: number
}

export const MessageDisplay = ({ message, index }: Props) => {
  return (
    <div className="group relative mb-2 flex h-20 w-48 shrink-0 items-center rounded-lg bg-zinc-700 drop-shadow-md">
      <Branch trunk={index === 0} />
      <p className="px-4 text-sm font-bold text-gray-200">{message.body}</p>
    </div>
  )
}

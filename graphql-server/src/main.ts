import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { schema } from './schema'

function main() {
  console.log('Hey there! 👋')

  const yoga = createYoga({ schema })

  const server = createServer(yoga)

  const port = Number(process.env.API_PORT) || 4000

  server.listen(port, () => {
    console.info(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
  })
}

main()

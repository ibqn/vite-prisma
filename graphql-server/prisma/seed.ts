import { PrismaClient } from '@prisma/client'
import userData from './data.json'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  await prisma.message.deleteMany({})
  await prisma.user.deleteMany({})

  for (const data of userData) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        messages: {
          create: data.messages,
        },
      },
    })

    console.log(`Created user with id: ${user.id}`)
  }

  console.log(`🌱 Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

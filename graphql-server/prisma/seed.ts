import { PrismaClient } from '@prisma/client'
import userData from './data.json'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  // Delete all `User` and `Message` records
  await prisma.message.deleteMany({})
  await prisma.user.deleteMany({})

  // (Re-)Create dummy `User` and `Message` records
  for (const data of userData) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        messages: {
          create: data.messages,
        },
      },
    })
    console.log(`Created user with id: ${data.name}`)
  }
  console.log(`Seeding finished.`)
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

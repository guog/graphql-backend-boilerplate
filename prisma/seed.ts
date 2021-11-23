import dotenv from 'dotenv'
import { PrismaClient } from '@prisma/client'
import { encryptPassword } from '../src/utils'
dotenv.config()

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})
async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'admin',
        password: await encryptPassword('admin'),
        nickName: 'admin'
      }
    ],
    skipDuplicates: true
  })
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })

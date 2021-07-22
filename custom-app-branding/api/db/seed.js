/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

/*
 * Seed data is database data that needs to exist for your app to run.
 *
 * @see https://www.prisma.io/docs/reference/api-reference/command-reference#migrate-reset
 * @see https://www.prisma.io/docs/guides/prisma-guides/seed-database
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#upsert
 * @see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
 */
async function main() {
  console.warn('Please define your seed data.')

  await db.user.create({
    data: { name: 'Nimothy' },
  })

  await db.image.create({
    data: {
      name: 'Nimothy Profile',
      url: 'https://res.cloudinary.com/milecia/image/upload/v1606580774/fish-vegetables.jpg',
      userId: 1,
    },
  })

  await db.info.create({
    data: {
      balance: 7.89,
      lastLogin: new Date(),
      endDate: new Date(),
      userId: 1,
    },
  })

  await db.layout.create({
    data: {
      name: 'MidLeft',
      dataLocation: 'mid-left',
      imageUrl:
        'https://res.cloudinary.com/milecia/image/upload/v1606580774/fish-vegetables.jpg',
      userId: 1,
    },
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })

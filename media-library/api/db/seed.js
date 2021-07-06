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
    data: { username: 'Beth' },
  })
  await db.video.create({
    data: { name: 'Beth_vid', duration: 7.34, url: "example.com", userId: 1 },
  })
  await db.image.create({
    data: { name: 'Beth_img', url: "example.com/beth.jpg", userId: 1 },
  })
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })

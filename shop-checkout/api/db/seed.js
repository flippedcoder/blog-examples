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

  // Change to match your data model and seeding needs
  const ordersData = [
    { createdAt: new Date('09/21/2021'), total: 123.34 },
    { createdAt: new Date('04/21/2021'), total: 424.13 },
  ]
  const itemsData = [
    { name: 'Spoon', price: 34.99, url: 'https://res.cloudinary.com/milecia/image/upload/v1606580786/samples/landscapes/landscape-panorama.jpg' },
    { name: 'Blow Dryer', price: 89.99, url: 'https://res.cloudinary.com/milecia/image/upload/v1606580785/samples/landscapes/nature-mountains.jpg' },
    { name: 'Pet Bed', price: 57.99, url: 'https://res.cloudinary.com/milecia/image/upload/v1606580779/samples/landscapes/architecture-signs.jpg' },
    { name: 'Wicker Chair', price: 124.99, url: 'https://res.cloudinary.com/milecia/image/upload/v1606580776/samples/landscapes/girl-urban-view.jpg' },
    { name: 'Paint', price: 42.99, url: 'https://res.cloudinary.com/milecia/video/upload/v1606580790/elephant_herd.mp4' },
    { name: 'Flooring', price: 15.99, url: 'https://res.cloudinary.com/milecia/video/upload/v1606580788/sea-turtle.mp4' },
  ]

  // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
  // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
  return Promise.all(
    ordersData.map(async (order) => {
      const record = await db.order.create({
        data: { createdAt: order.createdAt, total: order.total },
      })
      console.log(record)
    }),
    itemsData.map(async (item) => {
      const record = await db.item.create({
        data: {name: item.name, price: item.price, url: item.url, orderId: 'cktqa4gy70001psxhf9b88c3a'},
      })

      console.log(record)
    })
  )
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })

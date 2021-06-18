/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  console.warn('Please define your seed data.')

  const record = await db.setting.create({
    data: {
      videoName: 'elephant_herd',
      loop: false,
      controls: true,
      volume: 0.2,
      playbackRate: 1.5,
    },
  })
  console.log(record)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })

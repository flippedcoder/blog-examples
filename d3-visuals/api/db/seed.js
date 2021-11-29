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

  const salesData = [
    { year: 1980, efficiency: 24.3, sales: 8949000 },
    { year: 1985, efficiency: 27.6, sales: 10979000 },
    { year: 1990, efficiency: 28, sales: 9303000 },
    { year: 1991, efficiency: 28.4, sales: 8185000 },
    { year: 1992, efficiency: 27.9, sales: 8213000 },
    { year: 1993, efficiency: 28.4, sales: 8518000 },
    { year: 1994, efficiency: 28.3, sales: 8991000 },
    { year: 1995, efficiency: 28.6, sales: 8620000 },
    { year: 1996, efficiency: 28.5, sales: 8479000 },
    { year: 1997, efficiency: 28.7, sales: 8217000 },
    { year: 1998, efficiency: 28.8, sales: 8085000 },
    { year: 1999, efficiency: 28.3, sales: 8638000 },
    { year: 2000, efficiency: 28.5, sales: 8778000 },
    { year: 2001, efficiency: 28.8, sales: 8352000 },
    { year: 2002, efficiency: 29, sales: 8042000 },
    { year: 2003, efficiency: 29.5, sales: 7556000 },
    { year: 2004, efficiency: 29.5, sales: 7483000 },
    { year: 2005, efficiency: 30.3, sales: 7660000 },
    { year: 2006, efficiency: 30.1, sales: 7762000 },
    { year: 2007, efficiency: 31.2, sales: 7562000 },
    { year: 2008, efficiency: 31.5, sales: 6769000 },
    { year: 2009, efficiency: 32.9, sales: 5402000 },
    { year: 2010, efficiency: 33.9, sales: 5636000 },
    { year: 2011, efficiency: 33.1, sales: 6093000 },
    { year: 2012, efficiency: 35.3, sales: 7245000 },
    { year: 2013, efficiency: 36.4, sales: 7586000 },
    { year: 2014, efficiency: 36.5, sales: 7708000 },
    { year: 2015, efficiency: 37.2, sales: 7517000 },
    { year: 2016, efficiency: 37.7, sales: 6873000 },
    { year: 2017, efficiency: 39.4, sales: 6081000 },
  ]

  const avengersData = [
    { group: 'Captain America', axis: 'Intelligence', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Strength', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Speed', value: 2, description: 'only human' },
    { group: 'Captain America', axis: 'Durability', value: 3, description: 'only human' },
    { group: 'Captain America', axis: 'Energy', value: 1, description: 'only human' },
    { group: 'Captain America', axis: 'Fighting Skills', value: 6, description: 'able to judge combat decisively' },
    { group: 'Iron Man', axis: 'Intelligence', value: 6, description: 'Smart entreprenuer' },
    { group: 'Iron Man', axis: 'Strength', value: 6, description: 'Powered by his suit' },
    { group: 'Iron Man', axis: 'Speed', value: 5, description: 'rocket boosters' },
    { group: 'Iron Man', axis: 'Durability', value: 6, description: 'tough durable material' },
    { group: 'Iron Man', axis: 'Energy', value: 6, description: '' },
    { group: 'Iron Man', axis: 'Fighting Skills', value: 4, description: '' },
    { group: 'Hulk', axis: 'Intelligence', value: 6, description: 'Scientist brilliance' },
    { group: 'Hulk', axis: 'Strength', value: 7, description: 'Insanely strong' },
    { group: 'Hulk', axis: 'Speed', value: 3, description: 'clumsy' },
    { group: 'Hulk', axis: 'Durability', value: 7, description: 'Close to industructible' },
    { group: 'Hulk', axis: 'Energy', value: 1, description: '' },
    { group: 'Hulk', axis: 'Fighting Skills', value: 4, description: 'great at SMASHING' },
    { group: 'Thor', axis: 'Intelligence', value: 2, description: 'not too bright' },
    { group: 'Thor', axis: 'Strength', value: 7, description: 'god-like strength' },
    { group: 'Thor', axis: 'Speed', value: 7, description: 'god-like speed' },
    { group: 'Thor', axis: 'Durability', value: 6, description: 'god-like durability' },
    { group: 'Thor', axis: 'Energy', value: 6, description: '' },
    { group: 'Thor', axis: 'Fighting Skills', value: 4, description: 'quite low for a god???' },
  ]

  const fruitData = [
    { label: 'Tangerine', value: 10 },
    { label: 'Kumquat', value: 20 },
    { label: 'Dragonfruit', value: 14 },
    { label: 'Starfruit', value: 42 },
    { label: 'Raspberry', value: 31 },
    { label: 'Plantain', value: 18 }
  ]

  return Promise.all(
    salesData.map(async (sale) => {
      const record = await db.sale.create({
        data: sale,
      })
      console.log(record)
    }),
    avengersData.map(async (avenger) => {
      const record = await db.avenger.create({
        data: avenger,
      })
      console.log(record)
    }),
    fruitData.map(async (fruit) => {
      const record = await db.fruit.create({
        data: fruit,
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

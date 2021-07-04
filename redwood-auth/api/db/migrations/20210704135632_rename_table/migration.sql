/*
  Warnings:

  - You are about to drop the `Entry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Entry";

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "purchaseName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

/*
  Warnings:

  - You are about to drop the `Recipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Recipe";

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "recipe" TEXT NOT NULL,
    "video" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

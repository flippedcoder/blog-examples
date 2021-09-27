/*
  Warnings:

  - You are about to drop the column `text` on the `Meme` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Meme" DROP COLUMN "text",
ADD COLUMN     "textBottom" TEXT,
ADD COLUMN     "textTop" TEXT;

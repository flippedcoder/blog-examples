/*
  Warnings:

  - You are about to drop the column `team_img` on the `Team` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Team" DROP COLUMN "team_img",
ADD COLUMN     "teamImg" TEXT;

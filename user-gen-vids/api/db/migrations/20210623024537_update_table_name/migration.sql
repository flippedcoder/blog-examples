/*
  Warnings:

  - You are about to drop the `Properties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Properties";

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "videoDuration" INTEGER NOT NULL,
    "slideDuration" INTEGER NOT NULL,
    "transitionDuration" INTEGER NOT NULL,
    "videos" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Properties" (
    "id" SERIAL NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "videoDuration" INTEGER NOT NULL,
    "slideDuration" INTEGER NOT NULL,
    "transitionDuration" INTEGER NOT NULL,
    "videos" TEXT[],

    PRIMARY KEY ("id")
);

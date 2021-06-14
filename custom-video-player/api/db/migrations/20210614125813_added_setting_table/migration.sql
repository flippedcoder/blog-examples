-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "videoName" TEXT NOT NULL,
    "loop" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Setting.videoName_unique" ON "Setting"("videoName");

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Heatmap" (
    "id" TEXT NOT NULL,
    "heatmapImage" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,

    CONSTRAINT "Heatmap_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Heatmap" ADD CONSTRAINT "Heatmap_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

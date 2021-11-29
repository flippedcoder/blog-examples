-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,
    "sales" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avenger" (
    "id" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "axis" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fruit" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "value" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

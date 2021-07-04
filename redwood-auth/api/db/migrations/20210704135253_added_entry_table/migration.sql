-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "purchaseName" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

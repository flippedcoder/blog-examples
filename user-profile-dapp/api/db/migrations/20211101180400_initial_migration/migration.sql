-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "blockchainAddress" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

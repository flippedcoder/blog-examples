-- CreateTable
CREATE TABLE "Alert" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alert" ADD FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

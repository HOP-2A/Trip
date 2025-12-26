-- CreateTable
CREATE TABLE "Fact" (
    "id" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "visa" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "warning" TEXT NOT NULL,

    CONSTRAINT "Fact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mustEatFood" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "factId" TEXT,

    CONSTRAINT "mustEatFood_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mustVisitLocation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "factId" TEXT,

    CONSTRAINT "mustVisitLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "mustEatFood" ADD CONSTRAINT "mustEatFood_factId_fkey" FOREIGN KEY ("factId") REFERENCES "Fact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mustVisitLocation" ADD CONSTRAINT "mustVisitLocation_factId_fkey" FOREIGN KEY ("factId") REFERENCES "Fact"("id") ON DELETE SET NULL ON UPDATE CASCADE;

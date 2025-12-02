/*
  Warnings:

  - You are about to drop the column `role` on the `CustomTrip` table. All the data in the column will be lost.
  - You are about to drop the column `tripMemberId` on the `CustomTrip` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,customTripId]` on the table `TripMember` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `CustomTrip` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customTripId` to the `TripMember` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CustomTrip" DROP CONSTRAINT "CustomTrip_tripMemberId_fkey";

-- AlterTable
ALTER TABLE "CustomTrip" DROP COLUMN "role",
DROP COLUMN "tripMemberId",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TripMember" ADD COLUMN     "customTripId" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL DEFAULT 'member';

-- CreateTable
CREATE TABLE "TripPlan" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "traveler" TEXT,

    CONSTRAINT "TripPlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripDay" (
    "id" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "tripPlanId" TEXT,

    CONSTRAINT "TripDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripActivity" (
    "id" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "time" TEXT,
    "title" TEXT NOT NULL,
    "notes" TEXT,
    "tripDayId" TEXT,

    CONSTRAINT "TripActivity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TripMember_userId_customTripId_key" ON "TripMember"("userId", "customTripId");

-- AddForeignKey
ALTER TABLE "TripMember" ADD CONSTRAINT "TripMember_customTripId_fkey" FOREIGN KEY ("customTripId") REFERENCES "CustomTrip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlan" ADD CONSTRAINT "TripPlan_traveler_fkey" FOREIGN KEY ("traveler") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_tripPlanId_fkey" FOREIGN KEY ("tripPlanId") REFERENCES "TripPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripActivity" ADD CONSTRAINT "TripActivity_tripDayId_fkey" FOREIGN KEY ("tripDayId") REFERENCES "TripDay"("id") ON DELETE SET NULL ON UPDATE CASCADE;

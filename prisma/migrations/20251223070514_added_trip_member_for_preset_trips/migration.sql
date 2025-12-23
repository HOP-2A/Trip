/*
  Warnings:

  - You are about to drop the column `traveler` on the `TripPlan` table. All the data in the column will be lost.
  - Made the column `tripPlanId` on table `TripDay` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TripDay" DROP CONSTRAINT "TripDay_tripPlanId_fkey";

-- DropForeignKey
ALTER TABLE "TripPlan" DROP CONSTRAINT "TripPlan_traveler_fkey";

-- AlterTable
ALTER TABLE "TripDay" ALTER COLUMN "tripPlanId" SET NOT NULL;

-- AlterTable
ALTER TABLE "TripPlan" DROP COLUMN "traveler";

-- CreateTable
CREATE TABLE "TripPlanMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tripPlanId" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'member',

    CONSTRAINT "TripPlanMember_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TripPlanMember_userId_tripPlanId_key" ON "TripPlanMember"("userId", "tripPlanId");

-- AddForeignKey
ALTER TABLE "TripPlanMember" ADD CONSTRAINT "TripPlanMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripPlanMember" ADD CONSTRAINT "TripPlanMember_tripPlanId_fkey" FOREIGN KEY ("tripPlanId") REFERENCES "TripPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripDay" ADD CONSTRAINT "TripDay_tripPlanId_fkey" FOREIGN KEY ("tripPlanId") REFERENCES "TripPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

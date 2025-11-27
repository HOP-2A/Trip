/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilePicture` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `GroupMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TravelGroup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TripActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TripPlan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GroupMember" DROP CONSTRAINT "GroupMember_groupId_fkey";

-- DropForeignKey
ALTER TABLE "GroupMember" DROP CONSTRAINT "GroupMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "TravelGroup" DROP CONSTRAINT "TravelGroup_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "TripActivity" DROP CONSTRAINT "TripActivity_tripPlanId_fkey";

-- DropForeignKey
ALTER TABLE "TripPlan" DROP CONSTRAINT "TripPlan_groupId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "profilePicture",
ALTER COLUMN "name" DROP NOT NULL;

-- DropTable
DROP TABLE "GroupMember";

-- DropTable
DROP TABLE "TravelGroup";

-- DropTable
DROP TABLE "TripActivity";

-- DropTable
DROP TABLE "TripPlan";

-- CreateTable
CREATE TABLE "CustomTrip" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "peopleCount" INTEGER,
    "destination" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'owner',
    "images" TEXT[],
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tripMemberId" TEXT,

    CONSTRAINT "CustomTrip_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomTripDay" (
    "id" TEXT NOT NULL,
    "customTripId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "title" TEXT,
    "description" TEXT,

    CONSTRAINT "CustomTripDay_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomTripActivity" (
    "id" TEXT NOT NULL,
    "time" TEXT,
    "title" TEXT NOT NULL,
    "notes" TEXT,
    "dayId" TEXT NOT NULL,

    CONSTRAINT "CustomTripActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "TripMember_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CustomTrip" ADD CONSTRAINT "CustomTrip_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomTrip" ADD CONSTRAINT "CustomTrip_tripMemberId_fkey" FOREIGN KEY ("tripMemberId") REFERENCES "TripMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomTripDay" ADD CONSTRAINT "CustomTripDay_customTripId_fkey" FOREIGN KEY ("customTripId") REFERENCES "CustomTrip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomTripActivity" ADD CONSTRAINT "CustomTripActivity_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "CustomTripDay"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripMember" ADD CONSTRAINT "TripMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

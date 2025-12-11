/*
  Warnings:

  - You are about to drop the `CustomTripActivity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TripActivity` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CustomTripActivity" DROP CONSTRAINT "CustomTripActivity_dayId_fkey";

-- DropForeignKey
ALTER TABLE "TripActivity" DROP CONSTRAINT "TripActivity_tripDayId_fkey";

-- DropTable
DROP TABLE "CustomTripActivity";

-- DropTable
DROP TABLE "TripActivity";

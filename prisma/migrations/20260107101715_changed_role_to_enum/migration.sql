/*
  Warnings:

  - The `role` column on the `TripMember` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `role` column on the `TripPlanMember` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TripRole" AS ENUM ('OWNER', 'ADMIN', 'MEMBER');

-- AlterTable
ALTER TABLE "TripMember" DROP COLUMN "role",
ADD COLUMN     "role" "TripRole" NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "TripPlanMember" DROP COLUMN "role",
ADD COLUMN     "role" "TripRole" NOT NULL DEFAULT 'MEMBER';

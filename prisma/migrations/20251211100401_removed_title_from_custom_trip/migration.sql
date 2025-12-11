/*
  Warnings:

  - You are about to drop the column `title` on the `CustomTrip` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CustomTrip" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" DROP NOT NULL;

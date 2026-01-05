-- CreateEnum
CREATE TYPE "InvitedStatus" AS ENUM ('PENDING', 'REJECTED', 'ACCEPTED');

-- AlterTable
ALTER TABLE "InvitedMember" ADD COLUMN     "status" "InvitedStatus" NOT NULL DEFAULT 'PENDING';

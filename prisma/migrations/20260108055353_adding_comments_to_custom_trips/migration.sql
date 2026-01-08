-- AlterTable
ALTER TABLE "TripComment" ADD COLUMN     "customTripId" TEXT;

-- AddForeignKey
ALTER TABLE "TripComment" ADD CONSTRAINT "TripComment_customTripId_fkey" FOREIGN KEY ("customTripId") REFERENCES "CustomTrip"("id") ON DELETE SET NULL ON UPDATE CASCADE;

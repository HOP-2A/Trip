/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `TripPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TripPlan_title_key" ON "TripPlan"("title");

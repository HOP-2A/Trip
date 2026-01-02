-- CreateTable
CREATE TABLE "InvitedMember" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "customTripId" TEXT NOT NULL,
    "invitedUserId" TEXT NOT NULL,

    CONSTRAINT "InvitedMember_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InvitedMember" ADD CONSTRAINT "InvitedMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvitedMember" ADD CONSTRAINT "InvitedMember_customTripId_fkey" FOREIGN KEY ("customTripId") REFERENCES "CustomTrip"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

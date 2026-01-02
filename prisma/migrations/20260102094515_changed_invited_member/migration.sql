-- AddForeignKey
ALTER TABLE "InvitedMember" ADD CONSTRAINT "InvitedMember_invitedUserId_fkey" FOREIGN KEY ("invitedUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

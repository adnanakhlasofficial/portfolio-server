/*
  Warnings:

  - You are about to drop the column `experience` on the `About` table. All the data in the column will be lost.
  - You are about to drop the column `aboutId` on the `Experience` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Experience" DROP CONSTRAINT "Experience_aboutId_fkey";

-- AlterTable
ALTER TABLE "public"."About" DROP COLUMN "experience";

-- AlterTable
ALTER TABLE "public"."Experience" DROP COLUMN "aboutId",
ADD COLUMN     "adminId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Experience" ADD CONSTRAINT "Experience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

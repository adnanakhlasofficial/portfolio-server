/*
  Warnings:

  - You are about to drop the column `adminId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `About` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `UserId` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `UserId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_adminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Experience" DROP CONSTRAINT "Experience_adminId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_adminId_fkey";

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "adminId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Experience" DROP COLUMN "adminId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "adminId",
ADD COLUMN     "UserId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."About";

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "skills" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Experience" ADD CONSTRAINT "Experience_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

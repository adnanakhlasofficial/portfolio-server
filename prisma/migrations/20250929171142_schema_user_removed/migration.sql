/*
  Warnings:

  - You are about to drop the column `UserId` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `UserId` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bio` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `skills` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `adminId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Blog" DROP CONSTRAINT "Blog_UserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Experience" DROP CONSTRAINT "Experience_UserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_UserId_fkey";

-- AlterTable
ALTER TABLE "public"."Admin" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "skills" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Blog" DROP COLUMN "UserId",
ADD COLUMN     "adminId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Experience" DROP COLUMN "UserId",
ADD COLUMN     "adminId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Project" DROP COLUMN "UserId",
ADD COLUMN     "adminId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."User";

-- AddForeignKey
ALTER TABLE "public"."Blog" ADD CONSTRAINT "Blog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Project" ADD CONSTRAINT "Project_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Experience" ADD CONSTRAINT "Experience_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

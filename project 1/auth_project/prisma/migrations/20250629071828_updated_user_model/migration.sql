/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('SUPERADMIN', 'ADMINn');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "role" NOT NULL;

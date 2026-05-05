/*
  Warnings:

  - Added the required column `email` to the `userOTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userOTP" ADD COLUMN     "email" TEXT NOT NULL;

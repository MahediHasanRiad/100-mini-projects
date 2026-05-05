/*
  Warnings:

  - Added the required column `otp` to the `userOTP` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "userOTP" ADD COLUMN     "otp" TEXT NOT NULL;

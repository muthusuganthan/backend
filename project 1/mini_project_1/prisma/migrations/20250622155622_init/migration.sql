-- CreateTable
CREATE TABLE "User" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "blood_group" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("roll_no")
);

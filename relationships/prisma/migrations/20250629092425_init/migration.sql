-- CreateEnum
CREATE TYPE "ProofType" AS ENUM ('AADHARCARD', 'PANCARD');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'NEFT');

-- CreateTable
CREATE TABLE "Student" (
    "roll_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" TEXT,
    "age" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("roll_no")
);

-- CreateTable
CREATE TABLE "Proof" (
    "proof_id" TEXT NOT NULL,
    "proof_type" "ProofType" NOT NULL,
    "proof_url" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL,

    CONSTRAINT "Proof_pkey" PRIMARY KEY ("proof_id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" TEXT NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "amount" TEXT NOT NULL,
    "transaction_id" TEXT NOT NULL,
    "roll_no" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Proof_roll_no_key" ON "Proof"("roll_no");

-- AddForeignKey
ALTER TABLE "Proof" ADD CONSTRAINT "Proof_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_roll_no_fkey" FOREIGN KEY ("roll_no") REFERENCES "Student"("roll_no") ON DELETE RESTRICT ON UPDATE CASCADE;

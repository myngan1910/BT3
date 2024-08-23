-- CreateTable
CREATE TABLE "dangnhap" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "pass" TEXT NOT NULL,

    CONSTRAINT "dangnhap_pkey" PRIMARY KEY ("id")
);

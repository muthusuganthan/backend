-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "product_title" TEXT NOT NULL,
    "product_description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "discount_percentage" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "brand" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

/*
  Warnings:

  - The primary key for the `attribute_groups` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `attributes_group_id` on the `attribute_groups` table. All the data in the column will be lost.
  - You are about to alter the column `item_status` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(2))`.
  - You are about to drop the column `guest_emal` on the `orders` table. All the data in the column will be lost.
  - You are about to alter the column `order_status` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(0))`.
  - You are about to alter the column `payment_status` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum(EnumId(1))`.
  - You are about to drop the column `is_fillerable` on the `product_attributes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[brand_name]` on the table `brands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[product_variant_sku]` on the table `product_variants` will be added. If there are existing duplicate values, this will fail.
  - The required column `attribute_group_id` was added to the `attribute_groups` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `guest_email` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_filterable` to the `product_attributes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `product_attributes` DROP FOREIGN KEY `product_attributes_attribute_group_id_fkey`;

-- DropIndex
DROP INDEX `product_attributes_attribute_group_id_fkey` ON `product_attributes`;

-- AlterTable
ALTER TABLE `attribute_groups` DROP PRIMARY KEY,
    DROP COLUMN `attributes_group_id`,
    ADD COLUMN `attribute_group_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`attribute_group_id`);

-- AlterTable
ALTER TABLE `brands` ADD COLUMN `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `order_items` MODIFY `item_status` ENUM('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `orders` DROP COLUMN `guest_emal`,
    ADD COLUMN `guest_email` VARCHAR(191) NOT NULL,
    MODIFY `order_status` ENUM('PENDING', 'CONFIRMED', 'SHIPPED', 'DELIVERED', 'CANCELLED') NOT NULL,
    MODIFY `payment_status` ENUM('PENDING', 'PAID', 'FAILED', 'REFUNDED', 'CANCELLED') NOT NULL;

-- AlterTable
ALTER TABLE `product_attributes` DROP COLUMN `is_fillerable`,
    ADD COLUMN `is_filterable` BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `brands_brand_name_key` ON `brands`(`brand_name`);

-- CreateIndex
CREATE UNIQUE INDEX `product_variants_product_variant_sku_key` ON `product_variants`(`product_variant_sku`);

-- AddForeignKey
ALTER TABLE `product_attributes` ADD CONSTRAINT `product_attributes_attribute_group_id_fkey` FOREIGN KEY (`attribute_group_id`) REFERENCES `attribute_groups`(`attribute_group_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

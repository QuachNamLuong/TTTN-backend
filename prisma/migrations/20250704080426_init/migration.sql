-- CreateTable
CREATE TABLE `users` (
    `user_id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `role_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_username_key`(`username`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `role_id` VARCHAR(191) NOT NULL,
    `role_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `roles_role_name_key`(`role_name`),
    PRIMARY KEY (`role_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` VARCHAR(191) NOT NULL,
    `guest_name` VARCHAR(191) NOT NULL,
    `guest_emal` VARCHAR(191) NOT NULL,
    `guest_phone_number` VARCHAR(191) NOT NULL,
    `shipping_address` VARCHAR(191) NOT NULL,
    `shipping_phone_number` VARCHAR(191) NOT NULL,
    `order_total` DECIMAL(18, 0) NOT NULL,
    `order_status` INTEGER NOT NULL,
    `payment_method` INTEGER NOT NULL,
    `payment_status` INTEGER NOT NULL,
    `shipping_cost` DECIMAL(18, 0) NOT NULL,
    `coupon_code` VARCHAR(191) NOT NULL,
    `discount_amount` DECIMAL(18, 0) NOT NULL,
    `ordered_at` DATETIME(3) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,
    `tracking_number` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NULL,

    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `order_item_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price_at_purchase` DECIMAL(18, 0) NOT NULL,
    `total_item_price` DECIMAL(18, 0) NOT NULL,
    `item_status` INTEGER NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `product_variant_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`order_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_variants` (
    `product_variant_id` VARCHAR(191) NOT NULL,
    `product_variant_sku` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,
    `stock_quantity` INTEGER NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_variant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `products` (
    `product_id` VARCHAR(191) NOT NULL,
    `product_name` VARCHAR(191) NOT NULL,
    `brand_id` VARCHAR(191) NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `brands` (
    `brand_id` VARCHAR(191) NOT NULL,
    `brand_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`brand_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `category_id` VARCHAR(191) NOT NULL,
    `category_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `variant_option_selections` (
    `variant_option_selection_id` VARCHAR(191) NOT NULL,
    `option_value_id` VARCHAR(191) NOT NULL,
    `product_variant_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`variant_option_selection_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `option_values` (
    `option_value_id` VARCHAR(191) NOT NULL,
    `option_value_name` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `option_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`option_value_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `options` (
    `option_id` VARCHAR(191) NOT NULL,
    `option_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`option_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attribute_groups` (
    `attributes_group_id` VARCHAR(191) NOT NULL,
    `group_name` VARCHAR(191) NOT NULL,
    `display_order` INTEGER NOT NULL,
    `category_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`attributes_group_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_attributes` (
    `product_attribute_id` VARCHAR(191) NOT NULL,
    `attribute_name` VARCHAR(191) NOT NULL,
    `display_order` INTEGER NOT NULL,
    `is_fillerable` BOOLEAN NOT NULL,
    `attribute_group_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_attribute_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_specifications` (
    `product_specification_id` VARCHAR(191) NOT NULL,
    `attribute_value` VARCHAR(191) NOT NULL,
    `product_id` VARCHAR(191) NOT NULL,
    `product_attribute_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`product_specification_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cart_items` (
    `cart_item_id` VARCHAR(191) NOT NULL,
    `session_id` VARCHAR(191) NULL,
    `user_id` VARCHAR(191) NULL,
    `product_variant_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cart_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`role_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants`(`product_variant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_variants` ADD CONSTRAINT `product_variants_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_brand_id_fkey` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`brand_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `products` ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `variant_option_selections` ADD CONSTRAINT `variant_option_selections_option_value_id_fkey` FOREIGN KEY (`option_value_id`) REFERENCES `option_values`(`option_value_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `variant_option_selections` ADD CONSTRAINT `variant_option_selections_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants`(`product_variant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `option_values` ADD CONSTRAINT `option_values_option_id_fkey` FOREIGN KEY (`option_id`) REFERENCES `options`(`option_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attribute_groups` ADD CONSTRAINT `attribute_groups_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_attributes` ADD CONSTRAINT `product_attributes_attribute_group_id_fkey` FOREIGN KEY (`attribute_group_id`) REFERENCES `attribute_groups`(`attributes_group_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_specifications` ADD CONSTRAINT `product_specifications_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_specifications` ADD CONSTRAINT `product_specifications_product_attribute_id_fkey` FOREIGN KEY (`product_attribute_id`) REFERENCES `product_attributes`(`product_attribute_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_product_variant_id_fkey` FOREIGN KEY (`product_variant_id`) REFERENCES `product_variants`(`product_variant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `kategoris` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `kategoris`;

-- CreateTable
CREATE TABLE `kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `kategori_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

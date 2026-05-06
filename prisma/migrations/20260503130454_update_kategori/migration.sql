/*
  Warnings:

  - You are about to drop the column `nama` on the `kategoris` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `kategoris` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `kategoris` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `kategoris_nama_key` ON `kategoris`;

-- AlterTable
ALTER TABLE `kategoris` DROP COLUMN `nama`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `kategoris_name_key` ON `kategoris`(`name`);

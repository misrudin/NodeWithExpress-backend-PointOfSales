-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 05, 2020 at 05:12 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `post`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `token` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `date_add` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `nama_category` varchar(164) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `nama_category`) VALUES
(1, 'Makanan'),
(2, 'Minuman');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `date_pay` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_name`
--

CREATE TABLE `product_name` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `description` varchar(128) NOT NULL,
  `price` int(20) NOT NULL,
  `stok` int(11) NOT NULL,
  `image` varchar(128) NOT NULL,
  `id_category` int(11) NOT NULL,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_name`
--

INSERT INTO `product_name` (`id`, `name`, `description`, `price`, `stok`, `image`, `id_category`, `update_at`, `created_at`) VALUES
(19, 'Batagor', 'Batagor khas buatan mamang.', 5000, 50, 'http://localhost:4001/uploads/ku.jpg', 1, '2020-02-05 14:36:56', '2020-02-04 11:05:28'),
(20, 'Kopi Hitam', 'Kopi hitam dengan aroma yang khas.', 3000, 20, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-05 14:00:58', '2020-02-04 13:59:26'),
(21, 'Kopi susu', 'Kopi kental manis campur susu coklat.', 5000, 50, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-05 14:02:51', '2020-02-04 14:02:50'),
(22, 'Jus Jeruk', 'Menyegarkan pikiran.', 45000, 20, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-05 05:05:59', '2020-02-04 14:03:26'),
(23, 'Donat', 'Donat manis menggiurkan.', 5000, 20, 'http://localhost:4001/uploads/6157355-cofe.jpg', 1, '2020-02-05 06:30:06', '2020-02-05 06:30:06'),
(24, 'Jus mangga', 'Manis khas mangga muda.', 3500, 70, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-04 17:00:00', '2020-02-04 17:00:00'),
(25, 'Pilus Garuda', 'Renyah tak tertahan.', 500, 70, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-04 17:00:00', '2020-02-04 17:00:00'),
(26, 'Air Putih', 'Bening dan segar.', 2000, 30, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-04 17:00:00', '2020-02-04 17:00:00'),
(27, 'Es Teh Manis', 'Teh tubruk.', 2500, 20, 'http://localhost:4001/uploads/6157355-cofe.jpg', 2, '2020-02-04 17:00:00', '2020-02-04 17:00:00'),
(28, 'Bakwan', 'Reanyah dan gurih.', 1000, 0, 'http://localhost:4001/uploads/6157355-cofe.jpg', 1, '2020-02-04 17:00:00', '2020-02-04 17:00:00'),
(29, 'kelapa', 'kelapa muda', 38, 9, 'http://localhost:4001/uploads/20200111_210245.jpg', 2, '2020-02-05 14:42:47', '2020-02-05 13:05:31');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`) VALUES
(10, 'udin', '$2a$10$ufylJnA3gEqRel5mg6EshuxOSePA879EgdTEBXBjVSMDtBqqflb9W'),
(11, 'kudin', '$2a$10$qKEgI08uHz6fZ3S.xO.FOuwmPbT1C24I/FBkT5pfGDjuX7bPNkKMe');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_name`
--
ALTER TABLE `product_name`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `product_name`
--
ALTER TABLE `product_name`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

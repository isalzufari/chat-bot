-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jan 2023 pada 10.41
-- Versi server: 10.4.19-MariaDB
-- Versi PHP: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_chat_reserved_backup`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `send` text NOT NULL,
  `receive` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`id`, `send`, `receive`) VALUES
(2, 'Haiii', 'Hallo! Selamat datang di Muara Ciante Adventure, saya chat bot yang akan membantu kalian dalam proses reservasi! /pesan (menampilkan pilihan menu)');

-- --------------------------------------------------------

--
-- Struktur dari tabel `fasilitas`
--

CREATE TABLE `fasilitas` (
  `id` int(11) NOT NULL,
  `fasilitas` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `fasilitas`
--

INSERT INTO `fasilitas` (`id`, `fasilitas`) VALUES
(69716, 'APD'),
(69716, 'Video'),
(69716, 'Dokumentasi'),
(64109, 'Dokumentasi'),
(64109, 'Es Kelapa'),
(64109, 'Makan Siang'),
(97380, 'APD'),
(97380, 'Video'),
(97380, 'Photo'),
(74265, 'APD'),
(74265, 'Video'),
(74265, 'Poto');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwal`
--

CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL,
  `id_paket` int(11) NOT NULL,
  `jadwal` datetime NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jadwal`
--

INSERT INTO `jadwal` (`id`, `id_paket`, `jadwal`, `status`) VALUES
(5, 2, '2023-01-04 10:30:00', 0),
(6, 2, '2023-01-03 07:24:52', 0),
(7, 2, '2023-01-06 13:30:00', 1),
(8, 2, '2023-01-06 13:30:00', 0),
(43, 1, '2023-01-05 10:00:00', 1),
(44, 1, '2023-01-06 14:00:00', 1),
(45, 2, '2023-01-05 10:00:00', 0),
(46, 2, '2023-01-06 10:00:00', 0),
(47, 1, '2023-01-07 10:00:00', 0),
(48, 7, '2023-01-05 10:00:00', 1),
(49, 7, '2023-01-06 10:00:00', 0),
(50, 7, '2023-01-07 10:00:00', 0),
(51, 7, '2023-01-08 10:00:00', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `paket`
--

CREATE TABLE `paket` (
  `id` int(11) NOT NULL,
  `id_fasilitas` int(11) NOT NULL,
  `nama` varchar(12) NOT NULL,
  `jarak` int(11) NOT NULL,
  `waktu` int(11) NOT NULL,
  `tarif` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `paket`
--

INSERT INTO `paket` (`id`, `id_fasilitas`, `nama`, `jarak`, `waktu`, `tarif`) VALUES
(1, 69716, 'CIhuyy', 1, 240, 250000),
(2, 64109, 'Asoy', 5, 240, 350000),
(7, 74265, 'Asyouuu', 1, 120, 130000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `reservasi`
--

CREATE TABLE `reservasi` (
  `id` int(11) NOT NULL,
  `id_paket` int(11) NOT NULL,
  `id_jadwal` int(11) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `alamat` text NOT NULL,
  `total_pembayaran` int(11) NOT NULL,
  `status_pembayaran` tinyint(1) NOT NULL,
  `bukti_pembayaran` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `reservasi`
--

INSERT INTO `reservasi` (`id`, `id_paket`, `id_jadwal`, `nama`, `alamat`, `total_pembayaran`, `status_pembayaran`, `bukti_pembayaran`) VALUES
(35, 1, 44, 'Faishal Zufari', 'Depok', 750000, 1, '1672755510802.jpg'),
(36, 7, 48, 'Cangju', 'Jakarta', 390000, 0, '1672806984093.jpg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_reservasi` int(11) NOT NULL,
  `nama` varchar(12) NOT NULL,
  `tpt_lahir` varchar(12) NOT NULL,
  `tgl_lahir` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `id_reservasi`, `nama`, `tpt_lahir`, `tgl_lahir`) VALUES
(22, 35, 'Ical', 'Depok', '2002-04-21'),
(23, 35, 'Pilqi', 'Depok', '2002-04-22'),
(24, 35, 'Yuda', 'Bogor', '2006-04-21'),
(25, 36, 'Wahyu', 'Bogor', '1999-06-21'),
(26, 36, 'Zafira', 'Depok', '2000-01-06'),
(27, 36, 'Ijul', 'Bogor', '1998-07-17');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `fasilitas`
--
ALTER TABLE `fasilitas`
  ADD KEY `id` (`id`);

--
-- Indeks untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_paket` (`id_paket`);

--
-- Indeks untuk tabel `paket`
--
ALTER TABLE `paket`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_fasilitas` (`id_fasilitas`);

--
-- Indeks untuk tabel `reservasi`
--
ALTER TABLE `reservasi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_paket` (`id_paket`),
  ADD KEY `id_jadwal` (`id_jadwal`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_reservasi` (`id_reservasi`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT untuk tabel `paket`
--
ALTER TABLE `paket`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `reservasi`
--
ALTER TABLE `reservasi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `reservasi`
--
ALTER TABLE `reservasi`
  ADD CONSTRAINT `reservasi_ibfk_1` FOREIGN KEY (`id_paket`) REFERENCES `paket` (`id`),
  ADD CONSTRAINT `reservasi_ibfk_2` FOREIGN KEY (`id_jadwal`) REFERENCES `jadwal` (`id`);

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_reservasi`) REFERENCES `reservasi` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

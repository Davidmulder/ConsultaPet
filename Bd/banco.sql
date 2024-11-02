/*
SQLyog Community Edition- MySQL GUI v6.55
MySQL - 5.5.5-10.4.32-MariaDB : Database - veterinario
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`veterinario` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `veterinario`;

/*Table structure for table `cache` */

DROP TABLE IF EXISTS `cache`;

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cache` */

/*Table structure for table `cache_locks` */

DROP TABLE IF EXISTS `cache_locks`;

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `cache_locks` */

/*Table structure for table `consultas` */

DROP TABLE IF EXISTS `consultas`;

CREATE TABLE `consultas` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `veterinario_id` bigint(20) unsigned NOT NULL,
  `nome_paciente` varchar(255) NOT NULL,
  `especie` varchar(255) NOT NULL,
  `raca` varchar(255) NOT NULL,
  `nome_tutor` varchar(255) NOT NULL,
  `motivo_consulta` text NOT NULL,
  `data_hora` datetime NOT NULL,
  `status` enum('pendente','concluida','cancelado') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `consultas_veterinario_id_foreign` (`veterinario_id`),
  CONSTRAINT `consultas_veterinario_id_foreign` FOREIGN KEY (`veterinario_id`) REFERENCES `veterinarios` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `consultas` */

insert  into `consultas`(`id`,`veterinario_id`,`nome_paciente`,`especie`,`raca`,`nome_tutor`,`motivo_consulta`,`data_hora`,`status`,`created_at`,`updated_at`) values (1,4,'Mill','Gato','Siames','Jessica','Check-up de rotina','2024-11-15 10:00:00','pendente','2024-11-02 16:04:04','2024-11-02 16:04:04');

/*Table structure for table `failed_jobs` */

DROP TABLE IF EXISTS `failed_jobs`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `failed_jobs` */

/*Table structure for table `job_batches` */

DROP TABLE IF EXISTS `job_batches`;

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `job_batches` */

/*Table structure for table `jobs` */

DROP TABLE IF EXISTS `jobs`;

CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `jobs` */

/*Table structure for table `migrations` */

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `migrations` */

insert  into `migrations`(`id`,`migration`,`batch`) values (1,'0001_01_01_000000_create_users_table',1),(2,'0001_01_01_000001_create_cache_table',1),(3,'0001_01_01_000002_create_jobs_table',1),(4,'2024_10_25_161019_create_veterinarios_table',1),(5,'2024_10_25_161822_create_consultas_table',1),(6,'2024_10_28_181449_alter_status_column_in_consultas_table',1),(7,'2024_10_29_114609_add_api_token_to_users_table',1);

/*Table structure for table `password_reset_tokens` */

DROP TABLE IF EXISTS `password_reset_tokens`;

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `password_reset_tokens` */

/*Table structure for table `sessions` */

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `sessions` */

insert  into `sessions`(`id`,`user_id`,`ip_address`,`user_agent`,`payload`,`last_activity`) values ('odhcElviKMoLknc0dfgvAOYu7vCSTX7EgvJVmSQE',NULL,'127.0.0.1','Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36','YTozOntzOjY6Il90b2tlbiI7czo0MDoiVk10eTVjOXg5ekVsWlFGQmpibm12UXBnejRTbUdJWHF3U2x6MG1PcCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=',1730562823);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `api_token` varchar(64) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  UNIQUE KEY `users_api_token_unique` (`api_token`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `users` */

insert  into `users`(`id`,`name`,`email`,`email_verified_at`,`password`,`api_token`,`remember_token`,`created_at`,`updated_at`) values (2,'Jessica natasha','jessica@gmail.com',NULL,'$2y$12$opKlUlico3RElC8iaB7bBOzZkrk7SmuAknRpzfUm5Lnc7ApsU2sXO',NULL,NULL,'2024-11-02 15:58:28','2024-11-02 15:58:28'),(3,'david orion','david.foxmulder@gmail.com',NULL,'$2y$12$OoCdo9XIHDp3bLrxTv8WH.hHGVxyxjfdPXMBIo7Ea18KPPvglE0Oq','Dkfxuz10GBsdYj6pTsdSPEMy9bvFR1kJbZBn4fNBWqaaK8d4Ubj87GUHd322',NULL,'2024-11-02 15:59:13','2024-11-02 15:59:33');

/*Table structure for table `veterinarios` */

DROP TABLE IF EXISTS `veterinarios`;

CREATE TABLE `veterinarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `texto` text NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

/*Data for the table `veterinarios` */

insert  into `veterinarios`(`id`,`nome`,`texto`,`imagem`,`created_at`,`updated_at`) values (1,'Medico Moreno','Lorem ipsum dolor sit amet. Id corporis minus eum consequuntur corrupti et corrupti ducimus rem galisum voluptates. Ex quia recusandae est fugiat totam ad suscipit molestiae et reiciendis dolorem a velit tenetur qui adipisci suscipit. Et dolores nesciunt aut tempora adipisci vel velit eaque sed error voluptatem ut deleniti saepe aut facere error rem nobis Quis.','medicomoreno.jpg','2024-11-02 16:01:46','2024-11-02 16:01:46'),(2,'Medico Jessica','Lorem ipsum dolor sit amet. Id corporis minus eum consequuntur corrupti et corrupti ducimus rem galisum voluptates. Ex quia recusandae est fugiat totam ad suscipit molestiae et reiciendis dolorem a velit tenetur qui adipisci suscipit. Et dolores nesciunt aut tempora adipisci vel velit eaque sed error voluptatem ut deleniti saepe aut facere error rem nobis Quis.','jessicamedica.jpg','2024-11-02 16:02:14','2024-11-02 16:02:14'),(3,'Medico Gata','Lorem ipsum dolor sit amet. Id corporis minus eum consequuntur corrupti et corrupti ducimus rem galisum voluptates. Ex quia recusandae est fugiat totam ad suscipit molestiae et reiciendis dolorem a velit tenetur qui adipisci suscipit. Et dolores nesciunt aut tempora adipisci vel velit eaque sed error voluptatem ut deleniti saepe aut facere error rem nobis Quis.','medicagata.png','2024-11-02 16:02:36','2024-11-02 16:02:36'),(4,'Medico Careca','Lorem ipsum dolor sit amet. Id corporis minus eum consequuntur corrupti et corrupti ducimus rem galisum voluptates. Ex quia recusandae est fugiat totam ad suscipit molestiae et reiciendis dolorem a velit tenetur qui adipisci suscipit. Et dolores nesciunt aut tempora adipisci vel velit eaque sed error voluptatem ut deleniti saepe aut facere error rem nobis Quis.','medicocareca.jpg','2024-11-02 16:03:02','2024-11-02 16:03:02');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

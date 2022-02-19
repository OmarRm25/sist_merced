-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 30, 2021 at 01:17 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `merced_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admon_file`
--

DROP TABLE IF EXISTS `admon_file`;
CREATE TABLE IF NOT EXISTS `admon_file` (
  `id_admon` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `constitutive_act` varchar(10) NOT NULL,
  `fiscal_constance` varchar(10) NOT NULL,
  `compliance_opinion` varchar(10) NOT NULL,
  `curp` varchar(10) NOT NULL,
  `rfc` varchar(14) NOT NULL,
  `address_voucher` varchar(10) NOT NULL,
  `account_status` varchar(10) NOT NULL,
  `official_id` varchar(10) NOT NULL,
  `legal_power` varchar(10) NOT NULL,
  `update_date` varchar(10) NOT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_admon`),
  UNIQUE KEY `id_finantial_ally_UNIQUE` (`id_admon`),
  KEY `fk_admon_file_organization1_idx` (`id_organization`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admon_file`
--

INSERT INTO `admon_file` (`id_admon`, `id_organization`, `constitutive_act`, `fiscal_constance`, `compliance_opinion`, `curp`, `rfc`, `address_voucher`, `account_status`, `official_id`, `legal_power`, `update_date`, `register`) VALUES
(1, 2, 'Sí', 'Sí', 'Sí', 'No aplica', 'Sí', 'Sí', 'No', 'Sí', 'Sí', '22/08/2021', ''),
(2, 1, 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'Sí', 'No aplica', 'Sí', 'No aplica', 'Sí', '11/10/2021', ''),
(3, 1, 'Sí', 'No aplica', 'No aplica', 'Sí', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'Sí', '13/10/2021', 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `consultor`
--

DROP TABLE IF EXISTS `consultor`;
CREATE TABLE IF NOT EXISTS `consultor` (
  `id_consultor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `full_name` varchar(45) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `prof_speciality` varchar(1000) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `phone2` varchar(10) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `postal_code` tinytext NOT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_consultor`),
  UNIQUE KEY `id_consultor_UNIQUE` (`id_consultor`),
  UNIQUE KEY `rfc` (`rfc`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `consultor`
--

INSERT INTO `consultor` (`id_consultor`, `full_name`, `rfc`, `prof_speciality`, `phone`, `phone2`, `email`, `postal_code`, `register`) VALUES
(1, 'Héctor Omar Rementería Morales', 'XXX000000XX1', '', '5534399941', '5534399941', 'orastaroth67@gmail.com', '57180', ''),
(2, 'John Doe', 'HEMD930603UP8', 'Consititución legal y trámite de donatarias autorizadas', '5512345678', '', 'correofalso@tumail.com', '57000', ''),
(3, 'Dulce Hernández', 'FMI1234565T6', '|Administración y finanzas para OSC,Consititución legal y trámite de donatarias autorizadas|', '5534468513', '', 'dulcehmor@gmail.com', '57180', ''),
(4, 'test', 'RFC1234567R0', 'Innovación y emprendimiento social', '1234566777', '', 'h.rementeria@fundacionmerced.org.mx', '12345', 'h.rementeria@fundacionmerced.org.mx'),
(5, 'test', 'test123456789', 'Desarrollo de indicadores', '3435345345', '', 'cdsdadccdcsc@sdsdasd', '12345', 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id_contact` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `middle_name` varchar(10) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `position` varchar(45) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `phone_number2` varchar(10) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_contact`),
  KEY `fk_contact_organization1_idx` (`id_organization`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id_contact`, `first_name`, `middle_name`, `last_name`, `position`, `phone_number`, `phone_number2`, `email`, `id_organization`, `register`) VALUES
(1, 'Héctor Omar', 'Rementería', 'Morales', 'Programador', '5534399941', '', 'orastaroth67@gmail.com', 1, ''),
(2, 'test', 'test', 'test', 'test', '1234567890', '', 'test@test', 2, 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE IF NOT EXISTS `employee` (
  `id_employee` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(45) NOT NULL,
  `middle_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_employee`),
  UNIQUE KEY `id_leader_UNIQUE` (`id_employee`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id_employee`, `employee_name`, `middle_name`, `last_name`, `email`, `password`) VALUES
(1, 'MARÍA VICTORIA', 'CARDIN', 'MARTINELLI', 'v.cardin@fundacionmerced.org.mx', 'vcardin123!'),
(2, 'DALIA FABIOLA', 'HERNÁNDEZ', 'ESCAMILLA', 'd.hernandez@fundacionmerced.org.mx', 'dhernandez456!'),
(3, 'ANA RUTH', 'TREJO', 'GALBÁN', 'r.trejo@fundacionmerced.org.mx', 'rtrejo789!'),
(4, 'EDUARDO', 'ESTRADA', 'QUIROZ', 'e.estrada@fundacionmerced.org.mx', 'eestrada123@'),
(5, 'SILVIA', 'PALESTINO', 'LARA', 's.palestino@fundacionmerced.org.mx', 'spalestino456@'),
(6, 'KARLA', 'VILCHIS', 'GONZÁLEZ', 'k.vilchis@fundacionmerced.org.mx', 'kvilchis789@'),
(7, 'ARACELI', 'ROLDÁN', 'ALCALÁ', 'a.roldan@fundacionmerced.org.mx', 'aroldan123#'),
(8, 'DULCE DANIELA', 'GAYTÁN', 'ARELLANO', 'daniela.gaytan@fundacionmerced.org.mx', 'dgaytan456#'),
(9, 'KARLA', 'JIMENEZ', 'ARZAMENDI', 'k.jimenez@fundacionmerced.org.mx', 'kjimenez789#'),
(10, 'VERÓNICA GUADALUPE', 'BARRIENTOS', 'ANAYA', 'v.barrientos@fundacionmerced.org.mx', 'vbarrientos123$'),
(11, 'Héctor Omar', 'Rementería', 'Morales', 'h.rementeria@fundacionmerced.org.mx', '12345678');

-- --------------------------------------------------------

--
-- Table structure for table `fort_participation`
--

DROP TABLE IF EXISTS `fort_participation`;
CREATE TABLE IF NOT EXISTS `fort_participation` (
  `id_part` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `id_program` int(10) UNSIGNED NOT NULL,
  `id_consultor` int(10) UNSIGNED NOT NULL,
  `consultor2` varchar(45) NOT NULL,
  `consultor3` varchar(45) NOT NULL,
  `consultor4` varchar(45) NOT NULL,
  `consultor5` varchar(45) NOT NULL,
  `consultor6` varchar(45) NOT NULL,
  `consultor7` varchar(45) NOT NULL,
  `consultor8` varchar(45) NOT NULL,
  `theme` varchar(45) NOT NULL,
  `ally_name` varchar(45) NOT NULL,
  `project_name` varchar(300) NOT NULL,
  `project_objective` varchar(1000) NOT NULL,
  `male_beneficiaries` int(11) NOT NULL,
  `female_beneficiaries` int(11) NOT NULL,
  `org_beneficiaries` int(10) NOT NULL,
  `population_type` varchar(400) NOT NULL,
  `start_date` varchar(10) NOT NULL,
  `end_date` varchar(10) DEFAULT NULL,
  `achievments` varchar(300) NOT NULL,
  `application_state` varchar(2000) NOT NULL,
  `municipality` varchar(50) NOT NULL,
  `resources_invested` varchar(10) DEFAULT NULL,
  `update_date` varchar(10) NOT NULL,
  `comments` varchar(1000) NOT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_part`,`id_organization`),
  KEY `fk_program_has_organization_organization1_idx` (`id_organization`),
  KEY `fk_program_organization_program1_idx` (`id_program`),
  KEY `fk_program_organization_consultor1_idx` (`id_consultor`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `fort_participation`
--

INSERT INTO `fort_participation` (`id_part`, `id_organization`, `id_program`, `id_consultor`, `consultor2`, `consultor3`, `consultor4`, `consultor5`, `consultor6`, `consultor7`, `consultor8`, `theme`, `ally_name`, `project_name`, `project_objective`, `male_beneficiaries`, `female_beneficiaries`, `org_beneficiaries`, `population_type`, `start_date`, `end_date`, `achievments`, `application_state`, `municipality`, `resources_invested`, `update_date`, `comments`, `register`) VALUES
(4, 2, 1, 1, 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'Órgano de Gobierno', 'Lluvia para todos A.C.', 'Programa de fortalecimiento de rigor institucional', 'perros de la calle', 123, 123, 123, '|Infancia (6-12 años),Adolescencia (13-18 años)|', '08/08/2021', '24/08/2021', 'Agua limpia para la comunidad', '|Chihuahua,Durango|', 'Tlacotenco', '1233', '', '', ''),
(10, 1, 1, 3, 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'No aplica', 'Asesoría legal y fiscal', 'Fundación Merced', 'test', 'sdfadsfasdfsadf', 12, 12, 0, 'Adultez (30-59 años)', '12/10/2021', '13/10/2021', 'test', 'Baja California Sur', 'test', '1234', '12/10/2021', '', 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `invsoc_participation`
--

DROP TABLE IF EXISTS `invsoc_participation`;
CREATE TABLE IF NOT EXISTS `invsoc_participation` (
  `id_partIS` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `id_program` int(10) UNSIGNED NOT NULL,
  `id_consultor` int(10) UNSIGNED NOT NULL,
  `consultor2` varchar(45) DEFAULT NULL,
  `consultor3` varchar(45) DEFAULT NULL,
  `theme` varchar(45) NOT NULL,
  `announcement_year` varchar(4) NOT NULL,
  `project_name` varchar(300) NOT NULL,
  `project_objective` varchar(1009) NOT NULL,
  `population_type` varchar(400) DEFAULT NULL,
  `male_beneficiaries` int(10) UNSIGNED NOT NULL,
  `female_beneficiaries` int(10) UNSIGNED NOT NULL,
  `org_beneficiaries` int(10) NOT NULL,
  `project_type` varchar(12) NOT NULL,
  `start_date` varchar(10) DEFAULT NULL,
  `end_date` varchar(10) DEFAULT NULL,
  `resources` varchar(20) DEFAULT NULL,
  `ally_name` varchar(45) DEFAULT NULL,
  `achievments` varchar(300) DEFAULT NULL,
  `application_state` varchar(2000) DEFAULT NULL,
  `municipality` varchar(50) DEFAULT NULL,
  `donative` varchar(10) DEFAULT NULL,
  `donative2` varchar(10) DEFAULT NULL,
  `donative3` varchar(10) DEFAULT NULL,
  `formation_format` text,
  `formation_theme` varchar(45) DEFAULT NULL,
  `num_sessions` int(11) DEFAULT NULL,
  `fort_theme` varchar(45) DEFAULT NULL,
  `num_sessions_fort` int(11) DEFAULT NULL,
  `update_date` varchar(10) NOT NULL,
  `comments` varchar(1000) DEFAULT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_partIS`,`id_consultor`,`id_program`,`id_organization`),
  UNIQUE KEY `id_partIS_UNIQUE` (`id_partIS`),
  KEY `fk_table1_program1_idx` (`id_program`),
  KEY `fk_table1_organization1_idx` (`id_organization`),
  KEY `fk_invsoc_participation_consultor1_idx` (`id_consultor`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invsoc_participation`
--

INSERT INTO `invsoc_participation` (`id_partIS`, `id_organization`, `id_program`, `id_consultor`, `consultor2`, `consultor3`, `theme`, `announcement_year`, `project_name`, `project_objective`, `population_type`, `male_beneficiaries`, `female_beneficiaries`, `org_beneficiaries`, `project_type`, `start_date`, `end_date`, `resources`, `ally_name`, `achievments`, `application_state`, `municipality`, `donative`, `donative2`, `donative3`, `formation_format`, `formation_theme`, `num_sessions`, `fort_theme`, `num_sessions_fort`, `update_date`, `comments`, `register`) VALUES
(1, 1, 1, 2, 'No aplica', 'No aplica', 'Institucionalidad', '2021', 'Programa de fortalecimiento de rigor institucional', 'Contribuir al desarrollo de la comunidad a través de un sistema de saneamiento descentralizado para asegurar el acceso al agua', '|Primera infancia (0-5 años),Infancia (6-12 años),Adolescencia (13-18 años)|', 123, 123, 0, 'Seleccionado', '17/08/2021', '19/08/2021', 'Aliado Financiero', 'Lluvia para todos A.C.', '10 organizaciones fortalecidas', '|Ciudad de México,Estado de México,Guerrero|', 'Álvaro Obregón', '1234567', '', '', 'Diplomado', 'Marco legal y fiscal', 123, 'Sin fortalecimiento', 0, '', '', ''),
(2, 2, 1, 1, 'No aplica', 'No aplica', 'Seguridad alimentaria', '2019', 'Programa de fortalecimiento de rigor institucional', 'qewrwerq', 'Adolescencia (13-18 años)', 0, 0, 0, 'Seleccionado', '22/08/2021', '30/08/2021', 'Propios', NULL, 'Agua limpia para la comunidad', '|Chihuahua,Colima|', 'Tlacotenco', '56799786', '', '', 'Sin formación', NULL, 0, 'Sin fortalecimiento', 0, '', '', ''),
(3, 1, 1, 1, 'No aplica', 'No aplica', 'Proyectos productivos', '2021', 'sdfsdfsjkdfl|', 'Impulsar el desarrollo de ecotecnologías para el cuidado del agua', 'Primera infancia (0-5 años)', 0, 0, 0, 'Postulante', '', '', NULL, NULL, '', 'No aplica', '', '', '', '', NULL, NULL, 0, NULL, 0, '', '', ''),
(4, 2, 1, 3, 'No aplica', 'No aplica', 'Participación ciudadana', '2023', 'test', 'test', 'Adolescencia (13-18 años)', 0, 0, 0, 'Postulante', '', '', NULL, NULL, '', 'No aplica', '', '', '', '', NULL, NULL, 0, 'No aplica', 0, '12/10/2021', '', 'h.rementeria@fundacionmerced.org.mx'),
(5, 2, 1, 1, 'Dulce Hernández', 'No aplica', 'Participación ciudadana', '2025', 'test', 'test', 'Infancia (6-12 años)', 1222, 1222, 12212, 'Postulante', '', '', NULL, NULL, '', 'No aplica', '', '', '', '', NULL, NULL, 0, 'No aplica', 0, '12/10/2021', '', 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
CREATE TABLE IF NOT EXISTS `organization` (
  `id_organization` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `org_name` varchar(150) NOT NULL,
  `intervention_area` varchar(45) NOT NULL,
  `other` varchar(50) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `state` varchar(45) NOT NULL,
  `municipality` varchar(45) NOT NULL,
  `blacklist` varchar(2) NOT NULL,
  `address` varchar(100) NOT NULL,
  `postal_code` tinytext NOT NULL,
  `website` varchar(45) DEFAULT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_organization`),
  UNIQUE KEY `id_organizacion_UNIQUE` (`id_organization`),
  UNIQUE KEY `rfc` (`rfc`),
  UNIQUE KEY `rfc_2` (`rfc`),
  UNIQUE KEY `rfc_3` (`rfc`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`id_organization`, `org_name`, `intervention_area`, `other`, `rfc`, `state`, `municipality`, `blacklist`, `address`, `postal_code`, `website`, `register`) VALUES
(1, 'Fundación Merced', 'Desarrollo social', '', 'XXX000000XXX', 'Ciudad de México', 'Cuauhtémoc', 'No', 'Cedro 214, Santa María la Rivera', '00000', 'www.fundacionmerced.com.mx', ''),
(2, 'Lluvia para todos A.C.', 'Agua, saneamiento e higiene', '', 'XXX000000XX0', 'Chiapas', 'San Cristobal', 'No', 'Calle falsa 123', '23456', 'www.sitiofalso.com', ''),
(3, 'test', 'Derechos humanos', '', 'RFC1234567R9', 'Morelos', 'TEST', 'No', 'TEST', '12345', '', ''),
(4, 'test1', 'Desarrollo social', '', 'test123456789', 'Estado de México', 'test', 'No', 'test test', '12345', '', ''),
(5, 'skldsjklflaflllsd', 'Desarrollo social', '', 'sdfsdafds1223', 'Michoacán', 'TEST', 'No', 'TEST', '12345', '', 'h.rementeria@fundacionmerced.org.mx');

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

DROP TABLE IF EXISTS `program`;
CREATE TABLE IF NOT EXISTS `program` (
  `id_program` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `program_code` varchar(45) NOT NULL,
  `program_name` varchar(100) NOT NULL,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `strategy_line` varchar(45) NOT NULL,
  `strategy_line2` varchar(45) NOT NULL,
  `in_account` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL,
  `register` varchar(100) NOT NULL,
  PRIMARY KEY (`id_program`),
  UNIQUE KEY `id_programa_UNIQUE` (`id_program`),
  UNIQUE KEY `program_code` (`program_code`),
  UNIQUE KEY `id_organization` (`id_organization`),
  UNIQUE KEY `program_code_2` (`program_code`),
  KEY `fk_program_organization1_idx` (`id_organization`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`id_program`, `program_code`, `program_name`, `id_organization`, `strategy_line`, `strategy_line2`, `in_account`, `status`, `register`) VALUES
(1, '21FMI011', 'Rigor Institucional', 1, 'Fortalecimiento', 'No aplica', 'FMBANORTE8355', 'Activo', ''),
(3, '12tst123', 'teest', 2, 'Formación', 'No aplica', 'FMBANORTE0384', 'Activo', '');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admon_file`
--
ALTER TABLE `admon_file`
  ADD CONSTRAINT `fk_admon_file_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `fk_contact_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `fort_participation`
--
ALTER TABLE `fort_participation`
  ADD CONSTRAINT `fk_program_has_organization_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_program_organization_consultor1` FOREIGN KEY (`id_consultor`) REFERENCES `consultor` (`id_consultor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_program_organization_program1` FOREIGN KEY (`id_program`) REFERENCES `program` (`id_program`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `invsoc_participation`
--
ALTER TABLE `invsoc_participation`
  ADD CONSTRAINT `fk_invsoc_participation_consultor1` FOREIGN KEY (`id_consultor`) REFERENCES `consultor` (`id_consultor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_table1_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_table1_program1` FOREIGN KEY (`id_program`) REFERENCES `program` (`id_program`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `fk_program_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 17-08-2021 a las 05:31:08
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `Merced_DB`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admon_file`
--

CREATE TABLE `admon_file` (
  `id_admon` int(10) UNSIGNED NOT NULL,
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
  `update_date` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consultor`
--

CREATE TABLE `consultor` (
  `id_consultor` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(45) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `phone2` varchar(10) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `postal_code` tinytext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contact`
--

CREATE TABLE `contact` (
  `id_contact` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `middle_name` varchar(10) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `position` varchar(45) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `phone_number2` varchar(10) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `id_organization` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employee`
--

CREATE TABLE `employee` (
  `id_employee` int(10) UNSIGNED NOT NULL,
  `employee_name` varchar(45) NOT NULL,
  `middle_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `employee`
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
(10, 'VERÓNICA GUADALUPE', 'BARRIENTOS', 'ANAYA', 'v.barrientos@fundacionmerced.org.mx', 'vbarrientos123$');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fort_participation`
--

CREATE TABLE `fort_participation` (
  `id_part` int(10) UNSIGNED NOT NULL,
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
  `project_name` varchar(150) NOT NULL,
  `project_objective` varchar(300) NOT NULL,
  `male_beneficiaries` int(11) NOT NULL,
  `female_beneficiaries` int(11) NOT NULL,
  `org_beneficiaries` int(10) NOT NULL,
  `population_type` varchar(400) NOT NULL,
  `start_date` varchar(10) NOT NULL,
  `end_date` varchar(10) DEFAULT NULL,
  `achievments` varchar(100) NOT NULL,
  `application_state` varchar(2000) NOT NULL,
  `municipality` varchar(50) NOT NULL,
  `resources_invested` varchar(10) DEFAULT NULL,
  `comments` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invsoc_participation`
--

CREATE TABLE `invsoc_participation` (
  `id_partIS` int(10) UNSIGNED NOT NULL,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `id_program` int(10) UNSIGNED NOT NULL,
  `id_consultor` int(10) UNSIGNED NOT NULL,
  `consultor2` varchar(45) DEFAULT NULL,
  `consultor3` varchar(45) DEFAULT NULL,
  `theme` varchar(45) NOT NULL,
  `announcement_year` varchar(4) NOT NULL,
  `project_name` varchar(300) NOT NULL,
  `project_objective` varchar(300) NOT NULL,
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
  `formation_format` text DEFAULT NULL,
  `formation_theme` varchar(45) DEFAULT NULL,
  `num_sessions` int(11) DEFAULT NULL,
  `fort_theme` varchar(45) DEFAULT NULL,
  `num_sessions_fort` int(11) DEFAULT NULL,
  `comments` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `organization`
--

CREATE TABLE `organization` (
  `id_organization` int(10) UNSIGNED NOT NULL,
  `org_name` varchar(50) NOT NULL,
  `intervention_area` varchar(45) NOT NULL,
  `other` varchar(50) NOT NULL,
  `rfc` varchar(13) NOT NULL,
  `state` varchar(45) NOT NULL,
  `municipality` varchar(45) NOT NULL,
  `blacklist` varchar(2) NOT NULL,
  `address` varchar(100) NOT NULL,
  `postal_code` tinytext NOT NULL,
  `website` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `program`
--

CREATE TABLE `program` (
  `id_program` int(10) UNSIGNED NOT NULL,
  `program_code` varchar(45) NOT NULL,
  `program_name` varchar(45) NOT NULL,
  `id_organization` int(10) UNSIGNED NOT NULL,
  `strategy_line` varchar(45) NOT NULL,
  `strategy_line2` varchar(45) NOT NULL,
  `in_account` varchar(30) NOT NULL,
  `status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admon_file`
--
ALTER TABLE `admon_file`
  ADD PRIMARY KEY (`id_admon`),
  ADD UNIQUE KEY `id_finantial_ally_UNIQUE` (`id_admon`),
  ADD KEY `fk_admon_file_organization1_idx` (`id_organization`);

--
-- Indices de la tabla `consultor`
--
ALTER TABLE `consultor`
  ADD PRIMARY KEY (`id_consultor`),
  ADD UNIQUE KEY `id_consultor_UNIQUE` (`id_consultor`);

--
-- Indices de la tabla `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id_contact`),
  ADD KEY `fk_contact_organization1_idx` (`id_organization`);

--
-- Indices de la tabla `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id_employee`),
  ADD UNIQUE KEY `id_leader_UNIQUE` (`id_employee`);

--
-- Indices de la tabla `fort_participation`
--
ALTER TABLE `fort_participation`
  ADD PRIMARY KEY (`id_part`,`id_organization`),
  ADD KEY `fk_program_has_organization_organization1_idx` (`id_organization`),
  ADD KEY `fk_program_organization_program1_idx` (`id_program`),
  ADD KEY `fk_program_organization_consultor1_idx` (`id_consultor`);

--
-- Indices de la tabla `invsoc_participation`
--
ALTER TABLE `invsoc_participation`
  ADD PRIMARY KEY (`id_partIS`,`id_consultor`,`id_program`,`id_organization`),
  ADD UNIQUE KEY `id_partIS_UNIQUE` (`id_partIS`),
  ADD KEY `fk_table1_program1_idx` (`id_program`),
  ADD KEY `fk_table1_organization1_idx` (`id_organization`),
  ADD KEY `fk_invsoc_participation_consultor1_idx` (`id_consultor`);

--
-- Indices de la tabla `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id_organization`),
  ADD UNIQUE KEY `id_organizacion_UNIQUE` (`id_organization`);

--
-- Indices de la tabla `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id_program`),
  ADD UNIQUE KEY `id_programa_UNIQUE` (`id_program`),
  ADD KEY `fk_program_organization1_idx` (`id_organization`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admon_file`
--
ALTER TABLE `admon_file`
  MODIFY `id_admon` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `consultor`
--
ALTER TABLE `consultor`
  MODIFY `id_consultor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `contact`
--
ALTER TABLE `contact`
  MODIFY `id_contact` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `employee`
--
ALTER TABLE `employee`
  MODIFY `id_employee` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `fort_participation`
--
ALTER TABLE `fort_participation`
  MODIFY `id_part` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `invsoc_participation`
--
ALTER TABLE `invsoc_participation`
  MODIFY `id_partIS` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `organization`
--
ALTER TABLE `organization`
  MODIFY `id_organization` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- AUTO_INCREMENT de la tabla `program`
--
ALTER TABLE `program`
  MODIFY `id_program` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `admon_file`
--
ALTER TABLE `admon_file`
  ADD CONSTRAINT `fk_admon_file_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `contact`
--
ALTER TABLE `contact`
  ADD CONSTRAINT `fk_contact_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `fort_participation`
--
ALTER TABLE `fort_participation`
  ADD CONSTRAINT `fk_program_has_organization_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_program_organization_consultor1` FOREIGN KEY (`id_consultor`) REFERENCES `consultor` (`id_consultor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_program_organization_program1` FOREIGN KEY (`id_program`) REFERENCES `program` (`id_program`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `invsoc_participation`
--
ALTER TABLE `invsoc_participation`
  ADD CONSTRAINT `fk_invsoc_participation_consultor1` FOREIGN KEY (`id_consultor`) REFERENCES `consultor` (`id_consultor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_table1_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_table1_program1` FOREIGN KEY (`id_program`) REFERENCES `program` (`id_program`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `program`
--
ALTER TABLE `program`
  ADD CONSTRAINT `fk_program_organization1` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id_organization`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

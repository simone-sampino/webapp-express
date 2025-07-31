# DB Schema

- `movies`
- `reviews`

## Table: Movies

- `id` int NOT NULL AUTO_INCREMENT
- `title` varchar(255) NOT NULL
- `director` varchar(255) NOT NULL
- `genre` varchar(255) DEFAULT NULL
- `release_year` year DEFAULT NULL
- `abstract` text
- `image` varchar(255) DEFAULT NULL
- `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
- `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

```sql
CREATE TABLE `webapp_express`.`movies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `director` VARCHAR(255) NOT NULL,
  `genre` VARCHAR(255) NULL,
  `release_year` YEAR(4) NULL,
  `abstract` TEXT(500) NULL,
  `image` VARCHAR(255) NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`));

```

## Table: Reviews (one to many)

- `id` int NOT NULL AUTO_INCREMENT
- `movie_id` int NOT NULL
- `name` varchar(255) NOT NULL
- `vote` tinyint NOT NULL
- `text` text
- `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
- `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

```sql
CREATE TABLE `webapp_express`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `movie_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `vote` TINYINT(2) NOT NULL,
  `text` TEXT(500) NULL,
  `created_at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `webapp_express`.`reviews` 
ADD INDEX `movie_review_foreign_idx` (`movie_id` ASC) VISIBLE;
;
ALTER TABLE `webapp_express`.`reviews` 
ADD CONSTRAINT `movie_review_foreign`
  FOREIGN KEY (`movie_id`)
  REFERENCES `webapp_express`.`movies` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

```
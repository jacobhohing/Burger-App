CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers (

  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(500) NOT NULL,
  devoured boolean NOT NULL,

  PRIMARY KEY (id)
)
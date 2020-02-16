DROP DATABASE IF EXISTS burgersDB;
CREATE database burgersDB;

USE burgersDB;

CREATE TABLE burgers (
  burgerID INT NOT NULL AUTO_INCREMENT,
  burgerName VARCHAR(255) NOT NULL,
  devoured BOOLEAN, 
  PRIMARY KEY (burgerID)
);
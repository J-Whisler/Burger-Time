CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    burgerID INT PRIMARY KEY AUTO_INCREMENT,
    burgerName VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false
);
